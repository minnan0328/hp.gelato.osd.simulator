import Toast from './_toast/toast.vue';
import { createApp } from 'vue';
import type { App, Component } from 'vue';
import type { Language } from '@/types/index';

class Dialog {
    app?: App<Element>;
    component: Component;
    node: HTMLElement;
    vm: any;

    constructor(com: Component) {
        this.component = com;
        this.node = document.createElement('div');
    }

    mount() {
        this.app?.unmount();
        this.node.remove();
        this.app = createApp(this.component);
        document.getElementById('monitor-wrapper')?.appendChild(this.node);
        this.vm = this.app.mount(this.node);
    }

    open(option: any) {
        this.mount();
        return this.vm.open(option);
    }
}

const toast = new Dialog(Toast);

export default {
    toast: (option: { message: Language; image: string }) => toast.open(option),
};
