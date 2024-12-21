import { Expose } from "class-transformer";

export class UserDto {
    @Expose()
    id: number;

    @Expose()
    userName: string;
    
    password: string;
    
    @Expose()
    email: string;
    
    @Expose()
    name: string;
    
    @Expose()
    phoneNumber: string;
    
    @Expose()
    address: string;
}
