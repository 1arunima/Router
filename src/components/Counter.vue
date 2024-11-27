<template>
    <div>
        <h1>Counter:{{ counter }}</h1>
        <button @click="increment"> increment</button>
        <button @click="decrement"> decrement</button>
        <button @click="reset"> reset</button>
        <button @click="goToHome">Go to Home</button>
        <button @click="namedRoute">NamedRoute</button>
        <button @click="search">SearchButton</button>
        <button @click="Login">Login</button>
        <button @click="goBack">Back</button>
        <button @click="goForward">forword</button>

    </div>
</template>

<script setup>
        import {ref}from 'vue';
        import { useRouter } from 'vue-router';

        const counter =ref(0)

        const router =useRouter()


        function increment() {
            counter.value++
        }
  function decrement(){
    counter.value--
  }

  function reset(){
    counter.value=0
  }


function goToHome (){
  router.push("/")
}

function namedRoute(){
  router.push({name:'namedRoute'})

}

function search(){
  router.push({ path: '/search', query: { query: 'Vue', page: 2 } });
}


function Login (){
  router.push("/login")
}

function goBack() {
  
  router.go(-1);
}

function goForward() {
  
  router.go(1);
}

</script>

<style lang="scss" scoped>
    
</style>