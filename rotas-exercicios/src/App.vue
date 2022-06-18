<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<Menu :itensMenu="itensMenu" />
		<router-view />
	</div>
</template>

<script>
	import Menu from './components/template/Menu.vue'

	export default {
		components:{ Menu },
		data() {
			return {
				itensMenu: [ 
					{ title: 'Início', tag: '/'},
					{ title: 'Usuário', tag: '/usuario/10'},
				]
			}
		},
	}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
