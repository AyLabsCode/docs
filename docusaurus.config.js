import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
const remarkDirectives = require('remark-directive');

const config = {
  title: 'AyLabs Docs',
  tagline: 'Tout pour s\'y retrouver dans la mise en place d\'un système domotique et d\'un homelab',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://AyLabsCode.docs.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AyLabsCode', // Usually your GitHub org/user name.
  projectName: 'AyLabsCode.docs', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
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
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'AyLabs',
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
