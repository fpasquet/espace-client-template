import pg from 'pg';

export const DATABASE = Symbol('DATABASE');

/** Connexions à Postgres ; la table des paiements est créée au démarrage, avec 30 paiements d'exemple. */
export async function connect(url = process.env['DATABASE_URL']): Promise<pg.Pool> {
  if (!url) throw new Error('DATABASE_URL est requise (voir .env.example).');
  const pool = new pg.Pool({ connectionString: url });
  await pool.query(`
    create table if not exists payment (
      id serial primary key,
      label text not null,
      amount_cents integer not null,
      paid_at timestamptz not null
    )
  `);
  const { rows } = await pool.query<{ count: string }>('select count(*) from payment');
  if (rows[0]?.count === '0') {
    await pool.query(`
      insert into payment (label, amount_cents, paid_at)
      select 'Facture FAC-2026-' || lpad(n::text, 4, '0'), 4900 + n * 1375, now() - (n || ' days')::interval
      from generate_series(1, 30) as n
    `);
  }
  return pool;
}
