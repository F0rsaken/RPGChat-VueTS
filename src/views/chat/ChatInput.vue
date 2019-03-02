<template>
    <div class="chat-input-wrapper">
        <input type="text" v-model="textInput">
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default class ChatInput extends Vue {
    // WIKTOR ta zmienna ma aktualną wartość inputa
    public textInput: string;
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
        width: 100%; box-sizing: border-box; font-size: 15px; padding: 6px 15px; border-radius: 5px;
        // color: #3c3c3c;
        color: #eaeaea;
        border: 1px solid #eaeaea;
        background-color: $background-color-1;

        &:focus { outline: none; }
    }
}
</style>