import { Module } from "@nestjs/common";
import { AuthController } from "src/controllers/auth.controller";
import { AuthService } from "src/services/auth.service";
import { UserModule } from "./user.module";
import { JwtModule } from "@nestjs/jwt";
import "dotenv/config";

@Module({
    imports: [
        UserModule,
        JwtModule.register({
            global: true,
            secret: process.env.API_KEY,
            signOptions: { expiresIn: '3600s' },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService],
})

export class AuthModule { }
