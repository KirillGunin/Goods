<template>
  <div id="app">
    <Navbar/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
  // @ to src
  import Navbar from "@/components/Navbar.vue";
  export default {
    components: {
    Navbar
  },
}
</script>

<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';
#app {
  height: 100%;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-image: url('@/assets/background.jpeg');
  background-size: cover;
}
</style>
