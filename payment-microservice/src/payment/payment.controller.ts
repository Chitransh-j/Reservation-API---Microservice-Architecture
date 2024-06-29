import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, EventPattern, Payload } from '@nestjs/microservices';
import { CreatePaymentDTO } from './dtos/createpayment.dto';

@Controller()
export class PaymentMicroserviceController {
    constructor( @Inject('NATS') private natsclient :ClientProxy ) {}

    @EventPattern('createPayment')
    createPayment(@Payload() payload_payment : CreatePaymentDTO){
        this.natsclient.emit('paymentConfirmed',payload_payment);
    }

}
