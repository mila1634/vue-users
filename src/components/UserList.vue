<template>
    <div class="user-list">
        <user-card v-for="user in users" :key="user.id" :user="user" />
    </div>
</template>

<script>
import UserCard from './UserCard.vue'

export default {
  components: { UserCard },

  computed: {
    users() {
      return this.$store.state.users
    }
  },

  mounted() {
    this.$store.dispatch('getUsers')
  }  
}
</script>

<style>
.user-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .user-list {
    flex-direction: column;
  }
}
</style>