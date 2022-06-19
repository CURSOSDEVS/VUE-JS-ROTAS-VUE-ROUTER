<template>
    <div class="usuario-lista">
        <h3>Lista de Usuários</h3>
        <ul class="lista">
            <router-link 
                to="/usuario/1" 
                tag="li" 
                active-class="active" 
                exact><a>Usuario 1</a></router-link>
            <router-link 
                to="/usuario/2" 
                tag="li" 
                active-class="active" 
                exact><a>Usuario 2</a></router-link>
            <router-link 
                to="/usuario/3" 
                tag="li" 
                active-class="active" 
                exact><a>Usuario 3</a></router-link>
        </ul>
    </div>
</template>

<script>
    export default{
        
    }
</script>

<style>

</style>