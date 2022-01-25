<template>
    <div>
        <div class="card">
            <img :src="user.avatar" class="avatar">
            <router-link :to="{name: 'user', params: {id: user.id}}">
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
    padding: 20px 0 20px 40px;
    display: flex;
    align-items: center;

    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 2px solid rgba(255, 255, 255, 0.3);
}

h1 {
    font-size: 3vw;
    font-weight: 100;
}

a:hover {
    opacity: .6;
    cursor: pointer;
    transition: ease-in .3s;
}

a {
    color: #0e163a;
}

.avatar {
    width: 10vw;
    margin-right: 40px;
    background-color: #fff;
    border-radius: 50%;
    border: 5px solid #fff;
}

@media (max-width: 768px) {
    .card {
        width: 55vw;
        padding: 10px 0 10px 20px;
    }
}
</style>