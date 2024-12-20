import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "src/entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(Users)
        private userRepository: Repository<Users>
    ) { }

    async isUserNameExisted(userName: string): Promise<Users | undefined> {
        return await this.userRepository.findOne({
            where: {
                userName: userName, 
            }
        })
    }

    getAllUsers(): Promise<Users[]> {
        return this.userRepository.find();
    }
}