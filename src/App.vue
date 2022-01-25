<template>
  <div id="app">
    <header>
      <router-link :to="{ name: 'home', path: '/' }">
        <img src="./assets/logo.svg" class="logo">
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
  font-weight: 100;
}

body {
  background: rgb(236,55,132);
  background: linear-gradient(310deg, rgba(236,55,132,1) 10%, rgba(164,214,252,1) 61%) no-repeat center center fixed;
}

header {
  padding: 3vh 0 0 1vw;
}

a {
  text-decoration: none;
  color: #0e163a;
  cursor: pointer;
}

h1 {
  font-size: 3vw;
}

h2 {
  font-size: 1.8vw;
}

span {
  text-transform: uppercase;
  font-weight: 600;
}

.logo {
  width: 10vw;
}

.avatar {
  width: 10vw;
  background-color: #fff;
  border-radius: 50%;
  border: 5px solid #fff;
}

.link:hover {
    opacity: .6;
    cursor: pointer;
    transition: ease-in .3s;
}

@media (max-width: 768px) {
      h1 {
        font-size: 5vw;
      }

      h2 {
        font-size: 3.8vw;
      }

      .avatar {
        width: 20vw;
      }
}

@media (min-width: 769px) and (max-width: 1025px) {
      h1 {
        font-size: 3.5vw;
      }

      h2 {
        font-size: 2vw;
      }
}

@media (max-width: 1024px) {
      header {
        margin-bottom: 2vh;
        padding: 1.6vh 0 0 2vw;
      }

      .logo {
        width: 18vw;
      }
}
</style>
