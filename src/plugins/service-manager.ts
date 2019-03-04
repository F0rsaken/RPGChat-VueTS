import _Vue from 'vue'

// declare module {}
export function serviceManager(Vue: typeof _Vue, options: any): void {
    const allServices: { [key: string]: any } = {};

    Vue.prototype.$addService = (name: string, service: any) => {
        if (!allServices[name]) {
            allServices[name] = service;
        } else {
            console.error('Service already exist or the name is taken');
        }
    }

    Vue.prototype.$getService = (name: string) => {
        if (!allServices[name]) {
            console.error('Service wasn\'t initialized or has incorrect name');
        }
        
        return allServices[name];
    }
}

// export const serviceManager = {
//     install: (Vue: Vue, options: any) => {
//         const allServices: { [key: string]: any } = {};
//         Vue.prototype.
//     }
// }