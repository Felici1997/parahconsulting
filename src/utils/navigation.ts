const navBarLinks = [
  { name: 'Accueil', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Nos Solutions', url: '/products' },
  { name: 'Blog', url: '/blog' },
  { name: 'Contact', url: '/contact' },
];

const footerLinks = [
  {
    section: 'Services',
    links: [
      { name: 'Consulting 360°', url: '/services' },
      { name: 'Services Opérationnels', url: '/services' },
      { name: 'Capital Humain', url: '/services' },
      { name: 'Nos Solutions', url: '/products' },
    ],
  },
  {
    section: 'Société',
    links: [
      { name: 'À propos', url: '#' },
      { name: 'Blog', url: '/blog' },
      { name: 'Contact', url: '/contact' },
    ],
  },
];
// An object of links for social icons
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
