import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDTO } from './dtos/CreateUser.dto';

@Controller()
export class UsersMicroServiceController {
    
    @MessagePattern({cmd:'create'})
    createUser(@Payload() payload_createuser : CreateUserDTO){
        // console.log(payload_createuser)
        return {msg:"Successfully Updated"}
    }
    
    

}
