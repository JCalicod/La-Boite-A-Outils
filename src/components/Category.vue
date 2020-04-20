<template>
  <div class="category">
      <div class="jumbotron">
        <section class="banner">
          <div class="container">
            <h1>La boîte à outils</h1>
            <p class="lead text-muted">{{ category.subtitle }}</p>
          </div>
        </section>
      </div>
      <section class="album">
      <div class="container">
        <h2 class="text-center mb-5">{{ category.title }}</h2>
        <p class="lead" v-if="category.description.length > 0">
          <span class="fas fa-info-circle"></span> {{ category.description }}
        </p>
          <hr class="my-4">
        <div class="row" v-if="category.articles.length > 0">
          <div class="col-md-4" v-for="article in category.articles" :key="article.id">
            <router-link :to="'/Article/' + article.id">
              <div class="card mb-4 shadow-sm">
                <div class="activity-bg-img" :style="getBackgroundStyle(article)"></div>
                <div class="card-body">
                  <h5 class="card-title text-center">{{ article.title }}</h5>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Category', 
  computed: {
      category() {
        return this.getCategory();
      }
  }, 
  methods: {
      getCategory: function() {
          var categories = this.$store.getters.getCategories;
          var id = this.$route.params.id;
        
          for (var i = 0; i < categories.length; i++) {
            if (id == categories[i].id) {
                return categories[i];
            }
          }

          return categories[0];
      }, 
      getBackgroundStyle: function(article) {
          return {
              background: "url(" + article.background + ")"
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    a {
        text-decoration: none;
    }

    .album {
        background-color: #f7f9fa;
        padding: 50px;
    }

    .container {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }

    .p-0 {
        padding: 0 !important;
    }

    .bg-transparent {
        background-color: transparent !important;
    }

    .jumbotron {
        padding: 0;
        border-radius: .3rem;
    }

    .banner {
        background: url('../../public/img/background.jpg');
        background-position: center;
        background-size: cover;
        border-radius: 0;
        margin-bottom: 0 !important;
        text-align: center;
        padding: 4rem 2rem;
    }

    .banner h1 {
        color: #aec6cf;
        margin-bottom: .5rem;
        font-weight: 500;
        line-height: 1.2;
        font-size: 2.5rem;
    }

    .banner p.lead {
        color: #aec6cf !important;
    }

    h2 {
        font-weight: 500;
        line-height: 1.2;
        font-size: 2rem;
        margin-bottom: 3rem;
    }

    .mb-4 {
        margin-bottom: 1.5rem !important;
    }

    .text-center {
        text-align: center !important;
    }

    .jumbotron .lead {
        margin: auto;
        font-size: 15px;
    }

    .my-4, .mb-4 {
        margin-bottom: 1.5rem !important;
    }

    hr {
        border: 0;
        border-top-color: currentcolor;
        border-top-style: none;
        border-top-width: 0px;
        border-top: 1px solid rgba(0,0,0,.1);
        box-sizing: content-box;
        height: 0;
        overflow: visible;
    }

    .row {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    }

    @media screen and (min-width: 768px) {
        .col-md-4 {
            -ms-flex: 0 0 33.333333%;
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
        }
    }

    .col-md-4 {
        position: relative;
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
    }

    .shadow-sm {
        box-shadow: 0 .125rem .25rem rgba(0,0,0,.075) !important;
    }

    .card {
        position: relative;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border: 1px solid rgba(0,0,0,.125);
        border-radius: .25rem;
    }

    .card .activity-bg-img {
        width: 100%;
        height: 200px;
    }

    .card-body {
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        min-height: 1px;
        padding: 1.25rem;
    }

    .card {
        word-wrap: break-word;
    }

    .card-title {
        margin-bottom: .75rem;
    }

    a h5 {
        color: #565656;
    }

    .h5, h5 {
        font-size: 1.25rem;
        font-weight: 500;
        line-height: 1.2;
        margin-top: 0;
    }

    .card .activity-bg-img {
        background-size: cover !important;
        background-position: top center !important;
        border-bottom: 1px solid rgba(0,0,0,.075) !important;
    }
</style>
