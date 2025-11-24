'use client';

import { LINK_PAGES } from '@/data/linkPages';
import QRCode from 'react-qr-code';

// Por ahora lo dejamos hardcodeado; luego lo sacamos a .env
const BASE_URL = 'http://217.196.51.158:3002';

export default function AdminPage() {
  const entries = Object.entries(LINK_PAGES);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 px-4 py-8">
      <header className="mx-auto max-w-4xl mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">
            Panel de páginas QR
          </h1>
          <p className="text-xs text-slate-400">
            Lista de slugs y códigos QR listos para imprimir.
          </p>
        </div>
        <div className="text-[11px] text-slate-500">
          Base URL:{' '}
          <span className="font-mono text-slate-300">{BASE_URL}</span>
        </div>
      </header>

      <main className="mx-auto max-w-4xl">
        <div className="grid gap-4 md:grid-cols-2">
          {entries.map(([slug, page]) => {
            const url = `${BASE_URL}/u/${slug}`;

            return (
              <div
                key={slug}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-slate-800/60 px-2.5 py-1 text-[11px] text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>/{slug}</span>
                    </div>
                    <h2 className="mt-2 text-sm font-semibold">
                      {page.title}
                    </h2>
                    <p className="mt-1 text-xs text-slate-400 line-clamp-2">
                      {page.description}
                    </p>
                  </div>

                  <div className="bg-white p-2 rounded-xl shadow-inner">
                    <QRCode value={url} size={96} />
                  </div>
                </div>

                <div className="mt-1 space-y-1">
                  <div className="text-[11px] text-slate-400">
                    URL destino:
                  </div>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-[11px] text-sky-400 hover:underline break-all"
                  >
                    {url}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
