import { Module } from '@nestjs/common';
import { connect, DATABASE } from './database.js';
import { HealthController } from './health.controller.js';
import { PaymentsController } from './payments/payments.controller.js';
import { PaymentsService } from './payments/payments.service.js';

@Module({
  controllers: [HealthController, PaymentsController],
  providers: [{ provide: DATABASE, useFactory: () => connect() }, PaymentsService],
})
export class AppModule {}
