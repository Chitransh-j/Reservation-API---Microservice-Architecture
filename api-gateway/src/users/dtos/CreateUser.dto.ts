import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";


export class CreateUserDTO{
    @IsString()
    @IsNotEmpty()
    @MaxLength(40)
    username:string ;

    @IsOptional()
    @IsString()
    displayname?:string ;
    
    @IsNotEmpty()
    @IsEmail()
    email:string
}