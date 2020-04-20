<template>
  <footer class="text-muted p-3">
      <div class="container">
        <p class="float-right">
          <a href="#">↑ Haut de page</a>
        </p>
        <p>&copy; La Boîte à Outils 2020</p>
      </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  footer {
    background-color: #fff;
  }

  .container {
    width: 80%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  .text-muted {
    color: #6c757d !important;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .p-3 {
    padding: 1rem !important;
  }

  .float-right {
    float: right !important;
  }

  a {
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
  }
</style>
