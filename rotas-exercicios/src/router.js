import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Usuario from './components/usuario/Usuario'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
import UsuarioLista from './components/usuario/UsuarioLista'
import UsuarioEditar from './components/usuario/UsuarioEditar'
import Menu from './components/template/Menu'
import MenuAlt from './components/template/MenuAlt'

Vue.use(Router)

const router = new Router({
    mode:'history',
    scrollBehavior( to, from, savedPosition ){
        //return { x: 0, y: 1000}
        if(savedPosition){
            return savedPosition
        }else if(to.hash){
            return { 
                selector: to.hash
            }
        }else {
            return { x:0, y:0}
        }
    },
    routes: [{
        name: 'inicio',
        path: '/',
        // component: Inicio
        components: {
            default: Inicio,
            menu: Menu
        }
    },{
        path: '/usuario',
        name: 'usuario',
        // component: Usuario,
        components:{
            default: Usuario,
            menu: MenuAlt,
            menuInferior: MenuAlt
        },
        props: true,
        children: [
            { path: '', component: UsuarioLista},
            { path: ':id', component: UsuarioDetalhe, props: true,
                    beforeEnter: (to,from,next)=>{
                        console.log('antes da rota => UsuarioDetalhe')
                        // 
                        // alert('Usuario não cadastrado')
                        next()                    
                    }},
            { path: ':id/editar', component: UsuarioEditar, 
                props: true, name: 'editarUsuario'}

        ]
    },{
        path: '/redirecionar',
        redirect: '/usuario'
    },{
        path: '*',
        redirect: '/'
    }]
})

router.beforeEach((to, from, next) => {
    console.log('antes das fotas => global')
    // if(to.path !== '/usuario'){
    //     next('/usuario')
    // }else{
        next()
    // }
        
})

export default router