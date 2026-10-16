import { Payments } from './payments';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-2xl font-semibold tracking-tight">Espace client</h1>
      <p className="mt-1 text-zinc-600">L'historique de vos paiements.</p>
      <Payments />
    </main>
  );
}
