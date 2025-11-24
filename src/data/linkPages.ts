export type LinkPage = {
    title: string;
    description: string;
    themeColor: string;
    links: { label: string; url: string }[];
};

export const LINK_PAGES: Record<string, LinkPage> = {
    demo: {
        title: 'Demo QR – Alan',
        description: 'Ejemplo de página QR creada con Next.js.',
        themeColor: '#1D4ED8',
        links: [
            {
                label: 'WhatsApp',
                url: 'https://wa.me/526565723869?text=Hola%20Alan%2C%20quiero%20contactarte%20desde%20tu%20p%C3%A1gina%20QR',
            },
            {
                label: 'Instagram',
                url: 'https://instagram.com/alanquigar',
            },
            {
                label: 'Sitio web',
                url: 'https://alanquinones.cloud',
            },
        ],
    },

    glambloom: {
        title: 'Glam Bloom · Maquillaje',
        description: 'Maquillaje original y productos de belleza.',
        themeColor: '#BE185D',
        links: [
            {
                label: 'WhatsApp pedidos',
                url: 'https://wa.me/526565723869?text=Quiero%20cotizar%20productos%20Glam%20Bloom',
            },
            {
                label: 'Instagram',
                url: 'https://instagram.com/glambloom_oficial',
            },
            {
                label: 'Sitio web',
                url: 'https://glambloom.com.mx',
            },
        ],
    },
};
