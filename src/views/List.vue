<template>
  <div class="row-2">
    <div class="row-container">
      <div class="filter">
        <!-- Селектор -->
        <select name="sortBy" id="sortBy" @change="sort(sortType)" v-model="sortType">
          <option v-for="(item, index) in sortOptions" :value="item.value" :key="index">{{item.text}}</option>
        </select>
      </div>

      <!-- Списов товаров если он не пуст -->
      <div class="col-list" v-if="goods.length">
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
            <!-- Валидация отображения цены -->
            <h4 class="good-price" v-if="good.price.length <= 3">{{good.price}} руб</h4>
            <h4 class="good-price" v-if="good.price.length == 4">{{`${good.price.substring(0,1)} ${good.price.substring(1,4)}`}} руб</h4>
            <h4 class="good-price" v-if="good.price.length == 5">{{`${good.price.substring(0,2)} ${good.price.substring(2,5)}`}} руб</h4>
            <h4 class="good-price" v-if="good.price.length == 6">{{`${good.price.substring(0,3)} ${good.price.substring(3,6)}`}} руб</h4>
            <h4 class="good-price" v-if="good.price.length == 7">{{`${good.price.substring(0,4)} ${good.price.substring(4,7)}`}} руб</h4>
          </div>
        </div>

        </div>
      </div>

    <!-- Если список товаров пуст -->
    <div v-else>
      <h2>Товары не найдены</h2>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      sortType: 'sort',
      sortOptions: [
        { text: 'Сортировать', value: 'sort' },
        { text: 'По возрастранию цены', value: 'priceASC' },
        { text: 'По убыванию цены', value: 'priceDESC' }
      ]
    }
  },
  computed: {
    goods() {
      return this.$store.getters.goods
    },
  },
  methods: {
    // Удаление
    deleteGood(index) {
    this.$store.dispatch('deleteGood', index)
    },
    // Сортировка
    sort(sortType) {
      if(sortType === 'priceASC') {
        this.$store.dispatch('sortByPriceASC')
      } else {
        this.$store.dispatch('sortByPriceDESC')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.row-2 {
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-top: 28px;
}
.row-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 850px;
}
.col-list {
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
  display: flex;
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
.filter {
  display: flex;
  justify-content: flex-start;
  padding-left: 17px;
}
.selector {
  display: flex;
  justify-content: flex-end;
  }
</style>
