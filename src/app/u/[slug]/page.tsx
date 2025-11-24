import { notFound } from 'next/navigation';

// Datos de ejemplo por ahora (sin base de datos)
const PAGES: Record<
  string,
  {
    title: string;
    description: string;
    themeColor: string;
    links: { label: string; url: string }[];
  }
> = {
  demo: {
    title: 'Demo QR – Alan',
    description: 'Ejemplo de página QR creada con Next.js.',
    themeColor: '#1D4ED8', // azul
    links: [
      {
        label: 'WhatsApp',
        url: 'https://wa.me/526565723869?text=Hola%20Alan%2C%20te%20contacto%20desde%20tu%20p%C3%A1gina%20QR',
      },
      {
        label: 'Instagram',
        url: 'https://instagram.com/tu_cuenta',
      },
      {
        label: 'Sitio web',
        url: 'https://alanquinones.cloud',
      },
    ],
  },

  // Puedes ir agregando más ejemplos:
  glambloom: {
    title: 'Glam Bloom · Maquillaje',
    description: 'Maquillaje original y productos de belleza.',
    themeColor: '#BE185D', // rosa
    links: [
      {
        label: 'WhatsApp pedidos',
        url: 'https://wa.me/526565723869?text=Quiero%20cotizar%20productos%20Glam%20Bloom',
      },
      {
        label: 'Instagram',
        url: 'https://instagram.com/glambloom_oficial',
      },
    ],
  },
};

type PageProps = {
  params: {
    slug: string;
  };
};

export default function QRPage({ params }: PageProps) {
  const page = PAGES[params.slug];

  // Si no existe el slug, 404
  if (!page) {
    notFound();
  }

  const { title, description, themeColor, links } = page;

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-8"
      style={{
        background: 'radial-gradient(circle at top, #020617, #000000 60%)',
      }}
    >
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-2xl">
        {/* Encabezado */}
        <div className="mb-5 text-center">
          <div
            className="mx-auto mb-3 h-12 w-12 rounded-2xl flex items-center justify-center text-xl font-bold shadow-lg"
            style={{ backgroundColor: themeColor }}
          >
            {title.charAt(0)}
          </div>
          <h1 className="text-lg font-semibold text-slate-50">{title}</h1>
          <p className="mt-1 text-xs text-slate-400">{description}</p>
        </div>

        {/* Botones de links */}
        <div className="space-y-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm text-slate-50 hover:border-slate-500 hover:bg-slate-900 transition"
            >
              <span>{link.label}</span>
              <span className="text-[11px] text-slate-400">Abrir</span>
            </a>
          ))}
        </div>

        {/* Pie */}
        <div className="mt-6 text-center">
          <p className="text-[11px] text-slate-500">
            Creado con{' '}
            <span className="font-semibold text-slate-300">qr-links</span> ·
            alanquinones.cloud
          </p>
        </div>
      </div>
    </div>
  );
}
