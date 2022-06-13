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
  base: '/books_docs/',

  themeConfig: {
    /**
     * TODO: enable these on the next vitepress release
     * - now base url isn't updated in header
     */
    // logo: '/logo.svg',
    // siteTitle: false,
    nav: nav(),
    sidebar: sidebar(),
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
      text: 'Introduction',
      link: '/',
    },
    {
      text: 'Home',
      link: 'https://frappebooks.com/',
    },
    {
      text: 'Releases',
      link: 'https://github.com/frappe/books/releases',
    },
    {
      text: 'Community',
      link: 'https://t.me/frappebooks',
    },
  ];
}
