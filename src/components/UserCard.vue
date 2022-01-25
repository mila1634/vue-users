<template>
    <div>
        <div class="card">
            <img :src="user.avatar" class="avatar card-avatar">
            <router-link :to="{ name: 'user', params: { id: user.id } }" class="link">
                <h1>{{ user.first_name }} {{ user.last_name }}</h1>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ['user'],

}
</script>

<style>
.card {
    width: 35vw;
    margin: 1vw;
    padding: 1.8vh 0 1.8vh 2vw;
    display: flex;
    align-items: center;

    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 2px solid rgba(255, 255, 255, 0.3);
}

.card-avatar {
    margin-right: 2vw;
}

@media (max-width: 768px) {
    .card {
        width: 65vw;
        padding: 10px 0 10px 20px;
    }
}
</style>