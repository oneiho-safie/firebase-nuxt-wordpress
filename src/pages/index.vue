<template>
  <div>
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-3">Nuxt + Firebase + WordPress {{ news.length }}</h1>
        <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
        <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
      </div>
    </div>

  <div class="container">
    <!-- Example row of columns -->
    <div class="row">
      <div class="col-md-6">
        <h2>ニュース一覧</h2>
        <p class="my-list" v-for="(item, index) in news" :key="index">
          <nuxt-link :to="'/news/' + item.id">{{ item.title.rendered }}</nuxt-link>
        </p>
      </div>
      <div class="col-md-6">
        <h2>導入事例</h2>
        <p class="my-list" v-for="(item2, index2) in example" :key="index2">{{ item2.title.rendered }}</p>
      </div>
    </div>

    <hr>

  </div> <!-- /container -->

  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      news: [],
      example: []
    }
  },
  asyncData(context) {
    const getPost = (url) => {
      return axios.get(process.env.HOST + url)
    }
    
    return axios.all([
      getPost('/wp-json/wp/v2/posts?categories=3'),
      getPost('/wp-json/wp/v2/posts?categories=4')
    ]).then(res => {
      const news = res[0].data
      const example = res[1].data
      return { news, example }
    })
  },
  created() {

  },
  components: {
  },
}
</script>

<style>
.jumbotron {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #e9ecef;
  border-radius: .3rem;
}

@media (min-width: 576px) {
  .jumbotron {
    padding: 4rem 2rem 4rem;
  }
}

h2 {
  padding-bottom: 1.2rem;
}
</style>
