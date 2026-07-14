// An array of links for navigation bar
const navBarLinks = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
      { name: 'Nos Solutions', url: '/products' },
  { name: 'Blog', url: '/blog' },
  { name: 'Contact', url: '/contact' },
];
// An array of links for footer
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
    section: 'Company',
    links: [
      { name: 'About us', url: '#' },
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
