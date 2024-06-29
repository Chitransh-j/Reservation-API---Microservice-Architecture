import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDTO } from './dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
    constructor(@Inject('NATS') private natsclient: ClientProxy){}

    @Post()
    createuser(@Body() createuserDTO : CreateUserDTO){
        // console.log(createuserDTO)
        return this.natsclient.send({cmd:'create'},createuserDTO)
    }

}
