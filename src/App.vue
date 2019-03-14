<template>
  <div id="app">
    <Header></Header>
    <main class="main-content">
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/header/Header.vue';
import Footer from './components/footer/Footer.vue';

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
