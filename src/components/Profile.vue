<template>
  <div class="profile">
      <div class="head p-3 bg-white bg-opacity-50">
            <h1 class="text-2xl">{{ name }}</h1>
      </div>

      <div class="user-info p-6 space-y-4 flex space-x-32 bg-white bg-opacity-50">
          <div class="data">
              <h1 class="text-4xl ">Username</h1>
              <p class="text-2xl ">@username</p>
          </div>
          <div class="user-image">
              <i class="fa-regular fa-user-circle text-8xl -mt-7"></i>
          </div>
      </div>
          <div class="user-posts p-6 grid grid-cols-2">
              <img src="../assets/images/postimage.png" class="rounded-3xl" alt="">
              <img src="../assets/images/postimage.png" class="rounded-3xl" alt="">
          </div>
  </div>
</template>

<script setup>
  import {
        useStore
    } from 'vuex'
    import {
        computed
    } from 'vue'
    const store = useStore()

    const name = computed(() => {
        return store.state.user.name
    })
</script>

<style lang="scss" scoped>
.profile{
     background-image: url('../assets/images/Feed.png');
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
        height: 100vh;

        h1{
            font-family: 'Lobster Two', cursive;
        }

        .user-posts{
            img{
                width: 175px;
                height: 175px;
                object-fit: cover;
            }
        }
}

</style>