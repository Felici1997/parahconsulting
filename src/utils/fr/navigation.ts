const navBarLinks = [
  { name: 'Accueil', url: '/fr' },
  { name: 'Services', url: '/fr/services' },
      { name: 'Nos Solutions', url: '/fr/products' },
  { name: 'Blog', url: '/fr/blog' },
  { name: 'Contact', url: '/fr/contact' },
];

const footerLinks = [
  {
    section: 'Services',
    links: [
      { name: 'Consulting 360°', url: '/fr/services' },
      { name: 'Services Opérationnels', url: '/fr/services' },
      { name: 'Capital Humain', url: '/fr/services' },
  { name: 'Nos Solutions', url: '/fr/products' },
    ],
  },
  {
    section: 'Société',
    links: [
      { name: 'À propos', url: '#' },
      { name: 'Blog', url: '/fr/blog' },
      { name: 'Contact', url: '/fr/contact' },
    ],
  },
];

const socialLinks = {
  facebook: 'https://www.facebook.com/parahconsulting',
  x: 'https://twitter.com/parahconsulting',
  github: 'https://github.com/parahconsulting',
  google: '#',
  slack: '#',
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
