<template>
  <div>
    <router-link :to="{ name: 'home', path: '/' }" class="back">
      ←
    </router-link>
    <div v-if="user" :key="user.id">
      <div class="user-details">
        <img :src="user.avatar" />
        <h1>{{ user.first_name }} {{ user.last_name }}</h1>
        <h2>{{ user.birthdate }}</h2>

        <h2 v-for="address in user.address" :key="address.id">
          {{ address.street }}, {{ address.street_name }}, {{ address.city }},
          {{ address.postal_code }}, {{ address.state }}, {{ address.country }},
          {{ address.country_code }}
        </h2>

        <h2>{{ user.email }}</h2>
        <h2>{{ user.phone }}</h2>
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
  font-size: 84px;
}

.user-details {
  width: 50%;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
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

@media (max-width: 768px) {
}
</style>