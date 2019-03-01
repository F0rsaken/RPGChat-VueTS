<template>
    <div class="input-wrapper">
        <p v-if="true">{{ label }}</p>
        <input :type="type" :value="value" @input="onInputChanged">
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model } from 'vue-property-decorator'

@Component
export default class InputForm extends Vue {
    @Prop() label: string;
    @Prop({ default: 'text' }) type: string;

    @Prop()
    @Model('change') value: string;

    created() {
        // console.log(this.type);
    }

    onInputChanged($event: any) {
        this.$emit('change', $event.target.value);
    }
}
</script>

<style lang="scss" scoped>
.input-wrapper {
    width: 100%;
    max-width: 250px;
    margin-bottom: 25px;

    p { font-size: 16px; margin: 0; text-align: center; }
    input {
        width: 100%; box-sizing: border-box; font-size: 15px; padding: 5px 20px; border-radius: 5px; color: #3c3c3c;

        &:focus { outline: none; }
    }
}
</style>
