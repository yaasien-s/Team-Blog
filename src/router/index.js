import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '/src/components/SignIn.vue'
import SignUp from '/src/components/SignUp.vue'
import Feed from '/src/components/Feed.vue'
import Profile from '/src/components/Profile.vue'
import Post from '/src/components/Post.vue'

const routes = [
    {
        path: '/',
        name: 'SignIn',
        component: SignIn,
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp,
    },
    {
        path: '/feed',
        name: 'Feed',
        component: Feed,
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
    },
    {
        path: '/post',
        name: 'Post',
        component: Post,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router