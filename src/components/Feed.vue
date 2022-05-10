<template>
    <div class="feed">
        <div class="head p-3 bg-white bg-opacity-50 flex space-x-72 justify-center mb-6">
            <h1 class="text-2xl">{{ name }}</h1>
            <i class="fa-regular fa-user-circle text-2xl"></i>
        </div>
        <div class="posts">
            <div class="post-user flex p-6 space-x-3">
                <i class="fa-regular fa-user-circle text-white text-2xl"></i>
                <p class="text-white text-xl">@username</p>
            </div>
            <div class="post space-y-1 w-11/12 mx-auto rounded-3xl">
                <img src="../assets/images/postimage.png" class="rounded-tr-3xl rounded-tl-3xl mx-auto " alt="">
                <p class="text-white text-xl p-4">Category</p>
                <p class="text-white font-bold p-4 pt-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nihil tempore illum, veritatis
                    ea eos fugit est unde laborum ratione accusantium esse ipsum impedit aperiam soluta ex consectetur
                    ut? Odio?</p>
            </div>
            <div class="interaction space-x-5 w-11/12 mx-auto px-6 pt-3">
                <i class="fa-regular fa-comment text-white text-3xl"></i>
                <i class="fa-regular fa-heart text-white text-3xl"></i>
                <i class="fa-solid fa-share-nodes text-white text-3xl"></i>

            </div>
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
    .feed {
        background-image: url('../assets/images/Feed.png');
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
        height: 100vh;

        .post{
            background-color: #121127;
        }

        h1 {
            font-family: 'Lobster Two', cursive;
        }

        p {
            font-family: 'Lato', sans-serif;
        }
    }
</style>