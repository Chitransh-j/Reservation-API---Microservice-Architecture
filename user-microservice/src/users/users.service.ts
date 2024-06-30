import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/user';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dtos/CreateUser.dto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepo : Repository<User>){}

    createUser(createUserDTO : CreateUserDTO){
        const newUser = this.userRepo.create(createUserDTO);

        return this.userRepo.save(newUser)
    }

    getUserbyID(userId:string){
        return this.userRepo.findOne({where:{id : userId} , relations : ['payments']})
    }

    
}
