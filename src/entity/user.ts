import {Column, Entity} from "typeorm";

import {CommonFields} from "./commonFields";

export interface IUser {
    firstName: string;
    lastName: string;
    age: number;
    city: string;
    phone: number;
    email: string;
    password: string
}

@Entity('users', {database: 'training'})
export class User extends CommonFields implements IUser{
    @Column({
        type:'varchar',
        width: 250,
        nullable: false,
    })
    firstName: string;

    @Column({
        type:'varchar',
        width: 250,
        nullable: false,
    })
    lastName: string;

    @Column({
        type: 'int',
        nullable: false,
    })
    age: number;

    @Column({
        type:'varchar',
        width: 250,
    })
    city: string;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
        unique: true,
    })
    phone: number;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
        unique: true,
    })
    email: string;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
    password: string;
}