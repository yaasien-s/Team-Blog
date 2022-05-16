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
        <div class="user-posts p-6 grid grid-cols-2 mx-auto w-full">
            <img src="../assets/images/postimage.png" class="rounded-3xl" alt="">
            <!-- <img src="../assets/images/postimage.png" class="rounded-3xl" alt=""> -->
        </div>
    </div>
    <div class="D-profile p-12">
        <div class="profile-data w-6/12 fixed left-36 top-24 grid grid-cols-3 gap-4 p-4">
            <svg class="col-span-1" width="120" height="120" viewBox="0 0 50 50" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M25.0001 4.16663C20.9594 4.1743 17.0082 5.35686 13.6276 7.57025C10.2471 9.78364 7.58318 12.9323 5.96036 16.6328C4.33753 20.3333 3.82584 24.4258 4.48762 28.4119C5.14939 32.3981 6.95606 36.1057 9.68756 39.0833V39.0833C11.6384 41.198 14.0062 42.8857 16.6416 44.04C19.277 45.1943 22.1229 45.7902 25.0001 45.7902C27.8772 45.7902 30.7231 45.1943 33.3585 44.04C35.9939 42.8857 38.3617 41.198 40.3126 39.0833V39.0833C43.0441 36.1057 44.8507 32.3981 45.5125 28.4119C46.1743 24.4258 45.6626 20.3333 44.0398 16.6328C42.4169 12.9323 39.753 9.78364 36.3725 7.57025C32.992 5.35686 29.0407 4.1743 25.0001 4.16663V4.16663ZM25.0001 41.6666C20.6844 41.6601 16.5395 39.9797 13.4376 36.9791C14.3793 34.6865 15.9814 32.7256 18.0402 31.3456C20.099 29.9655 22.5215 29.2287 25.0001 29.2287C27.4786 29.2287 29.9012 29.9655 31.96 31.3456C34.0187 32.7256 35.6208 34.6865 36.5626 36.9791C33.4607 39.9797 29.3158 41.6601 25.0001 41.6666ZM20.8334 20.8333C20.8334 20.0092 21.0778 19.2036 21.5356 18.5184C21.9934 17.8332 22.6442 17.2992 23.4055 16.9838C24.1669 16.6684 25.0047 16.5859 25.8129 16.7467C26.6212 16.9075 27.3636 17.3043 27.9463 17.887C28.5291 18.4697 28.9259 19.2122 29.0867 20.0204C29.2474 20.8287 29.1649 21.6664 28.8496 22.4278C28.5342 23.1892 28.0001 23.8399 27.3149 24.2977C26.6297 24.7556 25.8242 25 25.0001 25C23.895 25 22.8352 24.561 22.0538 23.7796C21.2724 22.9982 20.8334 21.9384 20.8334 20.8333ZM39.3959 33.3333C37.5345 30.1495 34.6697 27.6729 31.2501 26.2916C32.3108 25.0888 33.002 23.6055 33.2406 22.0196C33.4793 20.4337 33.2552 18.8127 32.5954 17.351C31.9355 15.8893 30.8679 14.649 29.5207 13.7791C28.1735 12.9091 26.6038 12.4463 25.0001 12.4463C23.3963 12.4463 21.8267 12.9091 20.4794 13.7791C19.1322 14.649 18.0646 15.8893 17.4047 17.351C16.7449 18.8127 16.5209 20.4337 16.7595 22.0196C16.9981 23.6055 17.6893 25.0888 18.7501 26.2916C15.3305 27.6729 12.4656 30.1495 10.6042 33.3333C9.12078 30.8064 8.33698 27.9301 8.33339 25C8.33339 20.5797 10.0893 16.3405 13.2149 13.2148C16.3406 10.0892 20.5798 8.33329 25.0001 8.33329C29.4203 8.33329 33.6596 10.0892 36.7852 13.2148C39.9108 16.3405 41.6667 20.5797 41.6667 25C41.6631 27.9301 40.8793 30.8064 39.3959 33.3333V33.3333Z"
                    fill="white" />
            </svg>
            <div class="data col-span-2">
                <div class="top-tier flex space-x-6 py-4">
                    <p class="text-3xl text-white">Username</p>
                    <button class="text-white bg-transparent border px-3 rounded-xl">Edit Profile</button>
                </div>
                <p class="text-white text-xl font-medium">Name of user...</p>
                <p class="text-white">small biography of user...</p>
            </div>

        </div>
        <!-- Remove images before intergrating -->
        <div class="user-posts grid grid-cols-3 gap-6 w-10/12 mx-auto mt-60">
            <router-link :to="{ name: 'Post' }"><img class="rounded-2xl" src="../assets/images/postimage.png" alt=""></router-link>
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
    .profile {
        background-image: url('../assets/images/Feed.png');
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
        height: 100vh;

        @media (min-width: 600px) {
            display: none;
        }

        h1 {
            font-family: 'Lobster Two', cursive;
        }

        .user-posts {
            img {
                width: 175px;
                height: 175px;
                object-fit: cover;
            }
        }
    }

    .D-profile {
        background-image: url('../assets/images/Feed-D.png');
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
        height: 100%;
        padding-bottom: 199px;

        @media (max-width:600px) {
            display: none;
        }

        .profile-data {
            background: linear-gradient(95.58deg, rgba(3, 65, 83, 0.75) 0%, rgba(0, 32, 41, 0.75) 75.74%);
            border-radius: 20px;
        }
    }
</style>