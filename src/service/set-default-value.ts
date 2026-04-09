import { useMenuStore } from '@/stores/index';
import { monitorScreenResult } from '@/service/monitor-state-result';
// utilities nodes
import { OnNodes, OffNodes } from '@/models/class/_utilities';
// color nodes
import ColorNodes from '@/models/class/color/color';
import RGBGainAdjust from '@/models/class/color//_RGB-gain-adjust-nodes';
// input nodes
import InputNodes from '@/models/class/input/input';
// gaming nodes
import MPRTNodes from '@/models/class/gaming/_mprt-nodes';
import AmdFreeSyncNodes from '@/models/class/gaming/_amd-free-sync-nodes';
// image nodes
import DynamicContrastNodes from '@/models/class/image/_dynamic-contrast-nodes';
import BrightnessNodes from '@/models/class/image/_brightness-nodes';
import ContrastNodes from '@/models/class/image/_contrast-nodes';

// menu nodes
import LanguageNodes from '@/models/class/menu/_language-nodes';

// managements nodes
import DiagnosticPatternsNodes from '@/models/class/management/_diagnostic-patterns-nodes';
import AccessibilityNodes from '@/models/class/management/_accessibility-nodes';

const menuStore = useMenuStore();
// utilities nodes
const OnNodesEnum = new OnNodes();
const OffNodesEnum = new OffNodes();
// color nodes
const ColorNodesEnum = new ColorNodes();
const RGBGainAdjustNodesEnum = new RGBGainAdjust();
// input nodes
const InputNodesEnum = new InputNodes();
// gaming nodes
const MPRTNodesEnum = new MPRTNodes();
const AmdFreeSyncNodesEnum = new AmdFreeSyncNodes();
// image nodes
const DynamicContrastNodesEnum = new DynamicContrastNodes();
const BrightnessNodesEnum = new BrightnessNodes();
const ContrastNodesEnum = new ContrastNodes();

// menu nodes
const LanguageNodesEnum = new LanguageNodes();

// managements nodes
const DiagnosticPatternsNodesEnum = new DiagnosticPatternsNodes();
const AccessibilityNodesEnum = new AccessibilityNodes();

const brightnessNode = menuStore.$state.image.nodes.find(n => n.key == BrightnessNodesEnum.key);
const contrastNode = menuStore.$state.image.nodes.find(n => n.key == ContrastNodesEnum.key);
const RGBGainAdjustNode = menuStore.$state.color.nodes.find(n => n.key == RGBGainAdjustNodesEnum.key);
const dynamicContrastNode = menuStore.$state.image.nodes.find(n => n.key == DynamicContrastNodesEnum.key);
const MPRTNode = menuStore.$state.gaming.nodes.find(n => n.key == MPRTNodesEnum.key);
const AMDFreeSyncNode = menuStore.$state.gaming.nodes.find(n => n.key == AmdFreeSyncNodesEnum.key);
const languageNode = menuStore.$state.menu.nodes.find(n => n.key == LanguageNodesEnum.key);
const diagnosticPatternsNode = menuStore.$state.management.nodes.find(n => n.key == DiagnosticPatternsNodesEnum.key);
const accessibilityNode = menuStore.$state.management.nodes.find(n => n.key == AccessibilityNodesEnum.key);


