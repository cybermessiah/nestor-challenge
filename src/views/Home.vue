<template>
    <div class="home-container">
        <router-link class="nav-link" to="/winners">Winners Page</router-link>

        <h2>Is your name lucky?</h2>
        <p>
            Welcome to the game where we find out whether your name is one of
            our lucky names of the day. All you have to do is type your name
            below and we will tell you!
        </p>
        <name-searcher></name-searcher>
        <winners-list></winners-list>
    </div>
</template>

<script>
import NameSearcher from '@/components/NameSearcher.vue'
import WinnersList from '@/components/WinnersList.vue'

export default {
    name: 'Home',
    components: {
        NameSearcher,
        WinnersList,
    },
}
</script>

<style lang="scss" scoped>
.home-container {
    width: 50vw;
    display: grid;
    justify-items: center;
}
</style>
