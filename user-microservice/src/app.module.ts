import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/user';
import { Payment } from './typeorm/entities/payment';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'mysql_db',
      port:3307,
      database: 'nestjsdocker',
      entities:[User,Payment],
      synchronize:true,
      username:'testuser',
      password:'testuser123'
    }),
    UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
