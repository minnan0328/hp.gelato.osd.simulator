import { useMenuStore } from '@/stores/index';
import { OffNodes } from '@/models/class/_utilities';
import ColorNodes from '@/models/class/color/color';
import InputNodes from '@/models/class/input/input';

const menuStore = useMenuStore();
const OffNodesEnum = new OffNodes();
const ColorNodesEnum = new ColorNodes();
const InputNodesEnum = new InputNodes();

export function setBrightnessValue() {
    menuStore.$state.information.nodes[2].selected = menuStore.$state.color.selected;
    menuStore.$state.information.nodes[2].result = menuStore.$state.color.result;
    const colorResult = menuStore.$state.color.nodes.find(n => n.result == menuStore.$state.color.result);
    
    menuStore.$state.image.nodes[0].result = colorResult.brightness;
    menuStore.$state.image.nodes[0].nodes[0].result = colorResult.brightness;
    menuStore.$state.color.nodes[8].nodes![0].result = colorResult.rgb.r;
    menuStore.$state.color.nodes[8].nodes![1].result = colorResult.rgb.g;
    menuStore.$state.color.nodes[8].nodes![2].result = colorResult.rgb.b;

    menuStore.$state.image.nodes[0].selected = colorResult.brightness;
    menuStore.$state.image.nodes[0].nodes[0].selected = colorResult.brightness;
    menuStore.$state.color.nodes[8].nodes![0].selected = colorResult.rgb.r;
    menuStore.$state.color.nodes[8].nodes![1].selected = colorResult.rgb.g;
    menuStore.$state.color.nodes[8].nodes![2].selected = colorResult.rgb.b;

    // 當 color 是 HP Enhance+ 時 brightness 的 dynamic contrast 為 disable 並且關閉
    if(menuStore.$state.color.result == menuStore.$state.color.nodes[7].result) {
        menuStore.$state.image.nodes[2].disabled = true;
        menuStore.$state.image.nodes[2].result = OffNodesEnum.result;
        menuStore.$state.image.nodes[2].selected = OffNodesEnum.selected;
    }
};


export function setDynamicContrastValue() {
    menuStore.$state.image.nodes[2].result = OffNodesEnum.result;
    menuStore.$state.image.nodes[2].selected = OffNodesEnum.selected;
}

export function resetColorRGB() {
    const originalColorResult = JSON.parse(JSON.stringify(ColorNodesEnum.nodes.find(n => n.result == menuStore.$state.color.result)));
    const colorResult = menuStore.$state.color.nodes.find(n => n.result == menuStore.$state.color.result);
    
    colorResult.rgb = JSON.parse(JSON.stringify(originalColorResult.rgb));
    setBrightnessValue();
};

export function resetInputValue() {
    menuStore.$state.input.nodes = JSON.parse(JSON.stringify(InputNodesEnum.nodes));
};