<template>
  <div>
    <router-link :to="{ name: 'home', path: '/' }" class="back link">←</router-link>
    <div v-if="user" :key="user.id">
      <div class="user">
        <div class="basics">
            <img :src="user.avatar" class="avatar"/>
            <h1>{{ user.first_name }} {{ user.last_name }}</h1>
        </div>
        <div class="details">
            <h2><span>Date of birth:</span> {{ user.birthdate }}</h2>
            <h2 v-for="address in user.address" :key="address.id">
                <span>Place of residence:</span>
                {{ address.street }}, {{ address.street_name }}, {{ address.city }},
                {{ address.postal_code }}, {{ address.state }}, {{ address.country }},
                {{ address.country_code }}
            </h2>
            <h2><span>E-mail:</span> {{ user.email }}</h2>
            <h2><span>Phone number:</span> {{ user.phone }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],

  computed: {
    user() {
      return this.$store.state.user;
    },
  },

  mounted() {
    this.$store.dispatch("getUser", this.id);
  },
};
</script>

<style>
.back {
  padding-left: 1vw;
  font-size: 4.3vw;
}

.user {
  width: 50%;
  padding: 4.5vh 2.5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.basics {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {
    .user {
        width: 70%;
    }

    .back {
        padding-left: 2vw;
        font-size: 8.3vw;
    }
}
</style>