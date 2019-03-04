<template>
    <div class="chat-input-wrapper">
        <input type="text" v-model="textInput">
        <ButtonDefault class="send-button" :text="'Send'"></ButtonDefault>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import ButtonDefault from '@/components/ButtonDefault.vue'

@Component({
    components: {
        ButtonDefault
    }
})
export default class ChatInput extends Vue {
    // WIKTOR ta zmienna ma aktualną wartość inputa
    public textInput: string = '';
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/consts.scss';

.chat-input-wrapper {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;

    input {
        width: 100%; box-sizing: border-box; font-size: 15px; padding: 8px 15px; border-radius: 20px;
        // color: #3c3c3c;
        color: $color-2;
        border: 1px solid $color-2;
        background-color: $background-color-1;

        &:focus { outline: none; }
    }

    .send-button {
        border-radius: 20px;
        padding: 0 20px;
        margin-left: 10px;
    }
}
</style>