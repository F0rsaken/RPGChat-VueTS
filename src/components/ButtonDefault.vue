<template>
    <button type="button" class="btn button-default" @click="onClick">{{ text }}</button>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Emit } from 'vue-property-decorator'

@Component
export default class ButtonDefault extends Vue {
    @Prop() public text: string;

    @Emit() public onClick() {}
}

</script>

<style lang="scss" scoped>
@import '../assets/styles/consts.scss';

.button-default {
    background-color: $color-1;
    font-size: 18px;
    padding: 10px 35px;
    border-radius: 5px;
    border: 1px solid $color-1;
    transition: background-color 0.3s;

    &:hover { background-color: #53b755; transition: background-color 0.2s ease-out; }
}
</style>