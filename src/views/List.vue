<template>
  <div class="row-2">
    <!-- Списов товаров -->
    <div class="col-list" v-if="goods.length">
      <div class="good" v-for="(good, index) of goods" :key="index">
        <img :src="good.href" alt="">
        <div class="good-descriptions">
          <h4 class="good-name">{{good.name}}</h4>
          <p class="good-descr">{{good.descr}}</p>
          <h4 class="good-price" v-if="good.price.length <= 3">{{good.price}} руб</h4>
          <h4 class="good-price" v-if="good.price.length > 3 && good.price.length <= 5">{{`${good.price.substring(0,2)} ${good.price.substring(2)}`}} руб</h4>
          <h4 class="good-price" v-if="good.price.length > 5 && good.price.length <= 6">{{`${good.price.substring(0,3)} ${good.price.substring(3)}`}} руб</h4>

        </div>
      </div>
    </div>
    <!-- Если нет товаров -->
    <div v-else>Товаров нет</div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed: {
    goods() {
      return this.$store.getters.goods
    }
  }
}
</script>

<style lang="scss" scoped>
.row-2 {
  width: 67%;
  margin: 20px;
}
.col-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.good {
  border-radius: 6px;
  cursor: pointer;
  width: 250px;
  height: 360px;
  margin: 6px;
  margin-bottom: 40px;
  background-color: white;
  overflow-y: hidden;
}

img {
  height: 50%;
  width: 250px;
}
.good-descriptions{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50%;
  align-items: flex-start;
  justify-content: space-evenly;
}
.good-name {
  margin-left: 10px;
  height: 20px;
}
.good-descr {
  margin-left: 10px;
  height: 100px;
}
.good-price {
  margin-left: 10px;
  height: 20px;
}
</style>
