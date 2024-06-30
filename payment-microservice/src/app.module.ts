import { Module } from '@nestjs/common';
import { PaymentModule } from './payment/payment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './typeorm/entities/payment';
import { User } from './typeorm/entities/user';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'mysql_db',
      port:3307,
      database: 'nestjsdocker',
      entities:[Payment,User],
      synchronize:true,
      username:'testuser',
      password:'testuser123'
    }),PaymentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
