<template>
  <div class="row-2">
    <h2 class="selector">ttt</h2>
    <div class="col-list" v-if="goods.length">

      <!-- Списов товаров -->
      <div
      class="good"
      v-for="(good, index) in goods"
      :key="good.id"
      @mouseover="active = true"
      @mouseleave="active = false"
      >
      <div>
        <img class="svg" v-show="active" @click="deleteGood(index)" src="@/assets/icons8-delete.svg">
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
    </div>

    <!-- Если нет товаров -->
    <div v-else>
      <h2>Товары не найдены</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    }
  },
  computed: {
    goods() {
      return this.$store.getters.goods
    },
  },
  methods: {
    deleteGood(index) {
    this.$store.dispatch('deleteGood', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.row-2 {
  width: 67%;
}
.col-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 14px;
}
.svg {
  height: 40px;
  width: 40px;
  margin-left: 225px;
  margin-top: -20px ;
}
.good {
  border-radius: 6px;
  cursor: pointer;
  width: 250px;
  height: 360px;
  margin: 6px 16px 16px 16px;
  background-color: white;
  overflow-y: hidden;
  .svg {
    display: none
  }
}
div.good:hover .svg {
  display: block;
  position: absolute
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
  padding-top: 5px;
  padding-bottom: 5px;
}
.good-descr {
  margin-left: 10px;
  height: 100px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.good-price {
  margin-left: 10px;
  height: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.selector {
  display: flex;
  justify-content: flex-end;
  padding-right: 25px;
}
</style>
