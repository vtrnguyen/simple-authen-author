import { Controller, Get, UseGuards } from "@nestjs/common";
import { UserService } from "src/services/user.service";
import { Users } from "src/entities/user.entity";

@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    getAllUsers(): Promise<Users[]> {
        let users = this.userService.getAllUsers();

        return users;
    }
}
