<template>
  <div class="signin">
      <div class="head flex p-6">
          <h1 class="text-3xl text-white">{{ name }}</h1>
          <!-- <router-link :to="{ name: 'SignUp' }"><button class="bg-blue-300 px-5 text-2xl font-semibold rounded-full">Sign Up</button></router-link> -->
          </div>


          <form class="grid w-10/12 mx-auto space-y-5 mt-6" action="">
              <h1 class="text-center text-5xl mb-6 text-white">{{ name }}</h1>
              <p class="text-2xl text-center text-white">Kindly fill in the form to sign in to Branch, and welcome back!</p>
              <input type="text" placeholder="Username, phone number, or email" class="placeholder-white placeholder-opacity-50 rounded-full p-3 bg-white bg-opacity-50 border-none shadow-2xl">
              <input type="password" placeholder="Password" class="placeholder-white placeholder-opacity-50 rounded-full p-3 bg-white bg-opacity-50 border-none shadow-2xl">
              <button class="bg-blue-300 px-5 py-1 text-2xl font-semibold rounded-full w-1/2 mx-auto">Sign In</button>
          </form>
          <div class="sign-up-link bg-white bg-opacity-50 mx-auto w-full p-2 bottom-0"><p class="text-2xl text-center">Don't have an acount? <router-link :to="{ name: 'SignUp' }"><span class="font-bold">Sign Up...</span></router-link></p></div>

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

    @media (min-width: 600px) {
        background-image: url('../assets/images/Landing.png');
    }
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

        h1{
            @media (min-width: 600px) {
             font-size: 4rem;
             padding: 2.5rem;   
            }

        }
    }

    form{
        @media (min-width: 600px){
            width: 40%;
            margin-right: 40px;
            padding: 2rem;
            background-color: rgba(0, 0, 0, .5);
            border-radius: 20px;
            margin-top: -90px;
            margin-bottom: 30px
        }

        p{
            @media (min-width: 600px){
                width:75%;
                margin-inline: auto;
            }
        }

    }
        .sign-up-link{
            @media (min-width:600px){
                width: 40%;
                margin-right:40px;
                background-color: rgba(0, 0, 0, .5);
                border-radius: 20px;
                position: relative;
                color: white;
                padding: 1rem;
            }
        }
}

</style>