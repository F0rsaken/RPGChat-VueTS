import { Module } from 'vuex';
import { RootState } from '../store';

export const authModule: Module<AuthState, RootState> = {
    namespaced: true,
    state: <AuthState>{
        authenticated: false,
        logging: false,
        userId: null
    },
    mutations: {
        logging(state, payload: AuthPayload) {
            state.logging = true;
            // console.log('logging', payload);
        },
        userAuthenticated(state) {
            state.logging = false;
            state.authenticated = true;
            state.userId = 0;
        },
        userLogout(state) {
            state.authenticated = false;
        }
    },
    actions: {
        login({ commit }, payload: AuthPayload): Promise<boolean> {
            commit('logging', payload);
            return new Promise( (resolve, reject) => {
                setTimeout(() => {
                    commit('userAuthenticated');
                    resolve(true);
                }, 500);
            });
        },
        logout({ commit }) {
            commit('userLogout');
        }
    }
}

export type AuthState = {
    authenticated: boolean,
    logging: boolean,
    userId: number | null
}

export type AuthPayload = {
    url: string,
    login: string,
    password: string
}