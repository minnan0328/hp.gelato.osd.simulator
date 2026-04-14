import { useMenuStore } from '@/stores/index';
import { computed } from 'vue';
import { monitorScreenResult, gamingResult } from '@/service/monitor-state-result';
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
import CrosshairNodes from '@/models/class/gaming/_crosshair/crosshair-nodes';
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
const RGBGainAdjustNodesEnum = new RGBGainAdjustNodes();
const HPEnhancePlusNodesEnum = new HPEnhancePlusNodes();
// input nodes
const InputNodesEnum = new InputNodes();
// gaming nodes
const MPRTNodesEnum = new MPRTNodes();
const AmdFreeSyncNodesEnum = new AmdFreeSyncNodes();
const CrosshairNodesEnum = new CrosshairNodes();
// image nodes
const DynamicContrastNodesEnum = new DynamicContrastNodes();
const BrightnessNodesEnum = new BrightnessNodes();
const ContrastNodesEnum = new ContrastNodes();

// menu nodes
const LanguageNodesEnum = new LanguageNodes();

// managements nodes
const DiagnosticPatternsNodesEnum = new DiagnosticPatternsNodes();
const AccessibilityNodesEnum = new AccessibilityNodes();

// 使用 computed 即時從 store 取得，避免 reset 後引用過期
const brightnessNode = computed(() => menuStore.$state.image.nodes.find(n => n.key == BrightnessNodesEnum.key));
const contrastNode = computed(() => menuStore.$state.image.nodes.find(n => n.key == ContrastNodesEnum.key));
const RGBGainAdjustNode = computed(() => menuStore.$state.color.nodes.find(n => n.key == RGBGainAdjustNodesEnum.key));
const dynamicContrastNode = computed(() => menuStore.$state.image.nodes.find(n => n.key == DynamicContrastNodesEnum.key));
const MPRTNode = computed(() => menuStore.$state.gaming.nodes.find(n => n.key == MPRTNodesEnum.key));
const AMDFreeSyncNode = computed(() => menuStore.$state.gaming.nodes.find(n => n.key == AmdFreeSyncNodesEnum.key));
const languageNode = computed(() => menuStore.$state.menu.nodes.find(n => n.key == LanguageNodesEnum.key));
const diagnosticPatternsNode = computed(() => menuStore.$state.management.nodes.find(n => n.key == DiagnosticPatternsNodesEnum.key));
const accessibilityNode = computed(() => menuStore.$state.management.nodes.find(n => n.key == AccessibilityNodesEnum.key));
const crosshair = computed(() => menuStore.$state.gaming.nodes.find(n => n.key == CrosshairNodesEnum.key));


export function setBrightnessValue() {
    menuStore.$state.information.nodes[2].selected = menuStore.$state.color.selected;
    menuStore.$state.information.nodes[2].result = menuStore.$state.color.result;
    const colorResult = menuStore.$state.color.nodes.find(n => n.result == menuStore.$state.color.result);
    
    brightnessNode.value.result = colorResult.brightness;
    brightnessNode.value.nodes[0].result = colorResult.brightness;
    brightnessNode.value.selected = colorResult.brightness;
    brightnessNode.value.nodes[0].selected = colorResult.brightness;

    contrastNode.value.result = colorResult.contrast;
    contrastNode.value.nodes[0].result = colorResult.contrast;
    contrastNode.value.selected = colorResult.contrast;
    contrastNode.value.nodes[0].selected = colorResult.contrast;

    RGBGainAdjustNode.value.nodes![0].result = colorResult.rgb.r;
    RGBGainAdjustNode.value.nodes![1].result = colorResult.rgb.g;
    RGBGainAdjustNode.value.nodes![2].result = colorResult.rgb.b;
    RGBGainAdjustNode.value.nodes![0].selected = colorResult.rgb.r;
    RGBGainAdjustNode.value.nodes![1].selected = colorResult.rgb.g;
    RGBGainAdjustNode.value.nodes![2].selected = colorResult.rgb.b;

    // 當 color 是 HP Enhance+ 時 dynamic contrast 為 disable 並且關閉
    if(colorResult?.key == HPEnhancePlusNodesEnum.key) {
        setDynamicContrastValue();
    }
};

export function setDynamicContrastValue() {
    const colorResult = menuStore.$state.color.nodes.find(n => n.result == menuStore.$state.color.result);
    dynamicContrastNode.value.result = OffNodesEnum.result;
    dynamicContrastNode.value.selected = OffNodesEnum.selected;

    // 當 color 是 HP Enhance+ 時 dynamic contrast 為 disable 並且關閉
    if(colorResult?.key == HPEnhancePlusNodesEnum.key) {
        dynamicContrastNode.value.disabled = true;
    }

}

export function resetBrightnessContrastValue() {
    const originalColorNodes = ColorNodesEnum.nodes.find(n => n.result == menuStore.$state.color.result);
    const colorResult = menuStore.$state.color.nodes.find(n => n.result == menuStore.$state.color.result);

    if (!originalColorNodes || !colorResult) return;

    brightnessNode.value.result = JSON.parse(JSON.stringify(originalColorNodes.brightness));
    brightnessNode.value.nodes[0].result = JSON.parse(JSON.stringify(originalColorNodes.brightness));
    brightnessNode.value.selected = JSON.parse(JSON.stringify(originalColorNodes.brightness));
    brightnessNode.value.nodes[0].selected = JSON.parse(JSON.stringify(originalColorNodes.brightness));

    contrastNode.value.selected = JSON.parse(JSON.stringify(originalColorNodes.contrast));
    contrastNode.value.nodes[0].selected = JSON.parse(JSON.stringify(originalColorNodes.contrast));
    contrastNode.value.result = JSON.parse(JSON.stringify(originalColorNodes.contrast));
    contrastNode.value.nodes[0].result = JSON.parse(JSON.stringify(originalColorNodes.contrast));

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
    if(AMDFreeSyncNode.value && dynamicContrastNode.value && MPRTNode.value) {
        // 當 AMD FreeSync 或 Dynamic Contrast 為 On 時 MPRT 為 disable，反之則為 enable
        MPRTNode.value.disabled = (AMDFreeSyncNode.value.result == OnNodesEnum.result || dynamicContrastNode.value.result == OnNodesEnum.result) ? true : false;
    }
}

export function restoreSpecialPresets() {
    // 恢復英文介面
    languageNode.value.selected = 'English';
    languageNode.value.result = 'English';
    languageNode.value.page = 1;
    
    // 取消無障礙模式
    accessibilityNode.value.selected = OffNodesEnum.selected;
    accessibilityNode.value.result = OffNodesEnum.result;

    gamingResult.value.crosshairLocation.start = crosshair.value.result == OnNodesEnum.result ? true : false;
    crosshair.value.result == OnNodesEnum.result ? gamingResult.value.crosshairLocation.enabledChildNodes() : gamingResult.value.crosshairLocation.disabledChildNodes();

    // 關閉診斷模式
    diagnosticPatternsNode.value.selected = DiagnosticPatternsNodesEnum.nodes[0].selected;
    diagnosticPatternsNode.value.result = DiagnosticPatternsNodesEnum.nodes[0].result;
    monitorScreenResult.value.diagnosticPatterns.close();
}
