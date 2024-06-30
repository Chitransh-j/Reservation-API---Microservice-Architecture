import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from 'src/typeorm/entities/payment';
import { Repository } from 'typeorm';
import { CreatePaymentDTO } from './dtos/createpayment.dto';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class PaymentService {
    constructor(@Inject('NATS') private natsclient :ClientProxy, @InjectRepository(Payment) private paymentRepo : Repository<Payment>){}
    
    async createPayment({userid , ...createpaymentDTO} : CreatePaymentDTO){
        const user = await lastValueFrom(this.natsclient.send({cmd :'getUserviaid'},{userid}))
        if (user){
            console.log(user)
            const newPayment = this.paymentRepo.create({user,...createpaymentDTO});
            // console.log(newPayment)
            return this.paymentRepo.save(newPayment)
        }
        return null
    }


}
