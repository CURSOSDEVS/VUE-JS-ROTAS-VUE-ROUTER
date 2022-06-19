<template>
    <div class="usuario-lista">
        <h3>Lista de Usuários</h3>
        <ul class="lista">
            <router-link 
                to="/usuario/1" 
                tag="li" 
                active-class="active" 
                class="item-lista"
                exact>Usuario 1</router-link>
            <router-link 
                to="/usuario/2" 
                tag="li" 
                active-class="active" 
                class="item-lista"
                exact>Usuario 2</router-link>
            <router-link 
                to="/usuario/3" 
                tag="li" 
                active-class="active" 
                class="item-lista"
                exact>Usuario 3</router-link>
        </ul>
    </div>
</template>

<script>
    export default{
        
    }
</script>

<style>

</style>