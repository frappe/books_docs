import { defineConfig } from 'vitepress';
import sidebar from './sidebar';

const tagline = 'Free, Modern Desktop Accounting';

export default defineConfig({
  lang: 'en-US',
  title: 'Frappe Books',
  description: tagline,
  titleTemplate: tagline,
  appearance: false,
  outDir: '../dist',
  lastUpdated: true,

  head: [['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: false,
    nav: nav(),
    sidebar: sidebar(),
    editLink: {
      pattern: 'https://github.com/frappe/books_docs/edit/master/docs/:path',
      text: 'Edit this page on GitHub',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/frappe/books' },
      {
        icon: 'youtube',
        link: 'https://www.youtube.com/channel/UCbaNaml6jBSIACQwc9Nz_0g',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Frappe Technologies Pvt. Ltd.',
    },
  },
});

function nav() {
  return [
    {
      text: 'Home',
      link: 'https://frappebooks.com/',
    },
    {
      text: 'Download',
      link: 'https://frappebooks.com/download',
    },
    {
      text: 'Community',
      link: 'https://t.me/frappebooks',
    },
  ];
}
