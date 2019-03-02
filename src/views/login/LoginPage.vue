<template>
    <div class="login-wrapper">
        <Login/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Login from '@/views/login/Login.vue'

export default Vue.extend({
    name: 'login-page',
    components: {
        Login
    }
})
</script>

<style lang="scss" scoped>
.login-wrapper {
    width: 100%;
    padding: 10px 0;
}
</style>
