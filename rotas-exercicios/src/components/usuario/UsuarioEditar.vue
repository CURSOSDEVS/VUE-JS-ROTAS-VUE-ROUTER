<template>
    <div class="usuario-editar">
        <h3>Usuario Editar</h3>
        <hr>
         <p><strong>Editando usuário:</strong> {{id}} </p>
         <p><strong>Completo:</strong> {{ $route.query.completo ? 'Sim' : 'Não'}} </p>
         <p><strong>Lingua:</strong> {{ $route.query.lingua }} </p>
         
         <hr>
         <button primario>Confirmar</button>

         <div id="rodape">
            <h3>Rodapé componente Editar</h3>
         </div>
    </div>
</template>

<script>
    export default{
         props: ['id'],
    }
</script>

<style>
    #rodape{
        margin-top: 1000px;
    }
</style>