import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userName: string;

    @Column()
    password: string;

    @Column()
    roleID: string;

    @Column()
    email: string;

    @Column({ nullable: true })
    name: string;

    @Column({ nullable: true })
    phoneNumber: string;
    
    @Column({ nullable: true })
    address: string;
}
