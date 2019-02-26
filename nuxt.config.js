module.exports = {
  srcDir: 'src',
  head: {
    titleTemplate: '%s | NUXT FIREBASE SSR sample'
  },
  env: {
    APIKEY: 'AIzaSyB3GVfqr7Yf4Q_b1KdFBDFgocqegGpZjHc',
    AUTHDOMAIN: 'fir-nuxt-wordpress.firebaseapp.com',
    DATABASEURL: 'https://fir-nuxt-wordpress.firebaseio.com',
    PROJECTID: 'fir-nuxt-wordpress',
    STORAGEBUCKET: 'fir-nuxt-wordpress.appspot.com',
    MESSAGINGSENDERID: '221920909823',
    HOST: 'http://52.193.48.36'
    // HOST: 'http://www.renowan.com/blog'
  },
  vendor: ['axios'],
  css: [
    '@/static/bootstrap/css/bootstrap.min.css'
  ]
}