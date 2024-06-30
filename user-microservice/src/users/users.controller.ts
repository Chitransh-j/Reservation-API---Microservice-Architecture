import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDTO } from './dtos/CreateUser.dto';
import { UsersService } from './users.service';

@Controller()
export class UsersMicroServiceController {
    constructor(private userService: UsersService){}

    @MessagePattern({cmd:'create'})
    createUser(@Payload() newEntry : CreateUserDTO){
        // console.log(payload_createuser)
        return this.userService.createUser(newEntry)
    }
    
    @MessagePattern({cmd : 'getUserviaid'})
    getUserByID(@Payload() data )
    {
        const {userId} =data
        // console.log(data)
        return this.userService.getUserbyID(userId)
    }

    @EventPattern('paymentConfirmed')
    nofityUser(@Payload() data ){
        console.log(` Payment recieved by user . Here's the amount:${data.amount}`)
    }
    

}
