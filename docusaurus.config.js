// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '电子数据取证Wiki',
  tagline: 'Forensics-Wiki',
  url: 'https://www.forensics-wiki.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Forensics-wiki', // Usually your GitHub org/user name.
  projectName: 'Forensics-Wiki', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
         language: ["en", "zh"],
        // ```
      }),
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mcyydscc/Forensics-wiki/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mcyydscc/Forensics-wiki/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Forensics-wiki',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduce/index',
            position: 'left',
            label: '开始',
          },
          {
            to: '/docs/forensics-base',
            position: 'left',
            label: '取证基础',
          },
          {
            to: '/docs/forensics-jiami',
            position: 'left',
            label: '加密与解密',
          },
          {
            to: '/docs/forensics-volatility',
            position: 'left',
            label: '内存取证',
          },
          {
            to: '/blog',
            position: 'left',
            label: '零碎知识',
          },
          {
            href: 'https://github.com/mcyydscc/Forensics-wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '开始',
                to: '/docs/introduce',
              },
              {
                label: '取证基础',
                to: '/docs/forensics-base',
              },
              {
                label: '加密与解密',
                to: '/docs/forensics-jiami',
              },
              {
                label: '内存取证volatility',
                to: '/docs/forensics-volatility',
              },
            ],
          },
          {
            title: '相关链接',
            items: [
              {
                label: '电子取证靶场',
                href: 'https://forensics.didctf.com',
              },
              {
                label: '数据安全协创社团',
                href: 'https://www.didctf.com',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'My Blog',
                href: 'https://blog.didctf.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/mcyydscc/Forensics-wiki',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Forensics-Wiki, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
