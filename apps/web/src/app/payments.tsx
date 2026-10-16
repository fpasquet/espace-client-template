'use client';

import { useEffect, useState } from 'react';

interface Payment {
  id: number;
  label: string;
  amountCents: number;
  paidAt: string;
}

const api = process.env.NEXT_PUBLIC_API_URL;
const euros = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' });
const day = new Intl.DateTimeFormat('fr-FR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'Europe/Paris',
});

/** Historique des paiements du client, du plus récent au plus ancien. */
export function Payments() {
  const [payments, setPayments] = useState<Payment[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${api}/api/payments`)
      .then((response) => response.json() as Promise<Payment[]>)
      .then(setPayments)
      .catch(() => setError("L'API ne répond pas : lancez make dev."));
  }, []);

  if (error) {
    return (
      <p role="alert" className="mt-8 text-sm text-red-700">
        {error}
      </p>
    );
  }
  return (
    <ul className="mt-8 divide-y divide-zinc-200 rounded-md border border-zinc-200 bg-white">
      {payments === null && <li className="px-4 py-3 text-zinc-500">Chargement…</li>}
      {payments?.map((payment) => (
        <li key={payment.id} className="flex items-center gap-4 px-4 py-3">
          <span className="flex-1">{payment.label}</span>
          <span className="text-sm text-zinc-500">{day.format(new Date(payment.paidAt))}</span>
          <span className="w-24 text-right font-medium">{euros.format(payment.amountCents / 100)}</span>
        </li>
      ))}
    </ul>
  );
}
