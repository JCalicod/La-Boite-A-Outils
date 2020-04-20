<template>
    <div>
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
            <h2 class="text-center mb-5">{{ article.title }}</h2>
            <hr class="my-4">
            <div class="display-flex">
                <div class="illustration">
                    <img :src="article.illustration" :alt="article.title">
                </div>
                <div class="content">
                    <div class="article-content" v-html="article.content"></div>
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
      article() {
        return this.getArticle();
      }, 
      category() {
        return this.getCategory();
      }
  }, 
  methods: {
      getArticle: function() {
          var categories = this.$store.getters.getCategories;
          var id = this.$route.params.id;
        
          for (var i = 0; i < categories.length; i++) {
            for (var j = 0; j < categories[i].articles.length; j++) {
                if (categories[i].articles[j].id == id) {
                    return categories[i].articles[j];
                }
            }
          }

          return {};
      }, 
      getCategory: function() {
          var categories = this.$store.getters.getCategories;
          var id = this.$route.params.id;
        
          for (var i = 0; i < categories.length; i++) {
            for (var j = 0; j < categories[i].articles.length; j++) {
                if (categories[i].articles[j].id == id) {
                    return categories[i];
                }
            }
          }

          return {};
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

    .display-flex {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .illustration {
        width: 50%;
        display: flex;
    }

    .illustration > img {
        border-radius: 20px;
        height: 400px;
        width: auto;
        max-width: 100%;
        margin: auto;
    }

    .content {
        width: 50%;
        padding: 20px;
        line-height: 24px;
    }

    .article-content >>> p {
        margin-bottom: 30px;
    }

    .article-content >>> .article-subtitle {
        color: #89c19e;
        font-weight: bold;
        font-size: 20px;
        margin-bottom: 10px;
    }
</style>
