<template>
    <div id="app" class="app-wrapper">
        <!-- <div id="nav"> -->
        <!-- <router-link to="/">Home2</router-link> | -->
        <!-- <router-link to="/about">About</router-link> -->
        <!-- </div> -->
        <router-view/>
    </div>
</template>

<style lang="scss">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
}

.app-wrapper {
    display: flex;
    position: relative;
    background-color: #7c7c7c;
    min-height: 100vh;
    min-width: 100vw;
}
</style>
