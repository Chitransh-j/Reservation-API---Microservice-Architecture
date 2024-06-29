import { Module } from '@nestjs/common';
import { UsersMicroServiceController } from './users.controller';

@Module({
  imports :[],
  controllers: [UsersMicroServiceController],
  providers: [],
})
export class UsersModule {}
