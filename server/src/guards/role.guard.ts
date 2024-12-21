import { 
    CanActivate,
    ExecutionContext, 
    Injectable, 
    Param, 
    UnauthorizedException
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(private jwtService: JwtService) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);

        if (!token) {
            throw new UnauthorizedException();
        }

        try {
            const payload = await this.jwtService.verifyAsync(
                token,
                {
                    secret: process.env.API_KEY,
                }
            );
            const idFromParams: number = Number(request.params.id);

            if (payload.roleID !== 'R0' && idFromParams && idFromParams !== payload.id) {
                throw new UnauthorizedException('Access denied! Insufficient permissions or role mismatch.');
            }

            request.user = payload;
        } catch {
            throw new UnauthorizedException();
        }

        return true;
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}