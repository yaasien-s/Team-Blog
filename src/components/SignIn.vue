<template>
  <div class="signin">
      <div class="head flex p-6 space-x-36">
          <h1 class="text-3xl text-white">{{ name }}</h1>
          <router-link :to="{ name: 'SignUp' }"><button class="bg-blue-300 px-5 text-2xl font-semibold rounded-full">Sign Up</button></router-link>
          </div>

          

          <form class="grid w-10/12 mx-auto space-y-5 mt-6" action="">
              <input type="text" placeholder="Username, phone number, or email" class="placeholder-white placeholder-opacity-50 rounded-full p-3 bg-white bg-opacity-50 border-none shadow-2xl">
              <input type="password" placeholder="Password" class="placeholder-white placeholder-opacity-50 rounded-full p-3 bg-white bg-opacity-50 border-none shadow-2xl">
              <button class="bg-blue-300 px-5 py-1 text-2xl font-semibold rounded-full w-1/2 mx-auto">Sign In</button>
          </form>

          <div class="sign-up-link bg-white bg-opacity-50 absolute w-full p-2 bottom-0"><p class="text-2xl text-center">Don't have an acount? <router-link :to="{ name: 'SignUp' }"><span class="font-bold">Sign Up...</span></router-link></p></div>
  </div>
</template>

<script setup>
import {useStore} from 'vuex'
import {computed} from 'vue'
const store = useStore()

const name = computed(() => {
    return store.state.user.name
})
</script>

<style lang="scss" scoped>
.signin{
    background-image: url('../assets/images/LandingSection.png');
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    height: 100vh;
    h1{
        font-family: 'Lobster Two', cursive;
    }
    p{
        font-family: 'Lato', sans-serif;
    }
    .head{

        button{
            font-family: 'Lato', sans-serif;
        }
    }
}

</style>