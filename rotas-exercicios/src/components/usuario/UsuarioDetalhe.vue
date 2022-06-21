<template>
    <div class="usuario-detalhe">
        <h3>Usuário Detalhe</h3>
        <hr>
        <p><strong>Código:</strong> {{id}} </p>

         <!-- :to="`/usuario/${id}/editar`" > -->
         <!-- :to="`/usuario/${$route.params.id}/editar`" > -->
         <!-- :to="{name: 'editarUsuario', params: { id: $route.params.id }}" > -->

        <router-link 
            tag="button" 
            primario
            :to="{  name: 'editarUsuario', 
                    params: { id }, 
                    query: { completo: true, lingua: 'pt-br'},
                    hash: '#rodape' }" >
            Editar
        </router-link>
    </div>
</template>

<script>
    export default{
         props: ['id'],
    }    
</script>

<style>

</style>