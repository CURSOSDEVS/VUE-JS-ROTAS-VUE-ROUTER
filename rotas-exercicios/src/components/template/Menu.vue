<template>
    <nav class="menu">
        <ul> 
            <router-link v-for="item in itensMenu" :key="item.tag"
                :to="item.tag"
                tag="li"
                active-class="active"
                exact
                ><a>{{item.title}}</a>
            </router-link>
        </ul>   
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