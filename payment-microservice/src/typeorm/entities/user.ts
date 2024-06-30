import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Payment } from "./payment";

@Entity({name:'users'})
export class User{
    @PrimaryGeneratedColumn('uuid')
    id : string;
    
    @Column({nullable:false})
    username: string;
    
    @Column({nullable:false,unique:true})
    email: string;

    @Column({nullable:true})
    displayname?:string;

    @OneToMany(()=>Payment,(payment)=>payment.user)
    payments: Payment[];
}