<template>

    <div class="chat-wrapper">
        <div class="row">
            <div class="col-8 left-panel">
                <ChatInput></ChatInput>
            </div>
            <div class="col-4 right-panel">
                <p>ChatPage!</p>
                <p>A right side panel place!</p>
                <ButtonDefault :text="'Logout'" @on-click="onLogout"></ButtonDefault>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import ButtonDefault from '@/components/ButtonDefault.vue';
import ChatInput from '@/views/chat/ChatInput.vue';
import { namespace } from 'vuex-class';

const authModule = namespace('authModule');

@Component({
    components: {
        ButtonDefault,
        ChatInput
    }
})
export default class ChatPage extends Vue {
    @authModule.Action('logout') logout: () => void;

    onLogout() {
        this.logout();
        this.$router.push({ name: 'login' });
    }
}
</script>

<style lang="scss" scoped>
.chat-wrapper {
    width: 100%;
    padding: 30px 20px;

    .row, .left-panel, .right-panel { height: 100%; }
    .left-panel, .right-panel { margin-top: 0; margin-bottom: 0; position: relative; }
}
</style>