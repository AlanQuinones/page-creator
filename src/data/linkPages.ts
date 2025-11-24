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
        themeColor: '#1D4ED8', // azul
        links: [
            {
                label: 'WhatsApp',
                url: 'https://wa.me/5210000000000',
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

    glambloom: {
        title: 'Glam Bloom · Maquillaje',
        description: 'Maquillaje original y productos de belleza.',
        themeColor: '#BE185D', // rosa
        links: [
            {
                label: 'WhatsApp pedidos',
                url: 'https://wa.me/5210000000000?text=Quiero%20cotizar%20productos%20Glam%20Bloom',
            },
            {
                label: 'Instagram',
                url: 'https://instagram.com/glambloom_oficial',
            },
        ],
    },
};
