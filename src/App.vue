<template>
  <div id="app">
    <div class="container">
      <AddNew/>
      <List/>
    </div>
  </div>
</template>

<script>
  // @ to src
  import List from "@/views/List.vue"
  import AddNew from "./views/AddNew.vue";
  export default {
    components: {
    List,
    AddNew
  },
}
</script>

<style lang="scss">
#app {
  height: 100%;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: rgb(238, 237, 237);
  background-size: cover;
  overflow-y: scroll;
}
.container {
  display: flex;
  justify-content: space-between;
  padding: 30px;
}

@media (max-width: 479px) {
  .container{
  flex-wrap: wrap;
  justify-content: center;
  }
}
</style>
