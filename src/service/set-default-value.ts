import { useMenuStore } from '@/stores/index';
import { monitorScreenResult } from '@/service/monitor-state-result';
// utilities nodes
import { OnNodes, OffNodes } from '@/models/class/_utilities';
// color nodes
import ColorNodes from '@/models/class/color/color';
import RGBGainAdjustNodes from '@/models/class/color/_RGB-gain-adjust-nodes';
import HPEnhancePlusNodes from '@/models/class/color/_HP-enhance-plus-nodes';
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
import type { Nodes } from '@/types';

const menuStore = useMenuStore();
// utilities nodes
const OnNodesEnum = new OnNodes();
const OffNodesEnum = new OffNodes();
// color nodes
const ColorNodesEnum = new ColorNodes();
const RGBGainAdjustNodesEnum = new RGBGainAdjustNodes();
const HPEnhancePlusNodesEnum = new HPEnhancePlusNodes();
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

// 每次呼叫時即時從 store 取得，避免 reset 後引用過期
function getBrightnessNode() { return menuStore.$state.image.nodes.find(n => n.key == BrightnessNodesEnum.key); }
function getContrastNode() { return menuStore.$state.image.nodes.find(n => n.key == ContrastNodesEnum.key); }
function getRGBGainAdjustNode() { return menuStore.$state.color.nodes.find(n => n.key == RGBGainAdjustNodesEnum.key); }
function getDynamicContrastNode() { return menuStore.$state.image.nodes.find(n => n.key == DynamicContrastNodesEnum.key); }
function getMPRTNode() { return menuStore.$state.gaming.nodes.find(n => n.key == MPRTNodesEnum.key); }
function getAMDFreeSyncNode() { return menuStore.$state.gaming.nodes.find(n => n.key == AmdFreeSyncNodesEnum.key); }
function getLanguageNode() { return menuStore.$state.menu.nodes.find(n => n.key == LanguageNodesEnum.key); }
function getDiagnosticPatternsNode() { return menuStore.$state.management.nodes.find(n => n.key == DiagnosticPatternsNodesEnum.key); }
function getAccessibilityNode() { return menuStore.$state.management.nodes.find(n => n.key == AccessibilityNodesEnum.key); }


export function setBrightnessValue() {
    menuStore.$state.information.nodes[2].selected = menuStore.$state.color.selected;
    menuStore.$state.information.nodes[2].result = menuStore.$state.color.result;
    const colorResult = menuStore.$state.color.nodes.find(n => n.result == menuStore.$state.color.result);
    
    const brightnessNode = getBrightnessNode();
    const contrastNode = getContrastNode();
    const RGBGainAdjustNode = getRGBGainAdjustNode();

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

    // 當 color 是 HP Enhance+ 時 dynamic contrast 為 disable 並且關閉
    if(colorResult?.key == HPEnhancePlusNodesEnum.key) {
        setDynamicContrastValue();
    }
};

export function setDynamicContrastValue() {
    const colorResult = menuStore.$state.color.nodes.find(n => n.result == menuStore.$state.color.result);
    const dynamicContrastNode = getDynamicContrastNode();
    dynamicContrastNode.result = OffNodesEnum.result;
    dynamicContrastNode.selected = OffNodesEnum.selected;

    // 當 color 是 HP Enhance+ 時 dynamic contrast 為 disable 並且關閉
    if(colorResult?.key == HPEnhancePlusNodesEnum.key) {
        dynamicContrastNode.disabled = true;
    }

}

export function resetBrightnessContrastValue() {
    const originalColorNodes = ColorNodesEnum.nodes.find(n => n.result == menuStore.$state.color.result);
    const colorResult = menuStore.$state.color.nodes.find(n => n.result == menuStore.$state.color.result);

    if (!originalColorNodes || !colorResult) return;

    const brightnessNode = getBrightnessNode();
    const contrastNode = getContrastNode();

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

export function resetColor() {
    // 先從 store 中找到目前選擇的 color 節點
    const colorResult = menuStore.$state.color.nodes.find(n => n.result == menuStore.$state.color.result);
    if (!colorResult) return;

    // 用 key 匹配預設值（因為 HP Enhance+ 子選項會改變 result，無法直接用 result 匹配）
    const originalColorResult = ColorNodesEnum.nodes.find(n => n.key == colorResult.key);
    if (!originalColorResult) return;

    colorResult.rgb = JSON.parse(JSON.stringify(originalColorResult.rgb));
    colorResult.result = JSON.parse(JSON.stringify(originalColorResult.result));
    colorResult.selected = JSON.parse(JSON.stringify(originalColorResult.selected));
    colorResult.brightness = JSON.parse(JSON.stringify(originalColorResult.brightness));
    colorResult.contrast = JSON.parse(JSON.stringify(originalColorResult.contrast));

    // 重置子節點（例如 HP Enhance+ 的 Low/Medium/High）
    if (originalColorResult.nodes) {
        colorResult.nodes = JSON.parse(JSON.stringify(originalColorResult.nodes));
    }

    // 同步更新頂層 color 的 result/selected
    menuStore.$state.color.result = colorResult.result;
    menuStore.$state.color.selected = colorResult.selected;

    // 同步亮度、對比、RGB 到對應的顯示節點
    setBrightnessValue();
};


export function resetInputValue() {
    menuStore.$state.input.nodes = JSON.parse(JSON.stringify(InputNodesEnum.nodes));
}

export function setGamingNodesStatus() {
    const AMDFreeSyncNode = getAMDFreeSyncNode();
    const dynamicContrastNode = getDynamicContrastNode();
    const MPRTNode = getMPRTNode();
    if(AMDFreeSyncNode && dynamicContrastNode && MPRTNode) {
        // 當 AMD FreeSync 或 Dynamic Contrast 為 On 時 MPRT 為 disable，反之則為 enable
        MPRTNode.disabled = (AMDFreeSyncNode.result == OnNodesEnum.result || dynamicContrastNode.result == OnNodesEnum.result) ? true : false;
    }
}

export function restoreSpecialPresets() {
    const languageNode = getLanguageNode();
    const accessibilityNode = getAccessibilityNode();
    const diagnosticPatternsNode = getDiagnosticPatternsNode();

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
