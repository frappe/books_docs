export default function sidebar() {
  return [
    {
      text: 'Basics',
      collapsible: true,
      items: [
        { text: 'Introduction', link: '/basics/introduction' },
        { text: 'Accounting Basics', link: '/basics/accounting-basics' },
        { text: 'Interface', link: '/basics/interface' },
      ],
    },
    {
      text: 'Setting Up',
      collapsible: true,
      items: [
        { text: 'Getting Started', link: '/setting-up/getting-started' },
        { text: 'Initial Entries', link: '/setting-up/initial-entries' },
        { text: 'Opening Balances', link: '/setting-up/opening-balances' },
      ],
    },
    {
      text: 'Transactions',
      collapsible: true,
      items: [
        {
          text: 'Transactional Entries',
          link: '/transactions/transactional-entries',
        },
        { text: 'Sales Invoices', link: '/transactions/sales-invoices' },
        { text: 'Purchase Invoices', link: '/transactions/purchase-invoices' },
        { text: 'Discount Accounting', link: '/transactions/discount-accounting' },
        { text: 'Payments', link: '/transactions/payments' },
        { text: 'Journal Entries', link: '/transactions/journal-entries' },
      ],
    },
    {
      text: 'Entries',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'Entries', link: '/entries/entries' },
        { text: 'Items', link: '/entries/items' },
        { text: 'Party', link: '/entries/party' },
        { text: 'Taxes', link: '/entries/taxes' },
      ],
    },
    {
      text: 'Analytics',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'Dashboard', link: '/analytics/dashboard' },
        { text: 'Reports', link: '/analytics/reports' },
        { text: 'General Ledger', link: '/analytics/general-ledger' },
        { text: 'Profit and Loss', link: '/analytics/profit-and-loss' },
        { text: 'Balance Sheet', link: '/analytics/balance-sheet' },
        { text: 'Trial Balance', link: '/analytics/trial-balance' },
      ],
    },
    {
      text: 'Miscellaneous',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'Quick Search', link: '/miscellaneous/search' },
        { text: 'Number Series', link: '/miscellaneous/number-series' },
        { text: 'Data Import', link: '/miscellaneous/data-import' },
        { text: 'Chart of Accounts', link: '/miscellaneous/chart-of-accounts' },
        { text: 'Settings', link: '/miscellaneous/settings' },
      ],
    },
  ];
}
