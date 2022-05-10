<template>
<div>
    <nav class=" p-4 w-full fixed bottom-0 bg-white bg-opacity-50 text-black text-4xl">
            <div class="links space-x-12 text-center">
                <router-link :to="{ name: 'Feed' }"><i class="fa-solid fa-house"></i></router-link>
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-solid fa-circle-plus"></i>
                <router-link :to="{ name: 'Profile' }"><i class="fa-regular fa-user-circle"></i></router-link>
            </div>

        
    </nav>
<router-view />
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
nav{
    a.router-link-exact-active {
    color: #000;
    border-color: #000;

  }

}
</style>