<template>
  <div class="navbar">
        <router-link to="/"><span class="fas fa-toolbox"></span></router-link>
        <router-link to="/Category/MF">Motricité fine</router-link>
        <router-link to="/Category/MG">Motricité globale</router-link>
        <router-link to="/Category/Espace">Espace</router-link>
        <router-link to="/Category/Temps">Temps</router-link>
        <router-link to="/Category/Attention">Attention</router-link>
        <router-link to="/Category/Graphisme">Graphisme</router-link>
        <router-link to="/Category/SC">Schéma corporel</router-link>
        <router-link to="/Category/Tonus">Tonus</router-link>
        <router-link to="/Category/Sensorialite">Sensorialité</router-link>
    </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .navbar {
        overflow: hidden;
        background-color: #aec6cf;
        position: fixed;
        top: 0;
        width: 100%;
        line-height: 30px;
        height: 58px !important;
        z-index: 10;
    }

    .navbar img {
        height: 30px;
    }

    .navbar a, .navbar router-link {
        float: left;
        display: block;
        color: #fff;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        height: 30px;
    }

    .navbar a {
        height: 100% !important;
    }

    .navbar a:first-of-type, 
    .navbar a:hover, 
    .navbar router-link:hover, 
    .navbar a.router-link-active {
        background: #fff3d5;
        color: #aec6cf;
    }

    .navbar a.router-link-active {
        font-weight: bold;
    }
</style>
