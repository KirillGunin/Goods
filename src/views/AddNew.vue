<template>
  <div class="row-1">
    <!-- Новая задача -->
    <div class="col-table">
      <h2>Добавление товара</h2>
      <form class="form" @submit.prevent="addNewGoodLazy">
        <div class="input-field">
          <div class="helper">
            <p>Наименование товара</p>
            <p class="star">*</p>
          </div>
          <input v-model="name" placeholder="Введите наименование товара" type="text" class="input" required>
        </div>
        <div class="input-field">Описание товара
          <textarea v-model="descr" placeholder="Введите описание товара" type="text" class="textarea"></textarea>
        </div>
        <div class="input-field">
          <div class="helper">
            <p>Ссылка на изображение товара</p>
            <p class="star">*</p>
          </div>
          <input v-model="href" placeholder="Введите ссылку" type="text" class="input" required>
        </div>
        <div class="input-field">
          <div class="helper">
            <p>Цена товара</p>
            <p class="star">*</p>
          </div>
          <input v-model="price" placeholder="Введите цену" type="number" class="input" required>
        </div>
        <button :disabeled="!name && !href && !price" class="btn" type="submit">Добавить товар</button>
      </form>
      <Preloader v-if="loading" :width="90" :height="90"/>
      
      <!-- Preloader -->
    </div>
  </div>
</template>

<script>
import Preloader from '../components/UI/Preloader.vue'
export default {
  name: 'addNew',
  components: {Preloader},
  data: () => ({
    id: Date.now(),
    name: '',
    descr: '',
    href: '',
    price: '',
    loading: false,
  }),
  methods: {
    addNewGoodLazy() {
      this.loading = true
      setTimeout(() => {
        this.addNewGood()
      }, 3000)
    },

    addNewGood() {
      this.loading = false
      const good = {
        id: this.id,
        name: this.name,
        descr: this.descr,
        href: this.href,
        price: this.price,
      }
      this.$store.dispatch('newGood', good)
      this.id = Date.now(),
      this.name = '',
      this.descr = '',
      this.href = '',
      this.price = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.row-1 {
  min-width: 30%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20px;
}
.col-table {
  width: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.form {
  background-color: white;
  border-radius: 6px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 40px;
}
.input-field {
  width: 100%;
  margin-bottom: 10px;
  padding: 5px;
}
input:focus {
  border: 2px solid #cddfe7;
  outline: none;
}
input:invalid {
  border-color: rgb(229, 91, 91)
}
input:not(:focus):invalid {
  border-color:#cddfe7
}
input {
  margin-top: 0px;
  width: -webkit-fill-available;
  height: 25px;
  border-radius: 4px;
  padding-left: 5px;
  outline: none;
  box-shadow: 3px 3px 3px rgb(118, 118, 118);
  border-style: solid;
}
textarea:focus {
  border: solid 2px #cddfe7;
  outline: none;
}

textarea {
  height: 100px;
  width: -webkit-fill-available;
  margin-bottom: 0px;
  border: solid 2px #cddfe7;
  border-radius: 4px;
  padding: 2px;
  box-shadow: 3px 3px 3px rgb(118, 118, 118);
}
.btn {
  width: -webkit-fill-available;
  height: 25px;
  border-radius: 4px;
  background-color: #d4d4d4;
  color: black;
  border: none;
  box-shadow: 3px 3px 3px rgb(118, 118, 118);
  cursor: pointer;
}
.btn:hover {
  background-color: rgba(172, 255, 47, 0.231);
}
.helper {
  display: flex
}
.star{
  color:rgb(187, 0, 0)
}
</style>
