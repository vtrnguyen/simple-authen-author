import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "src/services/auth.service";

@Controller('api/v1/auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    async signIn(@Body() loginInfor: Record<string, any>) {
        if (!loginInfor || !loginInfor.userName || !loginInfor.password) {
            return {
                status: HttpStatus.UNAUTHORIZED,
                message: 'Username and password are required!',
            }
        }

        try {
            let accessToken = await this.authService.signIn(loginInfor.userName, loginInfor.password);

            return {
                status: HttpStatus.OK,
                message: 'Login sucessful...',
                access_token: accessToken,
            };
        } catch (error) {
            return {
                status: HttpStatus.UNAUTHORIZED,
                message: error.message,
            };
        }
    }
}
