import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { Column, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./user";
@Entity({name:'payments'})
export class Payment{

    @PrimaryGeneratedColumn('uuid')
    id : string;
    
    @Column('float')
    amount: number;

    @ManyToOne(()=>User,(user)=>user.payments)
    @JoinColumn()
    user: User
}