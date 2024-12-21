import { Body, Controller, Get, HttpCode, HttpStatus, Param, UseGuards } from "@nestjs/common";
import { UserService } from "src/services/user.service";
import { Users } from "src/entities/user.entity";
import { UserDto } from "src/dto/user.dto";
import { AuthGuard } from "src/guards/auth.guard";
import { plainToInstance } from "class-transformer";
import { RoleGuard } from "src/guards/role.guard";

@Controller('api/v1/users')
export class UserController {
    constructor(private userService: UserService) { }

    @HttpCode(HttpStatus.OK)
    @Get()
    @UseGuards(AuthGuard)
    async getAllUsers(): Promise<object> {
        let users = await this.userService.handleGetAllUsers();

        if (!users) {
            return {
                status: HttpStatus.NOT_FOUND,
                message: 'Users are not found!',
            }
        }

        return {
            status: HttpStatus.OK,
            message: 'Users are found...',
            users: users,
        }
    }

    @HttpCode(HttpStatus.OK)
    @UseGuards(RoleGuard)
    @Get(':id')
    async getUserByID(@Param('id') userID: number): Promise<object> {
        let user = await this.userService.handleGetUserByID(userID);

        if (!user) {
            return {
                status: HttpStatus.NOT_FOUND,
                message: `User with id ${userID} is not found!`,
            }
        }

        let customizedUser = plainToInstance(UserDto, user, { excludeExtraneousValues: true});

        return {
            status: HttpStatus.OK,
            message: `User with id ${userID} is found...`,
            user: customizedUser,
        }
    }
}
