export interface Payment {
  id: number;
  /** Ce que le client a payé : « Facture FAC-2026-0042 ». */
  label: string;
  /** Montant TTC, en centimes. */
  amountCents: number;
  paidAt: string;
}

/** Une page de l'historique : `limit` paiements au plus, à partir de `offset` ; valeurs bornées. */
export function pageOf(query: { limit?: unknown; offset?: unknown }): { limit: number; offset: number } {
  const limit = Number(query.limit ?? 50);
  const offset = Number(query.offset ?? 0);
  return {
    limit: Number.isInteger(limit) ? Math.min(Math.max(limit, 1), 100) : 50,
    offset: Number.isInteger(offset) ? Math.max(offset, 0) : 0,
  };
}
