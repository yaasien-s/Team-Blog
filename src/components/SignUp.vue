<template>
<div class="signup">
    <h1 class="text-3xl p-6 text-white">{{ name }}</h1>

           <form class="grid w-10/12 mx-auto space-y-5 mt-6" action="">
               <h1 class="text-center text-5xl mb-6 text-white">{{ name }}</h1>
                     <p class="text-2xl text-center text-white">Kindly fill in the form to sign up to Branch, and welcome back!</p>
              <input type="text" placeholder="Email" class="placeholder-white placeholder-opacity-50 rounded-full p-3 bg-white bg-opacity-50 border-none shadow-2xl">
              <input type="text" placeholder="Phone" class="placeholder-white placeholder-opacity-50 rounded-full p-3 bg-white bg-opacity-50 border-none shadow-2xl">
              <input type="text" placeholder="Username" class="placeholder-white placeholder-opacity-50 rounded-full p-3 bg-white bg-opacity-50 border-none shadow-2xl">
              <input type="password" placeholder="Password" class="placeholder-white placeholder-opacity-50 rounded-full p-3 bg-white bg-opacity-50 border-none shadow-2xl">
              <input type="password" placeholder="Confirm Password" class="placeholder-white placeholder-opacity-50 rounded-full p-3 bg-white bg-opacity-50 border-none shadow-2xl">
              <button class="bg-blue-300 px-5 py-1 text-2xl font-semibold rounded-full w-1/2 mx-auto">Sign Up</button>
          </form>

          <div class="sign-in-link bg-white bg-opacity-50 mx-auto w-full p-2 bottom-0"><p class="text-2xl text-center">Already have an acount? <router-link :to="{ name: 'SignIn' }"><span class="font-bold">Sign In...</span></router-link></p></div>
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
.signup{
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

        @media (min-width: 600px) {
            font-size: 4rem;
        }
    }
    p{
        font-family: 'Lato', sans-serif;
    }
    // .head{

    //     button{
    //         font-family: 'Lato', sans-serif;
    //     }
    // }

    form{
        @media (min-width: 600px) {
            width:40%;
            margin-right:40px;
            margin-top: -70px;
            margin-bottom: 20px;
            background-color: rgba(0, 0, 0, .5);
            padding: 2rem;
            border-radius: 20px;
        }

        h1{
            @media (min-width: 600px) {
                font-size: 3rem;
                margin-bottom: 0;
            }
        }
    }
    .sign-in-link{
        @media (min-width: 600px) {
            width: 40%;
            margin-right: 40px;
            background-color: rgba(0, 0, 0, .5);
            border-radius: 20px;
            padding: 1rem;
            color: white;

        }
    }
}

</style>