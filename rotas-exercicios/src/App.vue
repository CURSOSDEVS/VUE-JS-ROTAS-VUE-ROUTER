<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<!-- <Menu :itensMenu="itensMenu" /> -->
		<router-view name="menu" />

		<transition mode="out-in"
			enter-active-class="animated rubberBand"
			leave-active-class="animated rollOut">
			<router-view />
		</transition>

		<router-view name="menuInferior" />
	</div>
</template>

<script>
	// import Menu from './components/template/Menu.vue'

	export default {
		// components:{ Menu },
		data() {
			return {
				itensMenu: [ 
					{ title: 'Início', tag: '/'},
					{ title: 'Usuário', tag: `/usuario`},
					{ title: 'Usuário 2', tag: `/usuario/2`},
					{ title: 'Usuário 3', tag: `/usuario/3`},
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
