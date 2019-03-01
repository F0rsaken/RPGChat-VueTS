<template>
    <button type="button" class="btn button-default">{{ text }}</button>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class ButtonDefault extends Vue {
    @Prop() public text: string;
}

</script>

<style lang="scss" scoped>
@import '../assets/styles/consts.scss';

.button-default {
    background-color: $color-1;
    font-size: 18px;
    padding: 10px 35px;
    border-radius: 5px;
}
</style>