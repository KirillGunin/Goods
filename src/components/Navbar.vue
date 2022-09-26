<template>
  <nav class="teal darken-2">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">Todo</router-link>
      <ul class="right hide-on-med-and-down">
        <router-link
        tag="li"
        to="/"
        exact
        active-class="active"><a href="#">Добавить</a></router-link>

        <router-link
        tag="li"
        to="/list"
        active-class="active"><a href="#">Список</a></router-link>
      </ul>
    </div>
  </nav>
</template>

<style>
  nav {
    padding: 0 2rem;

  }
</style>
