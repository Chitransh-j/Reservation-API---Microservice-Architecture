import { Module } from '@nestjs/common';
import { PaymentMicroserviceController } from './payment.controller';
import { NatsClientModule } from './nats-client/nats-client.module';
import { PaymentService } from './payment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from 'src/typeorm/entities/payment';
import { User } from 'src/typeorm/entities/user';

@Module({
  imports: [TypeOrmModule.forFeature([Payment,User]),NatsClientModule],
  controllers: [PaymentMicroserviceController],
  providers: [PaymentService]
})
export class PaymentModule {}
