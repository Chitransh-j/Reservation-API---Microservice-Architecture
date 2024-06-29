import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreatePaymentDTO } from './dtos/createPayment.dto';


@Controller('payments')
export class PaymentsController {
    constructor(@Inject('NATS') private natsclient: ClientProxy){}

    @Post()
    createPayment(@Body() createpaymentDTO : CreatePaymentDTO){
        this.natsclient.emit('createPayment',createpaymentDTO);
    }

}
