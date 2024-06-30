import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, EventPattern, Payload } from '@nestjs/microservices';
import { CreatePaymentDTO } from './dtos/createpayment.dto';
import { PaymentService } from './payment.service';

@Controller()
export class PaymentMicroserviceController {
    constructor( @Inject('NATS') private natsclient :ClientProxy , private paymentService : PaymentService) {}

    @EventPattern('createPayment')

    async createPayment(@Payload() payload_payment : CreatePaymentDTO){
        const newPayment = await this.paymentService.createPayment(payload_payment)
        if (!newPayment)return null;
        
        console.log(newPayment)
        return this.natsclient.emit('paymentCreated',newPayment);
    }
}
