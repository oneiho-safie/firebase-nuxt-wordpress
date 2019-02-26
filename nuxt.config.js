module.exports = {
  mode: 'universal',
  srcDir: 'src',
  head: {
    titleTemplate: '%s | NUXT FIREBASE SSR sample'
  },
  env: {
    HOST: 'http://52.193.48.36'
  },
  vendor: ['axios'],
  css: [
    '@/static/bootstrap/css/bootstrap.min.css'
  ],
  router: {
    base: '/'
  }
}