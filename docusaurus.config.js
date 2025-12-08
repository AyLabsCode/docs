import { themes as prismThemes } from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
const remarkDirectives = require('remark-directive');

const config = {
  title: 'AyLabs Docs',
  tagline: 'Domotique et Homelab, les documentations d\'AyLabs',
  favicon: 'img/favicon.ico',

  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://docs.aylabs.fr',
  baseUrl: '/',

  organizationName: 'AyLabsCode', // Usually your GitHub org/user name.
  projectName: 'AyLabsCode.docs', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'log',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          editUrl:
            'https://github.com/AyLabsCode/docs/tree/main/',
          remarkPlugins: [
            remarkMath,
          ],
          rehypePlugins: [
            rehypeKatex,
          ],
        },

        theme: {
          customCss: './src/css/custom.css',
        },

        gtag: {
          trackingID: 'G-5JCFT4383B',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.svg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'AyLabs Docs',
        logo: {
          alt: 'AyLabs Logo',
          srcDark: 'img/logo_black.svg',
          src: 'img/logo_white.svg'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'domotique',
            position: 'left',
            label: 'Domotique',
          },
          {
            type: 'docSidebar',
            sidebarId: 'homelab',
            position: 'left',
            label: 'Homelab',
          },
          {
            href: 'https://github.com/AyLabsCode/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Domotique',
                to: '/docs/domotique',
              },
              {
                label: 'Homelab',
                to: '/docs/homelab',
              },
            ],
          },
          {
            title: 'Liens',
            items: [
              {
                label: 'YouTube',
                href: 'https://go.aylabs.fr/youtube',
              },
              {
                label: 'Discord',
                href: 'https://go.aylabs.fr/discord',
              },
              {
                label: 'Instagram',
                href: 'https://go.aylabs.fr/insta',
              },
            ],
          },
          {
            title: 'Plus',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/AyLabsCode/docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AyLabs. Built with Docusaurus for community.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
