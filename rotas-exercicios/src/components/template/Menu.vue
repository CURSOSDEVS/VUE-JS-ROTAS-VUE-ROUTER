<template>
    <nav class="menu">
        <!-- <router-link to="/">Início</router-link>
        <router-link to="/usuario">Usuário</router-link> -->
        <router-link v-for="item in itensMenu" :key="item.tag"
            :to="item.tag"
            >{{item.title}}</router-link>
    </nav>
</template>

<script>
    export default{
        props:{
            itensMenu: {type: Array, required: true}
        }
    }
</script>

<style>

</style>