<template>
  <div class="row-1">
    <!-- Новая задача -->
    <div class="col-table">
      <h2>Добавление товара</h2>
      <form class="form" @submit.prevent="addNewGood">
        <div class="input-field">Наименование товара
          <input v-model="name" placeholder="Введите наименование товара" type="text" class="input" required>
        </div>
        <div class="input-field">Описание товара
          <textarea v-model="descr" placeholder="Введите описание товара" type="text" class="textarea"></textarea>
        </div>
        <div class="input-field">Ссылка на изображение товара
          <input v-model="href" placeholder="Введите ссылку" type="text" class="input" required>
        </div>
        <div class="input-field">Цена товара
          <input v-model="price" placeholder="Введите цену" type="number" class="input" required>
        </div>
        <button class="btn" type="submit">Добавить товар</button>
      </form>
    </div>

  </div>
</template>

<script>
export default {
  name: 'addNew',
  data: () => ({
    id: Date.now(),
    name: '',
    descr: '',
    href: '',
    price: '',
  }),
  methods: {
    addNewGood() {
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
  min-width: 26%;
}
.col-table {
  width: 300px;
}
.form {
  background-color: white;
  border-radius: 6px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
.input-field {
  width: 100%;
  margin-bottom: 10px;
  padding: 5px;
}
input:last-child{
  margin-top: 0px;
  width: -webkit-fill-available;
  height: 25px;
  border-radius: 4px;
  padding-left: 5px;
  border: solid 1px;
  box-shadow: 3px 3px 3px rgb(118, 118, 118);
}
.textarea {
  height: 100px;
  width: -webkit-fill-available;
  margin-bottom: 0px;
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
</style>
