<template>
    <div class="login-panel">
        <img alt="Vue logo" src="../../../assets/logo.png" style="max-width: 185px;">
        <h2>Welcome<br>adventurer</h2>
        <div class="form-wrapper">
            <InputForm :label="'Login'" v-model="login"/>
            <InputForm :type="'password'" :label="'Password'" v-model="password"/>
            <InputForm :label="'URL'" v-model="url"/>
        </div>
        <ButtonDefault class="login-button" :text="'Login'"/>
    </div>
</template>

<script lang="ts">
import InputForm from '@/components/InputForm.vue'
import ButtonDefault from '@/components/ButtonDefault.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
    components: {
        InputForm,
        ButtonDefault
    }
})
export default class Login extends Vue {
    public login: string = '';
    public password: string = '';
    public url: string = '';
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/consts.scss';

.login-panel {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 50%;
    width: fit-content;
    min-width: 350px;
    margin: 0 auto;
    padding: 40px;
    transform: translateY(-50%);
    background-color: #3a3a3a;
    border-radius: 25px;
    border: 2px solid $color-1;

    h2 { text-align: center; text-transform: uppercase; font-size: 28px; }
    .form-wrapper {
        width: 100%; display: flex; align-items: center; flex-direction: column;
    }

    .login-button { margin-top: 20px; }
}
</style>

