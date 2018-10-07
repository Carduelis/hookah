const path = require('path');

module.exports = {
  name: 'Кальянная ShishaTime на Бауманской',
  short_name: 'ShishaTime',
  description: 'Кальянная ShishaTime на Бауманской',
  background_color: '#1c060b',
  theme_color: '#1c060b',
  display: 'standalone',
  icons: [
    {
      src: path.resolve('assets/icon.png'),
      sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
    },
    {
      src: path.resolve('assets/large-icon.png'),
      size: '1024x1024' // you can also use the specifications pattern
    }
  ]
};
