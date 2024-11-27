import { createMemoryHistory, createRouter } from 'vue-router'


import home from '../components/home.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Counter from '../components/Counter.vue';
import Message from '../Views/Message.vue';
import ChatBox from '../components/ChatBox.vue';
import NamedRoute from '../components/NamedRoute.vue';
import { compile } from 'vue';
import SearchPage from '../components/SearchPage.vue';
import LoginPage from '../components/LoginPage.vue';
import DashBoard from '../components/DashBoard.vue';

const routes =[
   { path :"/",
    name :' home',
    component: home
},
{ path :"/hello",
    name : 'hello',
    component: HelloWorld
},
{ path :"/counter",
    name : 'counter',
    component: Counter
},
{
    path:"/message",
    name:'Message',
    component:Message,
    children:[
       {
        path :'chat/:userId',
        component : ChatBox
       }
    ]
},
{
    path:"/namedRoute",
    name:'namedRoute',
    component:NamedRoute
},
{
    path:"/namedRoute",
    name:'namedRoute',
    component:NamedRoute
},
{
    path:"/search",
    name:'SearchRoute',
    component:SearchPage
},
{
    path:"/login",
    name:'LoginPage',
    component:LoginPage
},
{
    path:"/dashboard",
    name:'Dashboard',
    component:DashBoard
},


]

 let  router; 

 export default router = createRouter({
    history: createMemoryHistory(),
    routes,
  })