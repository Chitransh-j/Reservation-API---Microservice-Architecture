import { Body, Controller, Get, HttpException, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDTO } from './dtos/CreateUser.dto';
import { lastValueFrom } from 'rxjs';

@Controller('users')
export class UsersController {
    constructor(@Inject('NATS') private natsclient: ClientProxy){}

    @Post()
    createuser(@Body() createuserDTO : CreateUserDTO){
        // console.log(createuserDTO)
        return this.natsclient.send({cmd:'create'},createuserDTO)
    }

    @Get(':id')
    async getUserbyId(@Param('id') id :string){
        const user =  await lastValueFrom (this.natsclient.send({ cmd: 'getUserviaid' }, { userId: id }));

        if (user)return user;
        else throw new HttpException('User Not Found',404);
    }

}
