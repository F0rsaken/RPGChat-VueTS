import Vue from "vue";
import Vuex from "vuex";
import { authModule } from './auth/auth';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
    state: {
        version: '0.0.1'
    },
    modules: {
        authModule
    }
});

export type RootState = { version: string }