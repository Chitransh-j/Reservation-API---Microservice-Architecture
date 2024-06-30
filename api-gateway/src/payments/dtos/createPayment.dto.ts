import { IsNotEmpty, IsNumber } from "class-validator";


export class CreatePaymentDTO{
    @IsNumber()
    @IsNotEmpty()
    amount:number

    @IsNotEmpty()
    userid: string;
}

