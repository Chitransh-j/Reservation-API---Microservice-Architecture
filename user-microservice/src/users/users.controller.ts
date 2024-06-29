import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDTO } from './dtos/CreateUser.dto';

@Controller()
export class UsersMicroServiceController {
    
    @MessagePattern({cmd:'create'})
    createUser(@Payload() payload_createuser : CreateUserDTO){
        // console.log(payload_createuser)
        return {msg:"Successfully Updated"}
    }
    
    @EventPattern('paymentConfirmed')
    nofityUser(@Payload() data ){
        console.log(` Payment recieved by user . Here's the amount:${data.amount}`)
    }
    

}
