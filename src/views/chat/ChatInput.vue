<template>
    <div class="chat-input-wrapper">
        <input type="text">
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default class ChatInput extends Vue {

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
        background-color: $background-color-global;

        &:focus { outline: none; }
    }
}
</style>