import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "./user.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) { }

    async signIn(
        userName: string, 
        pass: string
    ): Promise<string> {
        let user = await this.userService.isUserNameExisted(userName);

         if (!user) {
            throw new UnauthorizedException('User not found');
        }

        if (user.password !== pass) {
            throw new UnauthorizedException('Invalid credentials');
        }

        let payload: object = { id: user.id, roleID: user.roleID, name: user.name };
        let accessToken: string = await this.generateToken(payload);

        return accessToken;
    }

    async generateToken(payload: object): Promise<string> {
        return this.jwtService.signAsync(payload);
    }
}
