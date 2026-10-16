import { Controller, Get, Inject, Query } from '@nestjs/common';
import { type Payment, pageOf } from './payment.js';
import { PaymentsService } from './payments.service.js';

@Controller('payments')
export class PaymentsController {
  constructor(@Inject(PaymentsService) private readonly payments: PaymentsService) {}

  @Get()
  list(@Query() query: { limit?: string; offset?: string }): Promise<Payment[]> {
    return this.payments.list(pageOf(query));
  }
}
