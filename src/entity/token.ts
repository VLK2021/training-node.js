import {
    Column, Entity, JoinColumn, OneToOne,
} from 'typeorm';

import { CommonFields } from './commonFields';
import { User } from './user';


export interface IToken {
    refreshToken: string;
    userId: number;
}

@Entity('tokens', { database: 'training' })
export class Token extends CommonFields implements IToken {
    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
    refreshToken: string;

    @Column({
        type: 'int',
        nullable: false,
    })
    userId: number;

    @OneToOne(() => User)
    @JoinColumn({ name: 'userId' })
    user: User;
}
