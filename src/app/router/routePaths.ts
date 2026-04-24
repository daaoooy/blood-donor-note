export const routePaths = {
  home: '/',
  tag: '/tag/:id',
  tagPreview: '/preview',
  register: '/register/:id',
  user: '/user/:id',
  donationHistory: '/user/:id/donation-history',
  notFound: '*',
  setting: '/user/:id/setting',
  map: '/user/:id/map',
  quiz: '/user/:id/quiz',
  addDonation: '/user/:id/add-donation',
} as const;
