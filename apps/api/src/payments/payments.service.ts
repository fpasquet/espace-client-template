import { Inject, Injectable } from '@nestjs/common';
import type pg from 'pg';
import { DATABASE } from '../database.js';
import type { Payment } from './payment.js';

interface PaymentRow {
  id: number;
  label: string;
  amount_cents: number;
  paid_at: Date;
}

const toPayment = (row: PaymentRow): Payment => ({
  id: row.id,
  label: row.label,
  amountCents: row.amount_cents,
  paidAt: row.paid_at.toISOString(),
});

@Injectable()
export class PaymentsService {
  constructor(@Inject(DATABASE) private readonly db: pg.Pool) {}

  async list({ limit, offset }: { limit: number; offset: number }): Promise<Payment[]> {
    const { rows } = await this.db.query<PaymentRow>(
      'select id, label, amount_cents, paid_at from payment order by paid_at desc limit $1 offset $2',
      [limit, offset],
    );
    return rows.map(toPayment);
  }
}
