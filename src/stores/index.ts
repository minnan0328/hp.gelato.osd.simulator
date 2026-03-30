import { reactive, toRefs } from 'vue';
import { defineStore } from 'pinia';
import {
	Gaming, Color, Image, Input,
	Power, Menu, Management,Information, Exit
} from '@/models/index';
export interface StoreState {
    gaming: Gaming;
    color: Color;
    image: Image;
    input: Input;
    power: Power;
    menu: Menu;
    management: Management;
    information: Information;
    exit: Exit;
}

// 建立 Menus 預設值
export class MenusDefaultModel implements StoreState  {
    gaming = new Gaming();
    color = new Color();
    image = new Image();
    input = new Input();
    power = new Power();
    menu = new Menu();
    management = new Management();
    information = new Information();
    exit = new Exit();
};

export const useMenuStore = defineStore('counter', () => {
    let state = reactive<StoreState>(new MenusDefaultModel());

    function $resetAll() {
        state.gaming = JSON.parse(JSON.stringify(new Gaming()));
        state.color = JSON.parse(JSON.stringify(new Color()));
        state.image = JSON.parse(JSON.stringify(new Image()));
        state.input.nodes = JSON.parse(JSON.stringify(new Input().nodes));
        state.power = JSON.parse(JSON.stringify(new Power()));
        state.menu = JSON.parse(JSON.stringify(new Menu()));
        state.management = JSON.parse(JSON.stringify(new Management()));
        state.information = JSON.parse(JSON.stringify(new Information()));
        state.exit = JSON.parse(JSON.stringify(new Exit()));
    }

    return {
        ...toRefs(state),
        $resetAll
    };
});