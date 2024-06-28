import { Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
    constructor(@Inject('NATS') private natsclient: ClientProxy){}


    @Post()
    createuser(){
    }


}
