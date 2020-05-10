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
            <div v-if="article.carousel">
                <hr class="my-4">
                <div class="article-subtitle text-center mt-5">{{ article.carousel_title }}</div>
                <div class="carousel">
                    <div class="carousel-img display-flex">
                        <a v-if="article.carousellink" v-bind:href="article.carousellink[carouselPos]" class="text-center" target="_blank">
                            <img :src="article.carousel[carouselPos]"><br>
                            <p v-if="article.carousel_text">{{ article.carousel_text[carouselPos] }}</p>
                        </a>
                        <a v-else href="#" class="text-center">
                            <img :src="article.carousel[carouselPos]"><br>
                            <p v-if="article.carousel_text && article.carousel_text[carouselPos].length > 0">{{ article.carousel_text[carouselPos] }}</p>
                        </a>
                    </div>
                    <div class="previous" @click="previous(article.carousel)">‹</div>
                    <div class="next" @click="next(article.carousel)">›</div>
                </div>
            </div>
            <div v-if="article.content2">
                <hr class="my-4">
                <div class="display-flex mt-5" v-if="article.content2">
                    <div class="content">
                        <div class="article-content" v-html="article.content2"></div>
                    </div>
                    <div class="illustration">
                        <img :src="article.illustration2" :alt="article.title">
                    </div>
                </div>
            </div>
            <div v-if="article.content3">
                <hr class="my-4">
                <div class="display-flex mt-5" v-if="article.content3">
                    <div class="illustration">
                        <img :src="article.illustration3" :alt="article.title">
                    </div>
                    <div class="content">
                        <div class="article-content" v-html="article.content3"></div>
                    </div>
                </div>
            </div>
            <div v-if="article.content4">
                <hr class="my-4">
                <div class="display-flex mt-5" v-if="article.content4">
                    <div class="content">
                        <div class="article-content" v-html="article.content4"></div>
                    </div>
                    <div class="illustration">
                        <img :src="article.illustration4" :alt="article.title">
                    </div>
                </div>
            </div>
             <div v-if="article.content5">
                <hr class="my-4">
                <div class="display-flex mt-5" v-if="article.content5">
                    <div class="illustration">
                        <img :src="article.illustration5" :alt="article.title">
                    </div>
                    <div class="content">
                        <div class="article-content" v-html="article.content5"></div>
                    </div>
                </div>
            </div>
            <div v-if="article.content6">
                <hr class="my-4">
                <div class="display-flex mt-5" v-if="article.content6">
                    <div class="content">
                        <div class="article-content" v-html="article.content6"></div>
                    </div>
                    <div class="illustration">
                        <img :src="article.illustration6" :alt="article.title">
                    </div>
                </div>
            </div>
        </div>
        </section>
  </div>
</template>

<script>
export default {
  name: 'Category', 
  data: () => {
      return {
          carouselPos: 0
      }
  },
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
      }, 
      carouselStyle: function(carousel) {
          return {
              backgroundImage: "url(" + carousel[this.carouselPos] + ")"
          }
      }, 
      previous: function(carousel) {
          if (this.carouselPos > 0) {
            this.carouselPos--;
          }
          else {
              this.carouselPos = carousel.length - 1;
          }
      }, 
      next: function(carousel) {
          if (this.carouselPos < (carousel.length - 1)) {
            this.carouselPos++;
          }
          else {
              this.carouselPos = 0;
          }
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
        border-top: 1px solid #aec6cf;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
        margin: 50px !important;
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
        height: auto;
        width: 80%;
        max-width: 100%;
        margin: auto;
    }

    .content {
        width: 50%;
        padding: 20px;
        line-height: 24px;
    }

    .carousel {
        width: 700px;
        height: 500px;
        margin: auto;
        margin-top: 20px;
        border-radius: 20px;
        background-size: contain !important;
        background-repeat: no-repeat !important;
        background-position: center !important;
        position: relative;
        margin-bottom: 60px;
    }

    .carousel .carousel-img {
        height: 100%;
    }

    .carousel .carousel-img a {
        text-decoration: none;
        color: #565656;
        margin: auto;
    }

    .carousel .carousel-img a p {
        width: 450px;
        background-color: #fff3d5;
        border-radius: 5px;
        padding: 5px;
    }
    

    .carousel .carousel-img img {
        max-width: 500px;
        max-height: 450px;
        border: 2px solid #565656;
    }

    .carousel .previous, .carousel .next {
        font-size: 100px;
        position: absolute;
        top: 160px;
        color: #aec6cf;
        cursor: pointer;   
    }

    .carousel .previous:hover, .carousel .next:hover {
        color: #4f7c8c;
    }

    .carousel .previous {
        left: 10px;
    }

    .carousel .next {
        right: 10px;
    }

    .mx-auto {
        margin: auto;
    }

    .mt-5 {
        margin-top: 50px;
    }

    .article-content >>> p {
        margin-bottom: 30px;
    }

    .article-content >>> .article-subtitle, .article-subtitle {
        color: #89c19e;
        font-weight: bold;
        font-size: 20px;
        margin-bottom: 10px;
    }
</style>
