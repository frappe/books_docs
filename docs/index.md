---
layout: home
title: Frappe Books
hero:
  name: Frappe Books
  text: Documentation And User Guide
  tagline: 'Welcome to the Frappe Books Documentation and User Guide.
    Learn how to create entries, make transactions, read reports, and more!'
  actions:
    - theme: brand
      text: Get Started
      link: /setting-up/getting-started
    - theme: alt
      text: Get Frappe Books
      link: https://frappebooks.com/download

features:
  - title: Portable
    details: Frappe Books uses the lightweight SQLite database which uses a single file to store it's data.
  - title: Works Offline
    details: Frappe Books uses a local file from your computer and saves all transactions and entries to this file.
  - title: Financial Reports
    details: Frappe Books comes with standard financial reports like Profit and Loss, Trial Balance and Balance Sheet.
  - title: Invoice Templates
    details: Beautiful Invoice templates that you can further customize with the color and logo of your brand.
---

<style>
:root {
  /* Frappe Books CSS Color Variables */
  --gray-25: #FCFCFD;
  --gray-50: #F8F9FC;
  --gray-100: #F2F4F8;
  --gray-200: #EBEFF5;
  --gray-300: #E2E8F0;
  --gray-400: #CAD5E2;
  --gray-500: #9AA8BC;


  --gray-700: #64748B;
  --gray-800: #475569;
  --gray-900: #334155;
  --black: #1E293B;

  --blue-200: #CCE7FF;
  --blue-400: #66B8FF;
  --blue-600: #2490ef;
  --blue-700: #006ECC;
  --blue-800: #005299;
  
  /* Vitepress CSS Variables */
  --vp-c-text-light-1: var(--gray-900);
  --vp-c-text-light-2: var(--gray-700);
  --vp-c-text-light-3: var(--gray-500);
  --vp-c-text-light-4: var(--gray-300);

  --vp-c-white-soft: var(--gray-25);
  --vp-c-white-mute: var(--gray-50);
  --vp-c-black: var(--black);

  --vp-c-gray-light-1: var(--gray-500);
  --vp-c-gray-light-2: var(--gray-400);
  --vp-c-gray-light-3: var(--gray-300);
  --vp-c-gray-light-4: var(--gray-200);
  --vp-c-gray-light-5: var(--gray-100);
  
  --vp-c-divider-light-1: var(--gray-200);
  --vp-c-divider-light-2: var(--gray-300);

  --vp-c-brand-darker: var(--blue-800);
  --vp-c-brand-dark: var(--blue-700);
  --vp-c-brand: var(--blue-600);
  --vp-c-brand-light: var(--blue-400);
  --vp-c-brand-lighter: var(--blue-200);
}

/* Vitepress class and component overrides */

.VPSidebar {
  border-right: solid 1px var(--vp-c-divider-light);
}

.VPFeature {
  border: 1px solid var(--vp-c-divider-light) !important;
}

.logo {
  width: 80px;
}

.content-container {
  max-width: initial !important;
}

p > img {
  width: 100%;
  border: solid 1px var(--vp-c-divider-light);
  border-radius: 8px;
}

.VPButton {
  border-radius: 6px !important;
}
</style>
