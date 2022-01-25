<template>
  <div id="app">
    <header>
      <router-link :to="{ name: 'home', path: '/' }" class="back">
        <img src="./assets/logo.svg">
      </router-link>
    </header>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@300&display=swap'); 

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Dongle', sans-serif;
}

body {
  background: rgb(236,55,132);
  background: linear-gradient(310deg, rgba(236,55,132,1) 10%, rgba(164,214,252,1) 61%) no-repeat center center fixed;
}

a {
  text-decoration: none;
}
</style>