export function setBrightnessValue() {
    menuStore.$state.information.nodes[2].selected = menuStore.$state.color.selected;
    menuStore.$state.information.nodes[2].result = menuStore.$state.color.result;
    const colorResult = menuStore.$state.color.nodes.find(n => n.result == menuStore.$state.color.result);
    
    brightnessNode.result = colorResult.brightness;
    brightnessNode.nodes[0].result = colorResult.brightness;
    brightnessNode.selected = colorResult.brightness;
    brightnessNode.nodes[0].selected = colorResult.brightness;

    contrastNode.result = colorResult.contrast;
    contrastNode.nodes[0].result = colorResult.contrast;
    contrastNode.selected = colorResult.contrast;
    contrastNode.nodes[0].selected = colorResult.contrast;

    RGBGainAdjustNode.nodes![0].result = colorResult.rgb.r;
    RGBGainAdjustNode.nodes![1].result = colorResult.rgb.g;
    RGBGainAdjustNode.nodes![2].result = colorResult.rgb.b;
    RGBGainAdjustNode.nodes![0].selected = colorResult.rgb.r;
    RGBGainAdjustNode.nodes![1].selected = colorResult.rgb.g;
    RGBGainAdjustNode.nodes![2].selected = colorResult.rgb.b;

    // 當 color 是 HP Enhance+ 時 brightness 的 dynamic contrast 為 disable 並且關閉
    if(menuStore.$state.color.result == menuStore.$state.color.nodes[7].result) {
        dynamicContrastNode.disabled = true;
        dynamicContrastNode.result = OffNodesEnum.result;
        dynamicContrastNode.selected = OffNodesEnum.selected;
    }
};

export function setDynamicContrastValue() {
    dynamicContrastNode.result = OffNodesEnum.result;
    dynamicContrastNode.selected = OffNodesEnum.selected;
}

export function resetBrightnessContrastValue() {
    const originalColorNodes = ColorNodesEnum.nodes.find(n => n.result == menuStore.$state.color.result);
    const colorResult = menuStore.$state.color.nodes.find(n => n.result == menuStore.$state.color.result);

    brightnessNode.result = JSON.parse(JSON.stringify(originalColorNodes.brightness));
    brightnessNode.nodes[0].result = JSON.parse(JSON.stringify(originalColorNodes.brightness));
    brightnessNode.selected = JSON.parse(JSON.stringify(originalColorNodes.brightness));
    brightnessNode.nodes[0].selected = JSON.parse(JSON.stringify(originalColorNodes.brightness));

    contrastNode.selected = JSON.parse(JSON.stringify(originalColorNodes.contrast));
    contrastNode.nodes[0].selected = JSON.parse(JSON.stringify(originalColorNodes.contrast));
    contrastNode.result = JSON.parse(JSON.stringify(originalColorNodes.contrast));
    contrastNode.nodes[0].result = JSON.parse(JSON.stringify(originalColorNodes.contrast));


    colorResult.brightness = JSON.parse(JSON.stringify(originalColorNodes.brightness));
    colorResult.contrast = JSON.parse(JSON.stringify(originalColorNodes.contrast));
}

export function resetColorRGB() {
    const originalColorResult = JSON.parse(JSON.stringify(ColorNodesEnum.nodes.find(n => n.result == menuStore.$state.color.result)));
    const colorResult = menuStore.$state.color.nodes.find(n => n.result == menuStore.$state.color.result);
    
    colorResult.rgb = JSON.parse(JSON.stringify(originalColorResult.rgb));
    setBrightnessValue();
};

export function resetInputValue() {
    menuStore.$state.input.nodes = JSON.parse(JSON.stringify(InputNodesEnum.nodes));
}

export function setGamingNodesStatus() {
    if(AMDFreeSyncNode && dynamicContrastNode && MPRTNode) {
        // 當 AMD FreeSync 或 Dynamic Contrast 為 On 時 MPRT 為 disable，反之則為 enable
        MPRTNode.disabled = (AMDFreeSyncNode.result == OnNodesEnum.result || dynamicContrastNode.result == OnNodesEnum.result) ? true : false;
    }
}

export function restoreSpecialPresets() {
    
    // 恢復英文介面
    languageNode.selected = 'English';
    languageNode.result = 'English';
    languageNode.page = 1;
    
    // 取消無障礙模式
    accessibilityNode.selected = OffNodesEnum.selected;
    accessibilityNode.result = OffNodesEnum.result;

    // 關閉診斷模式
    diagnosticPatternsNode.selected = DiagnosticPatternsNodesEnum.nodes[0].selected;
    diagnosticPatternsNode.result = DiagnosticPatternsNodesEnum.nodes[0].result;
    monitorScreenResult.value.diagnosticPatterns.close();
}
