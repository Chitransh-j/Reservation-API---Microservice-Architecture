import { Module } from '@nestjs/common';
import { UsersMicroServiceController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/user';
import { Payment } from 'src/typeorm/entities/payment';

@Module({
  imports :[TypeOrmModule.forFeature([User,Payment])],
  controllers: [UsersMicroServiceController],
  providers: [UsersService],
})
export class UsersModule {}
