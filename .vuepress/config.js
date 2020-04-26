module.exports = {
  title: 'rika Architecture',
  description: 'A portfolio site for rika Architecture',
  dest: 'dist',
  globalLayout: '/theme/layouts/GlobalLayout.vue',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects' },
      { text: 'About', link: '/about' },
      { text: 'Contact', link: '/contact', cta: true },
    ]
  },
  plugins: [
    [
      'vuepress-plugin-clean-urls',
      {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundPath: '/404.html',
      },
    ],
  ],
  head: [
    [ 'link', { rel: 'stylesheet', href:'https://fonts.googleapis.com/css?family=Montserrat|Open+Sans:300,400,600,700,800&display=swap' }],
    [ 'script', { type: 'module', src: 'https://unpkg.com/ionicons@4.5.10-0/dist/ionicons/ionicons.esm.js' } ],
    [ 'script', { nomodule: '', src: 'https://unpkg.com/ionicons@4.5.10-0/dist/ionicons/ionicons.js' } ],
  ],
  locales: {
    '/': {
      lang: 'en'
    }
  }
};
