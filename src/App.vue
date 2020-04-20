<template>
  <div id="app">
    <Navbar/>
    <div class="main-content">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import CategoriesData from './assets/categories.json';
import ArticlesData from './assets/articles.json';

export default {
  name: 'App',
  components: {
    Navbar, 
    Footer
  }, 
  created() {
    document.title = 'La Boîte à Outils';
    this.setCategories();
  }, 
  methods: {
    setCategories: function() {
      var categories = CategoriesData.data;
      categories = this.setArticles(categories);
      this.$store.commit('setCategories', categories);
    }, 
    setArticles: function(categories) {
      var articles = ArticlesData.data;

      for (var i = 0; i < categories.length; i++) {
        for (var j = 0; j < articles.length; j++) {
          if (categories[i].id == articles[j].category_id) {
            categories[i].articles.push(articles[j]);
          }
        }
      }
      return categories;
    }
  }
}
</script>

<style>
  * { 
    -moz-box-sizing: border-box; 
    -webkit-box-sizing: border-box; 
     box-sizing: border-box; 
  }

  body {
    color: #565656;
    background-color: #fff;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }

  .main-content {
    background-color: #f7f9fa;
  }

  a h5 {
    color: #565656;
  }

  a:hover {
    text-decoration: none;
  }

  .main-content {
    margin-top: 58px;
  }
</style>
