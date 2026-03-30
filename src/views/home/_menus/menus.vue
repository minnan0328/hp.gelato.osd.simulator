<template>
    <div class="menu-wrapper">
        <!-- 全部的選單 -->
        <div :class="['menus', { 'accessibility': menuStateResult.accessibility }]" v-if="openAllMenu && menuState.menuPanel">
            
            <headerSection></headerSection>

            <div class="body">
                <sidebarSection v-model:menus="menus" :menuState="menuState"></sidebarSection>
    
                <settingSection v-model:mainSectionNodes="displayCurrentNodes.mainSectionNodes"
                                v-model:secondarySectionNodes="displayCurrentNodes.secondarySectionNodes"
                                v-model:thirdSectionNodes="displayCurrentNodes.thirdSectionNodes"
                                v-model:currentPanelNumber="menuState.currentPanelNumber">
                </settingSection>
            </div>
    
            <footerSection></footerSection>
        </div>
        <!-- 全部的選單 -->

        <!-- 自訂的小選單 -->
        <assignMenu v-if="openAssignMenu && menuState.menuPanel"
                    v-model:mainSectionNodes="menuState.menuPanel"
                    v-model:secondarySectionNodes="menuState.secondPanel"
                    v-model:thirdSectionNodes="menuState.thirdPanel">
        </assignMenu>
        <!-- 自訂的小選單 -->
        
        <!-- 原廠設定改變的 conform -->
        <confirm v-if="confirmState.openConfirm"
                v-model:mainSectionNodes="confirmState.confirmMainPanel"
                v-model:secondarySectionNodes="confirmState.confirmSecondPanel"
                v-model:thirdSectionNodes="confirmState.confirmThirdPanel">
        </confirm>
        <!-- 原廠設定改變的 conform -->
        
        <!-- 控制選單按鈕 -->
        <menuControllerItem v-if="openControllerMenus" v-model:handleControllerButtonList="handleControllerButtonList!"></menuControllerItem>
        <!-- 控制選單按鈕 -->

        <!-- 控制選單按鈕-點擊範圍 -->
        <div class="menu-controller-btn">
            <template v-if="openMonitor && showScreen && !openControllerMenus">
                <button :class="['controller-btn controller-btn-center', { 'show-guide':  showMonitorStatus}]" @click="handlerControllerMenus"></button>
                <button :class="['controller-btn controller-btn-top', { 'show-guide':  showMonitorStatus}]" @click="handlerControllerMenus"></button>
                <button :class="['controller-btn controller-btn-bottom', { 'show-guide':  showMonitorStatus}]" @click="handlerControllerMenus"></button>
                <button :class="['controller-btn controller-btn-left', { 'show-guide':  showMonitorStatus}]" @click="handlerControllerMenus"></button>
                <button :class="['controller-btn controller-btn-right', { 'show-guide':  showMonitorStatus}]" @click="handlerControllerMenus"></button>
            </template>

            <template v-else v-for="(currentButton, index) in handleControllerButtonList">
                <button v-if="currentButton.type == 'Button'" :class="['controller-btn', {
                    'controller-btn-center': index == 0,
                    'controller-btn-top': index == 1,
                    'controller-btn-bottom': index == 2,
                    'controller-btn-left': index == 3,
                    'controller-btn-right': index == 4
                }]" @click="currentButton.event"></button>
                
                <button v-if="currentButton.type == 'eventButton'" :class="['controller-btn', {
                    'controller-btn-center': index == 0,
                    'controller-btn-top': index == 1,
                    'controller-btn-bottom': index == 2,
                    'controller-btn-left': index == 3,
                    'controller-btn-right': index == 4
                }]"
                    @mousedown="currentButton.event"
                    @mouseup="currentButton.stopEvent"
                    @mouseleave="currentButton.stopEvent"
                    @touchstart.passive="currentButton.event"
                    @touchend.passive="currentButton.stopEvent">
                </button>
            </template>
            <slot name="openMonitor"></slot> 
        </div>
        <!-- 控制選單按鈕-點擊範圍 -->
    </div>
</template>
<script lang="ts" setup>
import { ref, reactive, watch, computed, inject } from 'vue';
import { useMenuStore, MenusDefaultModel } from '@/stores/index';
import type { StoreState } from '@/stores/index';
import type { Nodes, ControllerButtonList, HomeEvent } from '@/types';
import { ModeType } from '@/types';
import { isEnableNode, minutesTolSeconds } from '@/service/service';
import { menuStateResult, monitorScreenResult, gamingResult } from '@/service/monitor-state-result';

// components
import headerSection from './_header-section.vue';
import sidebarSection from './_sidebar-section.vue';
import footerSection from './_footer-section.vue';
import settingSection from './_setting-section.vue';
import assignMenu from './_assign-menu.vue';
import confirm from '@/views/home/_confirm/confirm.vue';
import menuControllerItem from './_menu-controller-item.vue';
import iconSvg from './_components/_icon-svg.vue';
// svg
import iconAllMenu from '@/assets/icons/icon-menu.svg';
import iconBrightness from '@/assets/icons/icon-brightness.svg';
import iconColor from '@/assets/icons/icon-color.svg';
import iconInput from '@/assets/icons/icon-input.svg';
import iconNext from '@/assets/icons/icon-next.svg';
import iconNextRight from '@/assets/icons/icon-next-right.svg';
import iconNextLeft from '@/assets/icons/icon-next-left.svg';
import iconArrowBottom from '@/assets/icons/icon-arrow-bottom.svg';
import iconArrowUp from '@/assets/icons/icon-arrow-up.svg';
import iconArrowLeft from '@/assets/icons/icon-arrow-left.svg';
import iconArrowRight from '@/assets/icons/icon-arrow-right.svg';
import iconClose from '@/assets/icons/icon-close.svg';
import iconCheck from '@/assets/icons/icon-check.svg';
import iconSubtract from '@/assets/icons/icon-subtract.svg';
import iconAdd from '@/assets/icons/icon-add.svg';
import iconPrevious from '@/assets/icons/icon-previous.svg';
import iconInformation from '@/assets/icons/icon-information.svg';
import iconClock from '@/assets/icons/icon-clock.svg';
import iconCrosshair from '@/assets/icons/icon-crosshair.svg';
import iconFps from '@/assets/icons/icon-fps.svg';

import PowerConfirmChangeNodes from '@/models/class/power/message/confirm-change';

import BrightnessNodes from '@/models/class/image/_brightness-nodes';
import ContrastNodes from '@/models/class/image/_contrast-nodes';
import VideoLevelNodes from '@/models/class/image/_video-level-nodes';

import ColorNodes from '@/models/class/color/color';
import RGBGainAdjustNodes from '@/models/class/color/_RGB-gain-adjust-nodes';

import MenuPositionNodes from '@/models/class/menu/_menu-position-nodes';
import LanguageNodes from '@/models/class/menu/_language-nodes';

import FactoryResetNodes from '@/models/class/management/_factory-reset-nodes';
import AccessibilityNodes from '@/models/class/management/_accessibility-nodes';
import DiagnosticPatternsNodes from '@/models/class/management/_diagnostic-patterns-nodes';

import AutoSleepModeNodes from '@/models/class/power/_auto-sleep-mode-nodes';

import InputNodes from '@/models/class/input/input';

import AMDFreeSyncNodes from '@/models/class/gaming/_amd-free-sync-nodes';
import RefreshRateNodes from '@/models/class/gaming/_refresh-rate-nodes';
import CrosshairNodes from '@/models/class/gaming/_crosshair/crosshair-nodes';
import CrosshairLocationNodes from '@/models/class/gaming/_crosshair/_location-nodes';

import MessageTimersNodes from '@/models/class/gaming/_message-timers/message-timers-nodes';
import SpeedrunTimerNodes from '@/models/class/gaming/_message-timers/_speedrun-timer-nodes';
import CountdownTimerNodes from '@/models/class/gaming/_message-timers/_countdown-timer-nodes';
import StartStopNodes from '@/models/class/gaming/_message-timers/_start-stop-nodes';
import ResetTimerNodes from '@/models/class/gaming/_message-timers/_reset-timer-nodes';

import MultiMonitorAlignNodes from '@/models/class/gaming/_multi-monitor-align-nodes';

import {
    DefaultNodes, BackNodes, ResetNodes, ExitNodes,
    OnNodes, OffNodes, YesNodes, NoNodes,
    NextPageButtonsNodes, PreviousPageButtonsNodes
} from '@/models/class/_utilities';

import { 
    AssignBrightnessNodes,
    AssignColorNodes, AssignDisplayInformationNodes, AssignNextActiveInputNodes,
    AssignMessageTimersNodes, AssignRefreshRateNodes, AssignCrosshairNodes,
    AssignEmptyNodes
} from '@/models/class/menu/_assign-buttons/_utilities';

import { setBrightnessValue, setDynamicContrastValue, resetColorRGB, resetInputValue } from '@/service/set-default-value';

const MenusDefaultEnum = new MenusDefaultModel();

const BrightnessNodesEnum = new BrightnessNodes();
const ContrastNodesEnum = new ContrastNodes();
const VideoLevelNodesEnum = new VideoLevelNodes();

const ColorNodesEnum = new ColorNodes();
const RGBGainAdjustNodesEnum = new RGBGainAdjustNodes();

const MenuPositionNodesEnum = new MenuPositionNodes();
const LanguageNodesEnum = new LanguageNodes();

const FactoryResetNodesEnum = new FactoryResetNodes();
const AccessibilityNodesEnum = new AccessibilityNodes();
const DiagnosticPatternsNodesEnum = new DiagnosticPatternsNodes();

const AutoSleepModeNodesEnum = new AutoSleepModeNodes();

const InputNodesEnum = new InputNodes();

const AMDFreeSyncNodesEnum = new AMDFreeSyncNodes();
const RefreshRateNodesEnum = new RefreshRateNodes();
const CrosshairNodesEnum = new CrosshairNodes();
const CrosshairLocationNodesEnum = new CrosshairLocationNodes();

const MessageTimersNodesEnum = new MessageTimersNodes();
const SpeedrunTimerNodesEnum = new SpeedrunTimerNodes();
const CountdownTimerNodesEnum = new CountdownTimerNodes();
const StartStopNodesEnum = new StartStopNodes();
const ResetTimerNodesEnum = new ResetTimerNodes();

const MultiMonitorAlignNodesEnum = new MultiMonitorAlignNodes();

const DefaultNodesEnum = new DefaultNodes();
const BackNodesEnum = new BackNodes();
const ResetNodesEnum = new ResetNodes();
const ExitNodesEnum = new ExitNodes();
const OnNodesEnum = new OnNodes();
const OffNodesEnum = new OffNodes();
const YesNodesEnum = new YesNodes();
const NoNodesEnum = new NoNodes();
const NextPageButtonsNodesEnum = new NextPageButtonsNodes();
const PreviousPageButtonsNodesEnum = new PreviousPageButtonsNodes();

const AssignBrightnessNodesEnum = new AssignBrightnessNodes();
const AssignColorNodesEnum = new AssignColorNodes();
const AssignDisplayInformationNodesEnum = new AssignDisplayInformationNodes();
const AssignNextActiveInputNodesEnum = new AssignNextActiveInputNodes();
const AssignMessageTimersNodesEnum = new AssignMessageTimersNodes();
const AssignRefreshRateNodesEnum = new AssignRefreshRateNodes();
const AssignCrosshairNodesEnum = new AssignCrosshairNodes();
const AssignEmptyNodesEnum = new AssignEmptyNodes();

const PowerConfirmChangeNodesEnum = new PowerConfirmChangeNodes();

const menuStore = useMenuStore();

const homeEvent = inject("homeEvent") as HomeEvent;

const props = defineProps({
    openMonitor: { type: Boolean, default: false },
    startUpFinish: { type: Boolean, default: false },
    showScreen: { type: Boolean, default: false },
    showMonitorStatus: { type: Boolean, default: false },
    showGamingSettingText: { type: Boolean, default: false },
    showGamingCrosshair: { type: Boolean, default: false },
    enabledLanguageDirection: { type: Boolean, default: false }
});

const emit = defineEmits([
    'update:showScreen',
    'update:showMonitorStatus',
    'update:startUpFinish',
    'update:showGamingSettingText',
    'update:showGamingCrosshair',
    'update:enabledLanguageDirection'
]);

const menuTimeOutIntervalId = ref<number | null>(null);

const openControllerMenus = ref(false);
const openAllMenu = ref(false);
const openAssignMenu = ref(false);
const factorySettings = ref(true);

const menus = computed(() => {
    return {
        ...DefaultNodesEnum,
        key: "menu",
        size: 9,
        page: 1,
        mode: ModeType.button,
        nodes: [
            menuStore.$state.gaming,
            menuStore.$state.image,
            menuStore.$state.color,
            menuStore.$state.input,
            menuStore.$state.power,
            menuStore.$state.menu,
            menuStore.$state.management,
            menuStore.$state.information,
            menuStore.$state.exit
        ]
    }
});

// selected menuState and node
const menuState = reactive<{
    selectedMenus: string | null,
    menuPanel: Nodes | null,
    secondPanel: Nodes | null,
    thirdPanel: Nodes | null,
    fourthPanel: Nodes | null,
    temporaryStorage: Nodes | null, // node 的 livePreview 為 true 時才使用，紀錄上一次的設定值
    currentPanelNumber: number,
    menuPanelIndex: number,
    secondPanelIndex: number,
    thirdPanelIndex: number,
    fourthPanelIndex: number
    assignPanelOrderIndex: number
}>({
    selectedMenus: null,
    menuPanel: null,
    secondPanel: null,
    thirdPanel: null,
    fourthPanel: null,
    temporaryStorage: null,
    currentPanelNumber: 0,
    menuPanelIndex: 0,
    secondPanelIndex: 0,
    thirdPanelIndex: 0,
    fourthPanelIndex: 0,
    assignPanelOrderIndex: 0
});

const displayCurrentNodes = computed(() => {
    // 當選擇第四層時，將原本畫面第二層改為第三層，原本第三層改為第四層
    if(menuState.thirdPanel && menuState.thirdPanel.nodes && menuState.fourthPanel) {
        return {
            mainSectionNodes: menuState.secondPanel,
            secondarySectionNodes: menuState.thirdPanel,
            thirdSectionNodes: menuState.fourthPanel,
            currentPanelNumber: menuState.currentPanelNumber
        }
    } else {
        // 當不是第四層時，顯示第二層級第三層畫面
        return {
            mainSectionNodes: menuState.menuPanel,
            secondarySectionNodes: menuState.secondPanel,
            thirdSectionNodes: menuState.thirdPanel,
            currentPanelNumber: menuState.currentPanelNumber
        }
    }
});

// 自訂選單功能表
const assignMenus = computed(() => {
    return {
        [AssignBrightnessNodesEnum.key]: {
            key: AssignBrightnessNodesEnum.key,
            icon: iconBrightness,
            node: menuStore.$state.image.nodes[0]
        }, 
        [AssignColorNodesEnum.key]: {
            key: AssignColorNodesEnum.key,
            icon: iconColor,
            node: menuStore.$state.color
        },
        [AssignDisplayInformationNodesEnum.key]: {
            key: AssignDisplayInformationNodesEnum.key,
            icon: iconInformation,
            node: menuStore.$state.information
        },
        [AssignNextActiveInputNodesEnum.key]: {
            key: AssignNextActiveInputNodesEnum.key,
            icon: iconInput,
            node: menuStore.$state.input
        },
        [AssignMessageTimersNodesEnum.key]: {
            key: AssignMessageTimersNodesEnum.key,
            icon: iconClock,
            node: menuStore.$state.gaming.nodes[4]
        },
        [AssignRefreshRateNodesEnum.key]: {
            key: AssignRefreshRateNodesEnum.key,
            icon: iconFps,
            node: menuStore.$state.gaming.nodes[2]
        },
        [AssignCrosshairNodesEnum.key]: {
            key: AssignCrosshairNodesEnum.key,
            icon: iconCrosshair,
            node: menuStore.$state.gaming.nodes[3]
        },
        [AssignEmptyNodesEnum.key]: {
            key: AssignEmptyNodesEnum.key,
            icon: null,
            node: null
        }
    }
});

// 小選單項目順序
const assignPanelOrder = reactive([
    AssignBrightnessNodesEnum.key, AssignColorNodesEnum.key,
    AssignDisplayInformationNodesEnum.key, AssignNextActiveInputNodesEnum.key,
    AssignMessageTimersNodesEnum.key, AssignRefreshRateNodesEnum.key, AssignCrosshairNodesEnum.key
]);

// power confirm message menuState
const confirmState = reactive({
    openConfirm: false,
    confirmMainPanel: null as Nodes | null,
    confirmSecondPanel: null as Nodes | null,
    confirmThirdPanel: null as Nodes | null,
    confirmThirdPanelIndex: 0
});

// 是否開啟OSD Message，當是原廠設定時，且 OSD Message 是啟用時
const isOpenOSDMessage = computed(() => factorySettings.value && menuStore.$state.menu.nodes[5].result.includes(menuStore.$state.menu.nodes[5].nodes[2].result));

// 當關閉螢幕時，關閉所有狀態
watch(() => props.openMonitor, (newVal, oldVal) => {
    if(newVal == false) {
        handlerClose();
    };
});

// 開啟控制選單
function handlerControllerMenus() {
    if(props.openMonitor && props.showMonitorStatus && props.startUpFinish == false) {
        emit("update:showMonitorStatus", false);
        emit("update:startUpFinish", true);
    }
    
    if(props.openMonitor && props.startUpFinish) {
        emit("update:showGamingSettingText", false);
        emit("update:showGamingCrosshair", false);
        openControllerMenus.value = true;
    };
};

// 開啟主要選單
function handlerOpenAllMenu() {
    openAllMenu.value = true;
    openAssignMenu.value = false;
    menuState.selectedMenus = "openAllMenu";
    selectedMenuPanel(menus.value.nodes[0]!);

    handlerMenuTimeout();
};

// 開啟自訂選單按鈕
function handleAssignButton(key: string) {
    if(key == AssignEmptyNodesEnum.key) {
        return;
    }

    menuState.menuPanel = null;
    menuState.secondPanel = null;
    menuState.thirdPanel = null;
    menuState.fourthPanel = null;
    menuState.menuPanelIndex = 0;
    menuState.secondPanelIndex = 0;
    menuState.thirdPanelIndex = 0;
    menuState.fourthPanelIndex = 0;
    menuState.assignPanelOrderIndex = assignPanelOrder.findIndex(a => a == key);
    openAssignMenu.value = true;
    menuState.selectedMenus = "openAssignMenu";
    selectedMenuPanel(assignMenus.value[key]!.node as Nodes);
    handlerNextPanel();

    handlerMenuTimeout();
};

/* 設定選擇的 menu */
function selectedMenuPanel(nodes: Nodes) {
    menuState.menuPanel = menuState.menuPanel ? menuState.menuPanel : nodes;
    menuState.currentPanelNumber = menuState.currentPanelNumber > 0 ? menuState.currentPanelNumber : 1;

    if(openAssignMenu.value && menuState.currentPanelNumber > 1) {
        handlerNextPanel();
    }
};
/* 設定選擇的 menu */

/* 控制選單按鈕組合列表 */
// 是否啟用選單控制按鈕
const isCrosshairLocationNodes = computed(() => gamingResult.value.crosshairLocation.enabled && gamingResult.value.crosshairLocation.start && !openAllMenu.value && !openAssignMenu.value);
const isMenuControllerButton = computed(() => openControllerMenus.value && !openAllMenu.value && !openAssignMenu.value && !confirmState.openConfirm && !isCrosshairLocationNodes.value);

const MenuControllerTypes: Record<string, ControllerButtonList> = reactive({
    empty: { image: null, event: () => {}, stopEvent: () => {}, type: "Button" },
    close: { image: iconClose, event: handlerClose, stopEvent: () => {}, type: "Button" },
    checkClose: { image: iconCheck, event: handlerClose, stopEvent: () => {}, type: "Button" },
    checkSave: { image: iconCheck, event: handlerSave , stopEvent: () => {}, type: "Button" },
    nextSave: { image: iconNext, event: handlerSave , stopEvent: () => {}, type: "Button" },
    checkNextPanel: { image: iconCheck, event: handlerNextPanel, stopEvent: () => {}, type: "Button" },
    arrowBottom: { image: iconArrowBottom, event: handlerNavigationDown, stopEvent: stopNavigationTrigger, type: "eventButton" },
    arrowUp: { image: iconArrowUp, event: handlerNavigationUp, stopEvent: stopNavigationTrigger, type: "eventButton" },
    arrowRight: { image: iconArrowRight, event: () => handlerNavigation('up'), stopEvent: () => {}, type: "Button" },
    arrowLeft: { image: iconArrowLeft, event: () => handlerNavigation('down'), stopEvent: () => {}, type: "Button" },
    previous: { image: iconPrevious, event: handlePrevious, stopEvent: () => {}, type: "Button" },
    previousSave: { image: iconPrevious, event: handlerSave, stopEvent: () => {}, type: "Button" },
    checkNext: { image: iconCheck, event: handlerNextPanel, stopEvent: () => {}, type: "Button" },
    next: { image: iconNext, event: handlerNextPanel, stopEvent: () => {}, type: "Button" },
    nextRight: { image: iconNextRight, event: () => handlerNavigation('down'), stopEvent: () => {}, type: "Button" },
    nextAssignRight: { image: iconNextRight, event: handlerAssignNextPanel, stopEvent: () => {}, type: "Button" },
    nextAssignLeft: { image: iconNextLeft, event: handlerAssignPreviousPanel, stopEvent: () => {}, type: "Button" },
    rangeSubtract: { image: iconSubtract, event: handlerRangeSubtract, stopEvent: stopRangeValueTrigger, type: "eventButton" },
    rangeAdd: { image: iconAdd, event: handlerRangeAdd, stopEvent: stopRangeValueTrigger, type: "eventButton" },
    confirmClose: { image: iconClose, event: handlerCloseConfirmAction, stopEvent: () => {}, type: "Button" },
    positionUp: { image: iconArrowUp, event: handlerCrosshairSubtractUp, stopEvent: stopCrosshairPosition, type: "eventButton" },
    positionDown: { image: iconArrowBottom, event: handlerCrosshairAddDown, stopEvent: stopCrosshairPosition, type: "eventButton" },
    positionLeft: { image: iconArrowLeft, event: handlerCrosshairSubtractLeft, stopEvent: stopCrosshairPosition, type: "eventButton" },
    positionRight: { image: iconArrowRight, event: handlerCrosshairAddRight, stopEvent: stopCrosshairPosition, type: "eventButton" },
});

// 取得自訂選單項目
const getAssignButton = computed(() => {
    return [
        // AssignButton1 default is AssignBrightness
        assignMenus.value[`Assign${(menuStore.$state.menu.nodes[6].nodes![0].result as string).replace(/\s/g, '')}`],
        // AssignButton2 default is AssignColor
        assignMenus.value[`Assign${(menuStore.$state.menu.nodes[6].nodes![1].result as string).replace(/\s/g, '')}`],
        // AssignButton3 default is AssignNextActiveInput
        assignMenus.value[`Assign${(menuStore.$state.menu.nodes[6].nodes![2].result as string).replace(/\s/g, '')}`],
        // AssignButton4 default is AssignDisplayInformation
        assignMenus.value[`Assign${(menuStore.$state.menu.nodes[6].nodes![3].result as string).replace(/\s/g, '')}`]
    ]
});

const confirmButtonList:ControllerButtonList[] = [ MenuControllerTypes.checkSave!, MenuControllerTypes.confirmClose!, MenuControllerTypes.empty!, MenuControllerTypes.arrowLeft!, MenuControllerTypes.arrowRight!  ];

const handleControllerButtonList = computed<ControllerButtonList[] | null>(() => {
    if(!props.openMonitor) return[];


    if(isMenuControllerButton.value) {
        // 開啟螢幕及開啟全部選單列表時候的組合
        return [
            // center
            { image: iconAllMenu, event: handlerOpenAllMenu, stopEvent: () => {}, type: "Button" },
            // top
            { image: getAssignButton.value[2]!.icon, event: () => handleAssignButton(getAssignButton.value[2]!.key), stopEvent: () => {}, type: "Button"},
            // bottom
            { image: getAssignButton.value[3]!.icon, event: () => handleAssignButton(getAssignButton.value[3]!.key), stopEvent: () => {}, type: "Button" },
            // left
            { image: getAssignButton.value[0]!.icon, event:() => handleAssignButton(getAssignButton.value[0]!.key), stopEvent: () => {}, type: "Button" },
            // right
            { image: getAssignButton.value[1]!.icon, event: () => handleAssignButton(getAssignButton.value[1]!.key), stopEvent: () => {}, type: "Button" }
        ]
    } 
    
    if (openAllMenu.value) {
        return createMenuButtonList();
    }
    
    if(openAssignMenu.value && menuState.menuPanel) {
        return handlerModeControllerButtonList(menuState.secondPanel!, menuState.menuPanel);
    } 
    
    if(confirmState.openConfirm && confirmState.confirmMainPanel) {
        return confirmButtonList;
    }

    return createMenuButtonList();
});

function createMenuButtonList(): ControllerButtonList[] {
    if (!menuState.secondPanel) {
        return createFirstLayerButtonList();
    }

    if (menuState.thirdPanel) {
        return menuState.fourthPanel
            ? handlerModeControllerButtonList(menuState.fourthPanel, menuState.thirdPanel)
            : handlerModeControllerButtonList(menuState.thirdPanel, menuState.secondPanel);
    }

    return handlerModeControllerButtonList(menuState.secondPanel, menuState.menuPanel!);
}

function createFirstLayerButtonList(): ControllerButtonList[] {
    // 順序為 center, bottom, top, left, right
    const mode = menuState.menuPanel?.mode as string;
    
    const buttonMap: Record<string, ControllerButtonList[]> = {
        [ModeType.info]: [MenuControllerTypes.empty!, MenuControllerTypes.arrowUp!, MenuControllerTypes.arrowBottom!, MenuControllerTypes.close!, MenuControllerTypes.empty!],
        [ModeType.exit]: [MenuControllerTypes.checkClose!, MenuControllerTypes.arrowUp!, MenuControllerTypes.arrowBottom!, MenuControllerTypes.close!, MenuControllerTypes.empty!],
        default: [MenuControllerTypes.checkNext!, MenuControllerTypes.arrowUp!, MenuControllerTypes.arrowBottom!, MenuControllerTypes.close!, MenuControllerTypes.next!]
    };

    return buttonMap[mode] !== undefined ? buttonMap[mode] : buttonMap.default!;
}

function handlerModeControllerButtonList(nodes: Nodes, previousNodes: Nodes) {
    // 當下一層有節點時候的組合
    const nextButtonList: ControllerButtonList[] = [ MenuControllerTypes.checkNext!, MenuControllerTypes.arrowUp!, MenuControllerTypes.arrowBottom!, MenuControllerTypes.previous!, MenuControllerTypes.next! ];

    // 選單不同旋轉角度組合
    type MenuRotationValue = 0 | 90 | 180 | 270;
    const confirmedButtonListObj: Record<MenuRotationValue, ControllerButtonList[]> = {
        0: [ MenuControllerTypes.checkSave!, MenuControllerTypes.arrowUp!, MenuControllerTypes.arrowBottom!, MenuControllerTypes.previous!, MenuControllerTypes.empty! ],
        90: [ MenuControllerTypes.checkSave!, MenuControllerTypes.empty!, MenuControllerTypes.previous!, MenuControllerTypes.arrowUp!, MenuControllerTypes.arrowBottom! ],
        180: [ MenuControllerTypes.checkSave!,  MenuControllerTypes.arrowBottom!, MenuControllerTypes.arrowUp!,  MenuControllerTypes.empty!, MenuControllerTypes.previous!],
        270: [ MenuControllerTypes.checkSave!, MenuControllerTypes.previous!, MenuControllerTypes.empty!, MenuControllerTypes.arrowBottom!, MenuControllerTypes.arrowUp!]
    };

    // 確認選擇的按鈕組合
    const confirmedButtonList: ControllerButtonList[] = confirmedButtonListObj[menuStateResult.value.menuRotationValue as MenuRotationValue];
    // range value 組合
    const rangeButtonList: ControllerButtonList[] = [ MenuControllerTypes.checkSave!,  MenuControllerTypes.rangeAdd!, MenuControllerTypes.rangeSubtract!, MenuControllerTypes.previous!, MenuControllerTypes.empty! ];
    // 多個 range value 組合
    const rangeNextButtonList: ControllerButtonList[] = [ MenuControllerTypes.empty!, MenuControllerTypes.rangeAdd!, MenuControllerTypes.rangeSubtract!,  MenuControllerTypes.previous!, MenuControllerTypes.nextRight! ];
    // 多個直向 range value 組合，且最後一個時候
    const rangeNextButtonListLast: ControllerButtonList[] = [ MenuControllerTypes.empty!, MenuControllerTypes.rangeAdd!, MenuControllerTypes.rangeSubtract!, MenuControllerTypes.previous!, MenuControllerTypes.next! ];
    // 多個縱向 range value 組合 unfocus
    const rangeNextButtonListUnfocus: ControllerButtonList[] = [ MenuControllerTypes.checkSave!, MenuControllerTypes.arrowUp!, MenuControllerTypes.arrowBottom!, MenuControllerTypes.previous!, MenuControllerTypes.nextSave! ];
    // assign button 確認選擇的按鈕組合
    const confirmedAssignButtonList: ControllerButtonList[] = [ MenuControllerTypes.checkSave!, MenuControllerTypes.arrowUp!, MenuControllerTypes.arrowBottom!, MenuControllerTypes.nextAssignLeft!, MenuControllerTypes.nextAssignRight! ];
    // assign button range value 組合
    const rangeAssignButtonList: ControllerButtonList[] = [ MenuControllerTypes.close!, MenuControllerTypes.rangeAdd!, MenuControllerTypes.rangeSubtract!, MenuControllerTypes.nextAssignLeft!, MenuControllerTypes.nextAssignRight! ];
    // assign button info 組合
    const infoAssignButtonList: ControllerButtonList[] = [ MenuControllerTypes.checkSave!, MenuControllerTypes.empty!, MenuControllerTypes.empty!, MenuControllerTypes.nextAssignLeft!, MenuControllerTypes.nextAssignRight! ];
    // 多個螢幕校正組合
    const multiMonitorAlignButtonList: ControllerButtonList[] = [ MenuControllerTypes.checkSave!, MenuControllerTypes.checkSave!, MenuControllerTypes.checkSave!, MenuControllerTypes.checkSave!, MenuControllerTypes.checkSave! ];
    // 位置調整組合
    const positionButtonList: ControllerButtonList[] = [ MenuControllerTypes.previousSave!, MenuControllerTypes.positionUp!, MenuControllerTypes.positionDown!, MenuControllerTypes.positionLeft!, MenuControllerTypes.positionRight! ];
    
    // 當為 reset and back, button 下一層沒有節點的時候
    const isLastNode = nodes.key == ResetNodesEnum.key || nodes.key == BackNodesEnum.key
        || (nodes.mode == ModeType.radio || nodes.mode == ModeType.button || nodes.mode == ModeType.checkBox || nodes.mode == ModeType.paginationButton) && !nodes.nodes
        // radio 的下一層目前資訊只會在第0個
        || (nodes.mode == ModeType.radio) && nodes.nodes && nodes.nodes[0]?.mode == ModeType.info;
    
    // 單個 range value node
    const isSingleRangeNode = (nodes.mode == ModeType.verticalRange || nodes.mode == ModeType.horizontalRange) && previousNodes.nodes?.length == 1;
    // 多個縱向 range value
    const isVerticalRangeNode = nodes.mode == ModeType.verticalRange && previousNodes.nodes && previousNodes.nodes?.length > 1;
    // 多個橫向 range value
    const isHorizontalRangeNode = nodes.mode == ModeType.horizontalRange && previousNodes.nodes && previousNodes.nodes?.length > 1;
    // 多個螢幕校正
    const isMultiMonitorAlignNodes = previousNodes.key == MultiMonitorAlignNodesEnum.key
        && gamingResult.value.multiMonitorAlign.enabled;

    if(isCrosshairLocationNodes.value) {
        return positionButtonList;
    }
    
    if(openAllMenu.value) {

        if(isMultiMonitorAlignNodes) {
            return multiMonitorAlignButtonList;
        }

        if(isLastNode) {
            return confirmedButtonList;
        } 

        if(isSingleRangeNode) {
            return rangeButtonList;
        } 

        if(isVerticalRangeNode) {
            // 判斷是不是最後一個
            return nodes.key == previousNodes!.nodes![previousNodes!.nodes!.length - 1]!.key ? rangeNextButtonListLast : rangeNextButtonList
        } 

        if(isHorizontalRangeNode) {
            // 多個橫向 range value， 是否為focus or unfocus
            return nodes.horizontalRangeFocus ? rangeNextButtonList : rangeNextButtonListUnfocus;
        } 

        return nextButtonList;

    } 
    
    if(openAssignMenu.value) {
        if(previousNodes.mode == ModeType.info) {
            return infoAssignButtonList;
        } 

        if(nodes.mode == ModeType.verticalRange ) {
            return rangeAssignButtonList;
        }

        if(nodes.mode == ModeType.radio || (nodes.mode == ModeType.button && nodes.key == ExitNodesEnum.key)) {
            return confirmedAssignButtonList;
        }

        return confirmedAssignButtonList;
    }

    return [];
}
/* 控制選單按鈕組合列表 */

/* 控制上下一個自訂選單 assign button next panel */
function handlerAssignNextPanel() {

    if(menuState.temporaryStorage) {
        menuState.menuPanel!.result = menuState.temporaryStorage.result;
        menuState.temporaryStorage = null;
        setBrightnessValue();
    };

    menuState.menuPanel = null;
    menuState.secondPanel = null;
    menuState.thirdPanel = null;
    menuState.fourthPanel = null;
    menuState.menuPanelIndex = 0;
    menuState.secondPanelIndex = 0;
    menuState.thirdPanelIndex = 0;
    menuState.fourthPanelIndex = 0;
    menuState.assignPanelOrderIndex += 1;
    menuState.assignPanelOrderIndex = menuState.assignPanelOrderIndex == assignPanelOrder.length ? 0 : menuState.assignPanelOrderIndex;
    const key = assignPanelOrder[menuState.assignPanelOrderIndex] as string;

    if(!isEnableNode(assignMenus.value[key]!.node)) {
        handlerAssignNextPanel();
        return;
    }    

    selectedMenuPanel(assignMenus.value[key]!.node as Nodes);
    handlerNextPanel();
    handlerMenuTimeout();
};

// 返回上一個自訂選單 assign button previous panel
function handlerAssignPreviousPanel() {
    if(menuState.temporaryStorage) {
        menuState.menuPanel!.result = menuState.temporaryStorage.result;
        menuState.temporaryStorage = null;
        setBrightnessValue();
    };

    menuState.menuPanel = null;
    menuState.secondPanel = null;
    menuState.thirdPanel = null;
    menuState.fourthPanel = null;
    menuState.menuPanelIndex = 0;
    menuState.secondPanelIndex = 0;
    menuState.thirdPanelIndex = 0;
    menuState.fourthPanelIndex = 0;
    menuState.assignPanelOrderIndex -= 1;
    menuState.assignPanelOrderIndex = menuState.assignPanelOrderIndex < 0 ? assignPanelOrder.length - 1 : menuState.assignPanelOrderIndex;
    const key = assignPanelOrder[menuState.assignPanelOrderIndex] as string;

    if(!isEnableNode(assignMenus.value[key]!.node)) {
        handlerAssignPreviousPanel();
        return;
    }    

    selectedMenuPanel(assignMenus.value[key]!.node as Nodes);
    handlerNextPanel();
    handlerMenuTimeout();
};

/* 控制上下一個自訂選單 assign button next panel */

/* 選擇下一層(Panel) */
// 選擇下一層目標
function handlerNextPanel(focusSelected = true) {
    let isRadioNodes = false;

    if(menuState.menuPanel?.nodes) {
        if(!menuState.secondPanel) {
            isRadioNodes = menuState.menuPanel!.mode == ModeType.radio && !!menuState.menuPanel!.nodes;

            if(isOpenOSDMessage.value && isRadioNodes) {
                handlerSave(1);
                return
            }

            // 第二層
            selectEnabledNode(menuState.menuPanel, menuState.secondPanelIndex, (nodes, index) => {
                menuState.secondPanel = nodes;
                menuState.secondPanelIndex = index;
                menuState.currentPanelNumber = 2;

                if(isRadioNodes) {
                    handlerSave(1);
                }

                if(menuState.secondPanel!.livePreview) {
                    // 即時預覽效果的時候，暫存原始的值，當沒確認時，反回上一步需要恢復為暫存的值
                    menuState.temporaryStorage = null;
                    menuState.temporaryStorage = JSON.parse(JSON.stringify(menuState.menuPanel));
                }

            }, focusSelected);
        } else if(menuState.secondPanel?.nodes && !menuState.thirdPanel) {
            isRadioNodes = menuState.secondPanel!.mode == ModeType.radio && !!menuState.secondPanel!.nodes;

            if(isOpenOSDMessage.value && isRadioNodes) {
                handlerSave(2);
                return
            }

            // 第三層
            selectEnabledNode(menuState.secondPanel, menuState.thirdPanelIndex, (nodes, index) => {
                menuState.thirdPanel = nodes;
                menuState.thirdPanelIndex = index;
                menuState.currentPanelNumber = 3;

                if(menuState.thirdPanel.mode == ModeType.horizontalRange) {
                    menuState.thirdPanel.horizontalRangeFocus = true;
                }

                if(isRadioNodes) {
                    handlerSave(2);
                }

                if(menuState.thirdPanel!.livePreview) {
                    // 即時預覽效果的時候，暫存原始的值，當沒確認時，反回上一步需要恢復為暫存的值
                    menuState.temporaryStorage = null;
                    menuState.temporaryStorage = JSON.parse(JSON.stringify(menuState.secondPanel));
                }

                // 當為診斷模式時                
                if(menuState.thirdPanel.parents == DiagnosticPatternsNodesEnum.key) {
                    monitorScreenResult.value.diagnosticPatterns.enabled = true;
                    monitorScreenResult.value.diagnosticPatterns.implement();
                }

                if(menuState.thirdPanel.parents == LanguageNodesEnum.key) {
                    emit("update:enabledLanguageDirection", true);
                }

            }, focusSelected);
        } else if(menuState.secondPanel!.nodes && menuState.thirdPanel && menuState.thirdPanel.nodes && !menuState.fourthPanel) {
            isRadioNodes = menuState.thirdPanel?.mode == ModeType.radio && !!menuState.thirdPanel.nodes;

            if(isOpenOSDMessage.value && isRadioNodes) {
                handlerSave(3);
            }

            // 第四層
            selectEnabledNode(menuState.thirdPanel, menuState.fourthPanelIndex, (nodes, index) => {
                menuState.fourthPanel = nodes;
                menuState.fourthPanelIndex = index;
                menuState.currentPanelNumber = 4;

                if(isRadioNodes) {
                    handlerSave(3);
                }

                if(menuState.secondPanel!.livePreview) {
                    // 即時預覽效果的時候，暫存原始的值，當沒確認時，反回上一步需要恢復為暫存的值
                    menuState.temporaryStorage = null;
                    menuState.temporaryStorage = JSON.parse(JSON.stringify(menuState.thirdPanel));
                }
            }, focusSelected);
        }
    }

    handlerMenuTimeout();
};

// 選擇啟用的節點
function selectEnabledNode(node: Nodes, startIndex: number, setValue: (node: Nodes, index: number) => void, focusSelected: boolean) {
    if (node.nodes) {
        let index = startIndex;
        const length = node.nodes.length;
        let attempts = 0; // 防止無窮迴圈

        do {
            // 檢查節點是否可用且未被禁用
            if (
                openAllMenu.value && isEnableNode(node.nodes[index]!) && !node.nodes[index]!.disabled && node.nodes[index]!.menuItemDisplay
                || (openAssignMenu.value && node.nodes[index]!.mode !== ModeType.info)
                || (openAssignMenu.value && node.nodes[index]!.mode == ModeType.button && node.nodes[index]!.assignItemDisplay)
                || (openAssignMenu.value && node.nodes[index]!.mode == ModeType.radio && node.nodes[index]!.assignItemDisplay)
            ) {
                let selectedIndex = (focusSelected && (node.selected || node.selected === 0)) ? node.nodes.findIndex(n => n.selected === node.selected) : index;
                index = selectedIndex >= 0 ? selectedIndex : index;
                setValue(node.nodes[index]!, index);
                return;
            }

            // 轉到下一個節點
            index = (index + 1) % length;
            attempts++;
        } while (index !== startIndex && attempts < length);

        // 如果無法找到有效的節點，可能需要處理錯誤情況或做一些預設處理
        console.warn("No enabled node found.");
    }
};
/* 選擇下一層(Panel) */

/* 返回上一步 */
function handlePrevious() {
    undoTheStaging();

    if(menuState.menuPanel && menuState.secondPanel && !menuState.thirdPanel) {
        menuState.secondPanel = null;
        menuState.secondPanelIndex = 0;
        menuState.currentPanelNumber = 1;

    } else if(menuState.secondPanel && menuState.thirdPanel && !menuState.fourthPanel) {
        if(menuState.thirdPanel!.mode == ModeType.verticalRange && menuState.secondPanel.nodes!.length > 1 && menuState.thirdPanelIndex != 0) {
            menuState.thirdPanelIndex -= 1;
            menuState.thirdPanel = menuState.secondPanel.nodes![menuState.thirdPanelIndex] as Nodes;
            return;
        }

        if(menuState.thirdPanel!.mode == ModeType.horizontalRange && menuState.thirdPanel!.horizontalRangeFocus && menuState.secondPanel.nodes!.length > 1) {
            menuState.thirdPanel!.horizontalRangeFocus = false;
            return;
        }

        menuState.thirdPanel = null;
        menuState.thirdPanelIndex = 0;
        menuState.currentPanelNumber = 2;

    } else if(menuState.secondPanel && menuState.thirdPanel && menuState.thirdPanel.nodes && menuState.fourthPanel) {
        menuState.fourthPanel = null;
        menuState.fourthPanelIndex = 0;
        menuState.currentPanelNumber = 3;
    }

    // 設定亮度與顏色
    setBrightnessValue();
    //特殊邏輯，恢復預設值
    returnToDefaultValue();
    // 選單 timeout
    handlerMenuTimeout();
};
/* 返回上一步 */


/* 處理選單項目控制 */ 
// 控制上下一個項目
function handlerNavigation(direction: 'up' | 'down') {
    const step = direction === 'up' ? -1 : 1;

    if(openAllMenu.value || openAssignMenu.value) {
        if (menus.value && menuState.menuPanel?.nodes) {
            if (!menuState.secondPanel) {
                updatePanelIndex(menus.value, menuState.menuPanelIndex, step, (page, index) => {
                    if(menuState.menuPanel) {
                        menus.value.page = page;
                        menuState.menuPanelIndex = index;
                        menuState.menuPanel = menus.value.nodes[menuState.menuPanelIndex] as Nodes;
    
                        if(menuState.menuPanel!.livePreview) {
                            // 即時預覽效果的時候，暫存原始的值，當沒確認時，反回上一步需要恢復為暫存的值
                            if(menuState.temporaryStorage == null) {
                                menuState.temporaryStorage = JSON.parse(JSON.stringify(menus.value));
                            };
    
                            if(menuState.menuPanel!.mode == ModeType.button || menuState.menuPanel!.mode == ModeType.radio) {
                                // 目前只有 button 及 radio 類型才需要，如有其他類型在進行判斷
                                menus.value.result = menuState.menuPanel!.result as null;
                            }
                        }
                    }
                });
            } else if (menuState.secondPanel && !menuState.thirdPanel) {
                updatePanelIndex(menuState.menuPanel, menuState.secondPanelIndex, step, (page, index) => {
                    if(menuState.menuPanel && menuState.menuPanel.nodes) {
                        menuState.menuPanel.page = page;
                        menuState.secondPanelIndex = index;
                        menuState.secondPanel = menuState.menuPanel.nodes[menuState.secondPanelIndex] as Nodes;
                        
                        if(menuState.secondPanel!.livePreview) {
                            // 即時預覽效果的時候，暫存原始的值，當沒確認時，反回上一步需要恢復為暫存的值
                            if(menuState.temporaryStorage == null) {
                                menuState.temporaryStorage = JSON.parse(JSON.stringify(menuState.menuPanel));
                            }
    
                            if(menuState.secondPanel!.mode == ModeType.button || menuState.secondPanel!.mode == ModeType.radio) {
                                // 目前只有 button 及 radio 類型才需要，如有其他類型在進行判斷
                                
                                // 預覽所選擇顏色亮度
                                if(menuState.secondPanel!.parents == ColorNodesEnum.key) {
                                    if(
                                        menuState.secondPanel!.key != BackNodesEnum.key 
                                        && menuState.secondPanel!.key != ResetNodesEnum.key
                                        && menuState.secondPanel!.key != ExitNodesEnum.key
                                    ) {
                                        menus.value.nodes[1]!.nodes![0].result = menuState.secondPanel.brightness as number;
                                        menus.value.nodes[2]!.nodes![8].nodes![0].result = menuState.secondPanel.rgb!.r as number;
                                        menus.value.nodes[2]!.nodes![8].nodes![1].result = menuState.secondPanel.rgb!.g as number;
                                        menus.value.nodes[2]!.nodes![8].nodes![2].result = menuState.secondPanel.rgb!.b as number;
                                    }
                                }

                                menuState.menuPanel.result = menuState.secondPanel!.result;
                            }
                        } else if(
                            menuState.temporaryStorage && menuState.secondPanel!.mode == ModeType.button && menuState.secondPanel!.key == ExitNodesEnum.key
                            || menuState.temporaryStorage && menuState.secondPanel!.mode == ModeType.button && menuState.secondPanel!.key == ResetNodesEnum.key
                            || menuState.temporaryStorage && menuState.secondPanel!.mode == ModeType.button && menuState.secondPanel!.key == BackNodesEnum.key
                            || menuState.temporaryStorage && menuState.secondPanel!.mode == ModeType.button && menuState.secondPanel!.key == RGBGainAdjustNodesEnum.key
                        ) {
                            menuState.menuPanel.result = menuState.temporaryStorage.result;
                            menus.value.nodes[0]!.nodes![0].result = [menuState.menuPanel.result as string];
                            menuState.temporaryStorage = null;
                            setBrightnessValue();
                        }
                    }
                });
            } else if (menuState.secondPanel && menuState.secondPanel.nodes && menuState.thirdPanel && !menuState.fourthPanel) {
                updatePanelIndex(menuState.secondPanel, menuState.thirdPanelIndex, step, (page, index) => {
                    if(menuState.secondPanel && menuState.secondPanel.nodes) {
                        menuState.secondPanel.page = page;
                        menuState.thirdPanelIndex = index;
                        menuState.thirdPanel = menuState.secondPanel.nodes[menuState.thirdPanelIndex] as Nodes;
    
                        if(menuState.secondPanel.nodes.length > 0) {
                            if(
                                menuState.thirdPanelIndex > 0 && menuState.secondPanel.nodes[menuState.thirdPanelIndex - 1]!.mode == ModeType.horizontalRange
                                && menuState.secondPanel.nodes[menuState.thirdPanelIndex - 1]!.horizontalRangeFocus
                            ) {
                                menuState.secondPanel.nodes[menuState.thirdPanelIndex - 1]!.horizontalRangeFocus = false;
                                menuState.thirdPanel.horizontalRangeFocus = true;
                            }
                        }
    
                        if(menuState.thirdPanel.livePreview) {
                            // 即時預覽效果的時候，暫存原始的值，當沒確認時，反回上一步需要恢復為暫存的值
                            if(menuState.temporaryStorage == null) {
                                menuState.temporaryStorage = JSON.parse(JSON.stringify(menuState.secondPanel));
                            }
                            if(menuState.thirdPanel.mode == ModeType.button || menuState.thirdPanel.mode == ModeType.radio) {
                                // 目前只有 button 及 radio 類型才需要，如有其他類型在進行判斷
                                menuState.secondPanel.result = menuState.thirdPanel.result;

                                // 當為診斷模式時                
                                if(menuState.thirdPanel.parents == DiagnosticPatternsNodesEnum.key) {
                                    monitorScreenResult.value.diagnosticPatterns.enabled = true;
                                    monitorScreenResult.value.diagnosticPatterns.implement();
                                }
                            }
                        }
                    }
                });
            } else if (menuState.secondPanel?.nodes && menuState.thirdPanel?.nodes && menuState.fourthPanel) {
                updatePanelIndex(menuState.thirdPanel, menuState.fourthPanelIndex, step, (page, index) => {
                    if(menuState.thirdPanel && menuState.thirdPanel.nodes) {
                        menuState.thirdPanel.page = page;
                        menuState.fourthPanelIndex = index;
                        menuState.fourthPanel = menuState.thirdPanel.nodes[menuState.fourthPanelIndex] as Nodes;
    
                        if(menuState.fourthPanel!.livePreview) {
                            // 即時預覽效果的時候，暫存原始的值，當沒確認時，反回上一步需要恢復為暫存的值
                            if(menuState.temporaryStorage == null) {
                                menuState.temporaryStorage = JSON.parse(JSON.stringify(menuState.thirdPanel));
                            };
    
                            if(menuState.fourthPanel!.mode == ModeType.button || menuState.fourthPanel!.mode == ModeType.radio) {
                                // 目前只有 button 及 radio 類型才需要，如有其他類型在進行判斷
                                menuState.thirdPanel.result = menuState.fourthPanel!.result;
                            }
                        }
                    }
                });
            }
        }

        handlerMenuTimeout();

    } else if(confirmState.openConfirm) {
        if (confirmState.confirmMainPanel && confirmState.confirmSecondPanel!.nodes && confirmState.confirmThirdPanel) {
            updatePanelIndex(confirmState.confirmSecondPanel!, confirmState.confirmThirdPanelIndex!, step, (page, index) => {
                if(confirmState.confirmSecondPanel) {
                    confirmState.confirmSecondPanel.page = page;
                    confirmState.confirmThirdPanelIndex = index;
                    confirmState.confirmThirdPanel = confirmState.confirmSecondPanel.nodes![confirmState.confirmThirdPanelIndex] as Nodes;
                }
            });
        }
    }
};
/* 處理選單項目index */ 
function updatePanelIndex(node: Nodes, nodeIndex: number, step: number, send: (page: number, index: number) => void) {
    let index = nodeIndex;
    let page = node.page;

    const updateIndex = (idx: number, length: number) => {
        return (idx + step + length) % length;
    };

    if(node.nodes) {
        index = updateIndex(index, node.nodes.length);
        
        const oldNodes = JSON.parse(JSON.stringify(node));

        if (
            !isEnableNode(node.nodes[index]!) || node.nodes[index]!.disabled
            // 暫時先寫死跳過
            || openAllMenu.value && node.nodes[index]!.key == ExitNodesEnum.key && node.nodes[index]!.mode != ModeType.exit
            || openAllMenu.value && node.nodes[index]!.menuItemDisplay === false
            || openAssignMenu.value && node.nodes[index]!.key == ResetNodesEnum.key
            || openAssignMenu.value && node.nodes[index]!.key == BackNodesEnum.key
            || openAssignMenu.value && node.nodes[index]!.mode == ModeType.button && !node.nodes[index]!.assignItemDisplay
            || openAssignMenu.value && node.nodes[index]!.mode == ModeType.radio && !node.nodes[index]!.assignItemDisplay
        ) {
            updatePanelIndex(node, index ,step, send);
        } else {
            // 當為 assignItemChildrenDisplay 時候，且在第一個或最後一個節點時候，直接跳到上一層或下一層
            if(openAssignMenu.value && step == 1 && index == 0 && node!.assignItemChildrenDisplay) {
                handlePrevious();
                handlerNavigation("down");
            }  else if(openAssignMenu.value && step == -1 && index == (node.nodes.length - 2) && node!.assignItemChildrenDisplay) {
                handlePrevious();
                handlerNavigation("up");
            }
            else {
                page = Math.floor(index / node.size) + 1;
                
                if(page != oldNodes.page) {
                    index += index == 0 || index == (node.nodes.length - 1)
                        ? 0 : page > oldNodes.page
                        ? 1 : -1;
                }
                send(page, index);
            }
            // 如果下一個節點有子節點，且開啟 assignItemChildrenDisplay 時候，直接進入下一層
            if(openAssignMenu.value && node.nodes[index]!.nodes && node.nodes[index]!.assignItemChildrenDisplay) {
                // 重置下一層的 index 為第一個
                menuState.thirdPanelIndex = step > 0 ? 0 : (node.nodes[index]!.nodes!.length - 2);
                handlerNextPanel(false);

            }
        }
    }
};

const DELAY_TIME = 80;

const navigationIntervalId = ref<number | null>(null);
const currentNavigationStep = ref<'up' | 'down' | null>(null);

// 開始觸發
function startNavigationTrigger(direction:  'up' | 'down') {
    currentNavigationStep.value = direction;
    // 清除現有的計時器
    if (navigationIntervalId.value !== null) {
        clearInterval(navigationIntervalId.value);
    }
    // 設置新的計時器，每隔 100 毫秒觸發一次函式
    navigationIntervalId.value = window.setInterval(() => handlerNavigation(currentNavigationStep.value!), DELAY_TIME);
};
// 停止觸發
function stopNavigationTrigger() {
    if (navigationIntervalId.value !== null) {
        clearInterval(navigationIntervalId.value);
        navigationIntervalId.value = null;
    }
    handlerMenuTimeout();
};

// 下一個項目
function handlerNavigationDown() {
    startNavigationTrigger("down");
};
// // 上一個項目
function handlerNavigationUp() {
    startNavigationTrigger("up");
};
/* 處理選單項目控制 */ 


/* 控制 range value */
// 控制 range value
function handlerRangeValue(step: string) {
    switch(menuState.currentPanelNumber) {
        case 2:
            if(menuState.menuPanel && menuState.secondPanel) { calculateValue(menuState.secondPanel, menuState.menuPanel); }
            break;
        case 3:
            if(menuState.secondPanel && menuState.thirdPanel) { calculateValue(menuState.thirdPanel, menuState.secondPanel); }
            break;
        case 4:
            if(menuState.thirdPanel && menuState.fourthPanel) { calculateValue(menuState.fourthPanel, menuState.thirdPanel); }
            break;
    };

    // 增減 range value
    function calculateValue(nodes: Nodes, previousNodes: Nodes){
        if(nodes.mode == ModeType.verticalRange || nodes.mode == ModeType.horizontalRange) {

            if (
                previousNodes.key == CountdownTimerNodesEnum.key &&
                typeof nodes.result === "number" &&
                nodes.result > 5
            ) {
                nodes.step = 5;
            } else {
                nodes.step = 1;
            }

            if (
                step == "subtract" &&
                typeof nodes.rangeMin === "number" &&
                typeof nodes.rangeMax === "number" &&
                (nodes.selected as number) > nodes.rangeMin &&
                (nodes.selected as number) <= nodes.rangeMax
            ) {
                (nodes.selected as number) -= nodes.step;
                (nodes.result as number) -= nodes.step;
            } 
            if (
                step == "add" &&
                typeof nodes.rangeMin === "number" &&
                typeof nodes.rangeMax === "number" &&
                (nodes.selected as number) >= nodes.rangeMin &&
                (nodes.selected as number) < nodes.rangeMax
            ) {
                (nodes.selected as number) += nodes.step;
                (nodes.result as number) += nodes.step;
            }

            // 當為 RGB Gain Adjust 時候，調整完後不更新 selected 及 result 值
            if(
                previousNodes.key != RGBGainAdjustNodesEnum.key
                && previousNodes.key != CountdownTimerNodesEnum.key
            ) {
                previousNodes.selected = nodes.selected;
                previousNodes.result = nodes.result;
            }

            if(previousNodes.key == BrightnessNodesEnum.key) {
                const colorResult = menus.value.nodes[2]!.nodes.find(n => n.result === menus.value.nodes[2]!.result);
                colorResult.brightness = nodes.result as number;
            }

            if(previousNodes.key == RGBGainAdjustNodesEnum.key) {
                const colorResult = menus.value.nodes[2]!.nodes.find(n => n.selected == menus.value.nodes[2]!.selected);
                colorResult.rgb.r = previousNodes.nodes![0]!.result as number;
                colorResult.rgb.g = previousNodes.nodes![1]!.result as number;
                colorResult.rgb.b = previousNodes.nodes![2]!.result as number;
            }

            // 當為訊息時間器時，更新 timer 值
            if(previousNodes.key == CountdownTimerNodesEnum.key) {
                const key = CountdownTimerNodesEnum.result as string;
                gamingResult.value.messageTimers.timer[key] = JSON.parse(JSON.stringify(minutesTolSeconds(nodes.result as number)));
            }

            // 當調整亮度與對比時候，關閉動態對比
            if(previousNodes.key == BrightnessNodesEnum.key || previousNodes.key == ContrastNodesEnum.key) {
                setDynamicContrastValue();
            }

            // 當調整 Menu Position 時候，顯示 H=xx, V=xx
            if(previousNodes.key == MenuPositionNodesEnum.key) {
                let menuPositionText = `H=${previousNodes.nodes![0]!.result}, V=${previousNodes.nodes![1]!.result}`;
                previousNodes.selected = menuPositionText;
                previousNodes.result = menuPositionText;
            }
        };
    }
};

const rangeIntervalId = ref<number | null>(null);
const currentRangeStep = ref<string | null>(null);

// 開始觸發 Range Value
function startRangeValueTrigger(step: string) {
    currentRangeStep.value = step;
    // 清除現有的計時器
    if (rangeIntervalId.value !== null) {
        clearInterval(rangeIntervalId.value);
    }
    // 設置新的計時器，每隔 100 毫秒觸發一次函式
    rangeIntervalId.value = window.setInterval(() => handlerRangeValue(currentRangeStep.value!), DELAY_TIME);
};
// 停止觸發 Range Value
function stopRangeValueTrigger() {
    if (rangeIntervalId.value !== null) {
        clearInterval(rangeIntervalId.value);
        rangeIntervalId.value = null;
    }
    handlerMenuTimeout();
};

// 控制 range value 遞減
function handlerRangeSubtract() {
    startRangeValueTrigger("subtract");
};
// 控制 range value 遞增
function handlerRangeAdd() {
    startRangeValueTrigger("add");
};
/* 控制 range value */


/// 控制 crosshair position 遞減
function handlerCrosshairPosition(step: string, position: string) {
    switch(menuState.currentPanelNumber) {
        case 2:
            if(menuState.menuPanel && menuState.secondPanel) { calculateValue(menuState.secondPanel, menuState.menuPanel); }
            break;
        case 3:
            if(menuState.secondPanel && menuState.thirdPanel) { calculateValue(menuState.thirdPanel, menuState.secondPanel); }
            break;
        case 4:
            if(menuState.thirdPanel && menuState.fourthPanel) { calculateValue(menuState.fourthPanel, menuState.thirdPanel); }
            break;
    };

    function calculateValue(nodes: Nodes, previousNodes: Nodes){
        if(nodes.key == CrosshairLocationNodesEnum.key) {
            // Add index signature to selected for type safety
            type SelectedPosition = { [key: string]: number };
            const selected = nodes.selected as SelectedPosition | undefined;
            const result = nodes.result as SelectedPosition | undefined;
            if (
                selected && result &&
                typeof selected === 'object' &&
                !Array.isArray(selected) &&
                position in selected &&
                position in result &&
                nodes.rangeMin &&
                nodes.rangeMax &&
                typeof nodes.rangeMin === 'object' &&
                typeof nodes.rangeMax === 'object'
            ) {
                const min = (nodes.rangeMin as Record<string, number>)[position];
                const max = (nodes.rangeMax as Record<string, number>)[position];
                if (
                    step == "subtract" &&
                    typeof min === "number" &&
                    typeof max === "number" &&
                    selected[position]! > min &&
                    result[position]! <= max
                ) {
                    selected[position]! -= nodes.step!;
                    result[position]! -= nodes.step!;
                }

                if (
                    step == "add" &&
                    typeof min === "number" &&
                    typeof max === "number" &&
                    selected[position]! >= min &&
                    selected[position]! < max
                ) {
                    selected[position]! += nodes.step!;
                    result[position]! += nodes.step!;
                }
            }
        };
    }
}


const crosshairPositionIntervalId = ref<number | null>(null);
const currentCrosshairPositionStep = ref<string | null>(null);

// 開始觸發 crosshair position
function startCrosshairPosition(step: string, position: string) {
    currentCrosshairPositionStep.value = step;
    // 清除現有的計時器
    if (crosshairPositionIntervalId.value !== null) {
        clearInterval(crosshairPositionIntervalId.value);
    }
    // 設置新的計時器，每隔 100 毫秒觸發一次函式
    crosshairPositionIntervalId.value = window.setInterval(() => handlerCrosshairPosition(currentCrosshairPositionStep.value!, position), DELAY_TIME);
};

// 停止觸發 crosshair position
function stopCrosshairPosition() {
    if (crosshairPositionIntervalId.value !== null) {
        clearInterval(crosshairPositionIntervalId.value);
        crosshairPositionIntervalId.value = null;
    }
};

// 控制 crosshair position 遞減
function handlerCrosshairSubtractUp() {
    startCrosshairPosition("subtract", "y");
};

function handlerCrosshairSubtractLeft() {
    startCrosshairPosition("subtract", "x");
};

// 控制 crosshair position 遞增
function handlerCrosshairAddDown() {
    startCrosshairPosition("add", "y");
};
function handlerCrosshairAddRight() {
    startCrosshairPosition("add", "x");
};


// 儲存選擇節點的 value
function handlerSave(currentPanelNumber = 0) {
    currentPanelNumber = currentPanelNumber > 0 ? currentPanelNumber : menuState.currentPanelNumber;
    if(openAllMenu.value || openAssignMenu.value || isCrosshairLocationNodes.value) {
        switch(currentPanelNumber) {
            case 2:
                if(menuState.menuPanel && menuState.secondPanel) { saveNodesValue(menuState.secondPanel, menuState.menuPanel, currentPanelNumber); }
                break;
            case 3:
                if(menuState.secondPanel && menuState.thirdPanel) { saveNodesValue(menuState.thirdPanel, menuState.secondPanel, currentPanelNumber); }
                break;
            case 4:
                if(menuState.thirdPanel && menuState.fourthPanel) { saveNodesValue(menuState.fourthPanel, menuState.thirdPanel); }
                break;
        };
    
        handlerMenuTimeout();
    } else if(confirmState.openConfirm) {
        saveNodesValue(confirmState.confirmThirdPanel!, confirmState.confirmSecondPanel!);
    }
};

function saveNodesValue(nodes: Nodes, previousNodes: Nodes, currentPanelNumber = 0) {
    currentPanelNumber = currentPanelNumber > 0 ? currentPanelNumber : menuState.currentPanelNumber;
    
    const nodesActions: { [key: string]: () => void } = {
        // 離開選單
        [ExitNodesEnum.key]: () => handlerClose(),
        // 返回上一步
        [BackNodesEnum.key]: () => handlePrevious(),
        // 恢復當前 menu 預設值
        [ResetNodesEnum.key]: () => {
            handleResetAction();
            handlerNavigation("down");

        },
        // 上下一頁 目前只處理 secondaryNodesPagination(第三層畫面)
        [NextPageButtonsNodesEnum.key]: () => handlerNavigation("down"),
        [PreviousPageButtonsNodesEnum.key]: () => handlerNavigation("up"),
        [CrosshairLocationNodesEnum.key]: () => handleCrosshairLocationAction()
    };

    const previousNodesActions: { [key: string]: () => void } = {
        // 處理 Confirm 動作
        ChangingMessage: () => handleChangingMessageAction(nodes),
        [FactoryResetNodesEnum.key]: () => handleFactoryResetAction(nodes, previousNodes)
    }
    

    // 當為 previousNodes.key 時，執行動作
    if (previousNodes.key in previousNodesActions) {
        previousNodesActions[previousNodes.key]!();
        return;
    }

    // 當為 nodes.key 時，執行動作
    if (nodes.key in nodesActions) {
        nodesActions[nodes.key]!();
        return;
    }

    // 當是原廠廠設定時，且 OSD Message 是啟用時，顏色與自動休眠的選擇設定結果不一樣時
    if(isOpenOSDMessage.value && (previousNodes.key == ColorNodesEnum.key || previousNodes.key == AutoSleepModeNodesEnum.key) && nodes.selected != previousNodes.selected) {
        factorySettingOSDMessage();
        return;
    }

    if(nodes.mode == ModeType.horizontalRange && previousNodes.nodes!.length > 1) {
        nodes.horizontalRangeFocus = true;
    };

    // checkbox 處理只處理 string[]
    if(nodes.mode == ModeType.checkBox && typeof nodes.selected == "string" && Array.isArray(previousNodes.selected) && Array.isArray(previousNodes.result)) {
        let checked: boolean = (previousNodes.selected as string[]).includes(nodes.selected as string);
        checked ? previousNodes.selected.splice(previousNodes.selected.indexOf(nodes.selected), 1) : previousNodes.selected.push(nodes.selected);
        previousNodes.result = previousNodes.selected;
    } else {
        if(
            previousNodes.nodes!.length > 0
            && nodes.mode != ModeType.horizontalRange
            && previousNodes.key != CountdownTimerNodesEnum.key
            && nodes.key != StartStopNodesEnum.key
            && nodes.key != ResetTimerNodesEnum.key
        ) {
            if(previousNodes.key == RGBGainAdjustNodesEnum.key) {
                menuState.menuPanel!.selected = previousNodes.selected;
                menuState.menuPanel!.selected = previousNodes.result;
            } else {
                previousNodes.selected = nodes.selected;
                previousNodes.result = nodes.result;
            }
        }

        // 當垂直 range 調整後儲存返回上一步
        if(openAllMenu.value && nodes.mode == ModeType.verticalRange && previousNodes.nodes!.length == 1) {
            handlePrevious();
        }

        // 當開自訂選單時且為 垂直 range 調整後關閉
        if(openAssignMenu.value && nodes.mode == ModeType.verticalRange && previousNodes.nodes!.length == 1) {
            handlerClose();
        }

        if(previousNodes.mode == ModeType.radio && nodes.mode == ModeType.radio) {
            // 目前只有第三層會出現的 radio 選擇時需要設定到第一層
            if(menuState.currentPanelNumber == 3) {
                menuState.menuPanel!.result = nodes.result;
                menuState.menuPanel!.selected= nodes.selected;
            }
        }

        const keyHandlers: { [key: string]: () => void } = {
            [LanguageNodesEnum.key]: () => reopenMenu(),
            [InputNodesEnum.key]: () => {
                homeEvent.restartScreen!();
                handlerClose();
            },
            [ColorNodesEnum.key]: () => setBrightnessValue(),
            [VideoLevelNodesEnum.key]: () => restartScreenPreview(),
            [AccessibilityNodesEnum.key]: () => {
                menuStore.$state.menu.nodes[0].disabled = previousNodes.result == OnNodesEnum.result;
                menuStore.$state.menu.nodes[1].disabled = previousNodes.result == OnNodesEnum.result;

                reopenMenu();
            },
            [RefreshRateNodesEnum.key]: () => {
                const actions = {
                    [OffNodesEnum.key]: () => {
                        previousNodes.nodes![2]!.disabled = true;
                        previousNodes.nodes![3]!.disabled = true;
                        previousNodes.nodes![2]?.nodes?.forEach(n => n.disabled = true);
                        previousNodes.nodes![3]?.nodes?.forEach(n => n.disabled = true);

                    },
                    [OnNodesEnum.key]: () => {
                        previousNodes.nodes![2]!.disabled = false;
                        previousNodes.nodes![3]!.disabled = false;
                        previousNodes.nodes![2]?.nodes?.forEach(n => n.disabled = false);
                        previousNodes.nodes![3]?.nodes?.forEach(n => n.disabled = false);
                    }
                };

                if (nodes.key in actions) {
                    actions[nodes.key]!();
                    return;
                }
            },
            [CrosshairNodesEnum.key]: () => {
                const actions = {
                    [OffNodesEnum.key]: () => {
                        previousNodes.nodes![2]!.disabled = true;
                        previousNodes.nodes![3]!.disabled = true;
                        previousNodes.nodes![4]!.disabled = true;
                        previousNodes.nodes![2]?.nodes?.forEach(n => n.disabled = true);
                        previousNodes.nodes![3]?.nodes?.forEach(n => n.disabled = true);
                        emit("update:showGamingCrosshair", false);
                    },
                    [OnNodesEnum.key]: () => {
                        previousNodes.nodes![2]!.disabled = false;
                        previousNodes.nodes![3]!.disabled = false;
                        previousNodes.nodes![4]!.disabled = false;
                        previousNodes.nodes![2]?.nodes?.forEach(n => n.disabled = false);
                        previousNodes.nodes![3]?.nodes?.forEach(n => n.disabled = false);
                    }
                };

                if (nodes.key in actions) {
                    actions[nodes.key]!();
                    return;
                }
            },
            [MessageTimersNodesEnum.key]: () => {
                const actions = {
                    [OffNodesEnum.key]: () => {
                        gamingResult.value.messageTimers.resetTimer();
                        previousNodes.nodes![3]!.disabled = true;
                        previousNodes.nodes![4]!.disabled = true;
                        previousNodes.nodes![5]!.disabled = true;
                        previousNodes.nodes![6]!.disabled = true;
                        previousNodes.nodes![7]!.disabled = true;

                        previousNodes.nodes![5]?.nodes?.forEach(n => n.disabled = true);
                        previousNodes.nodes![6]?.nodes?.forEach(n => n.disabled = true);
                        previousNodes.nodes![7]?.nodes?.forEach(n => n.disabled = true);

                    },
                    [SpeedrunTimerNodesEnum.key]: () => {
                        gamingResult.value.messageTimers.start = false;

                        menus.value.nodes[0]!.nodes[2]!.selected = OffNodesEnum.selected;
                        menus.value.nodes[0]!.nodes[2]!.result = OffNodesEnum.result;
                        previousNodes.nodes![3]!.disabled = false;
                        previousNodes.nodes![4]!.disabled = false;
                        previousNodes.nodes![5]!.disabled = false;
                        previousNodes.nodes![6]!.disabled = false;
                        previousNodes.nodes![7]!.disabled = false;

                        previousNodes.nodes![5]?.nodes?.forEach(n => n.disabled = false);
                        previousNodes.nodes![6]?.nodes?.forEach(n => n.disabled = false);
                        previousNodes.nodes![7]?.nodes?.forEach(n => n.disabled = false);
                    },
                    [CountdownTimerNodesEnum.key]: () => {
                        gamingResult.value.messageTimers.start = false;

                        menus.value.nodes[0]!.nodes[2]!.selected = OffNodesEnum.selected;
                        menus.value.nodes[0]!.nodes[2]!.result = OffNodesEnum.result;
                        previousNodes.nodes![3]!.disabled = false;
                        previousNodes.nodes![4]!.disabled = false;
                        previousNodes.nodes![5]!.disabled = false;
                        previousNodes.nodes![6]!.disabled = false;
                        previousNodes.nodes![7]!.disabled = false;

                        previousNodes.nodes![5]?.nodes?.forEach(n => n.disabled = false);
                        previousNodes.nodes![6]?.nodes?.forEach(n => n.disabled = false);
                        previousNodes.nodes![7]?.nodes?.forEach(n => n.disabled = false);
                    },
                    // 當為訊息時間器時，啟動或暫停
                    [StartStopNodesEnum.key]: () => {
                        gamingResult.value.messageTimers.start = !gamingResult.value.messageTimers.start;
                        gamingResult.value.messageTimers.implement(()=> handlerClose());
                    },
                    // 當為訊息時間器時，重設預設值
                    [ResetTimerNodesEnum.key]: () => {
                        gamingResult.value.messageTimers.resetTimer();
                    }
                };

                if (nodes.key in actions) {
                    actions[nodes.key]!();
                    return;
                }
            },
            [MultiMonitorAlignNodesEnum.key]: () => {
                const actions = {
                    [OffNodesEnum.key]: () => {
                        gamingResult.value.multiMonitorAlign.enabled = false;
                    },
                    [OnNodesEnum.key]: () => {
                        gamingResult.value.multiMonitorAlign.enabled = true;
                        // 切換到 off
                        handlerNavigation("down");
                    }
                };

                if (nodes.key in actions) {
                    actions[nodes.key]!();
                    return;
                }
            },
            [AMDFreeSyncNodesEnum.key]: () => {
                const actions = {
                    [OffNodesEnum.key]: () => {
                        reopenMenu();
                        restartScreenPreview();
                    },
                    [OnNodesEnum.key]: () => {
                        reopenMenu();
                        restartScreenPreview();
                    }
                };

                if (nodes.key in actions) {
                    actions[nodes.key]!();
                    return;
                }
            },
        };

        // 當為 previousNodes.key 時，執行動作
        if (previousNodes.key in keyHandlers) {
            keyHandlers[previousNodes.key]!();
        }

        if(nodes.livePreview) {
            // 即時預覽效果的時候，暫存原始的值，當沒確認時，反回上一步需要恢復為暫存的值
            menuState.temporaryStorage = null;
        }
    }
};

// 重啟選單
function reopenMenu() {
    openAllMenu.value = false;
    openControllerMenus.value = false;

    setTimeout(() => {
        openAllMenu.value = true;
        openControllerMenus.value = true;
    }, 1000)
};

// 重啟螢幕
function restartScreenPreview() {
    emit("update:showScreen", false);

    setTimeout(() => {
        emit("update:showScreen", true);
    }, 1000)
}

// 遞迴尋找 key 並重設內容
function deepFindAndReset(target: any, defaultObj: any, key: string) {
    if (!target || !defaultObj) return false;
    if (target.key === key && defaultObj.key === key) {
        // 只覆蓋屬性，不更換 reference
        Object.keys(defaultObj).forEach(k => {
            if (defaultObj[k] !== undefined) {
                // 僅對物件或陣列做深拷貝，其他型別直接賦值
                if (typeof defaultObj[k] === 'object' && defaultObj[k] !== null) {
                    try {
                        target[k] = JSON.parse(JSON.stringify(defaultObj[k]));
                    } catch (e) {
                        // fallback: 直接賦值
                        target[k] = defaultObj[k];
                    }
                } else {
                    target[k] = defaultObj[k];
                }
            }
        });
        return true;
    }
    // 遞迴 nodes 陣列
    if (Array.isArray(target.nodes) && Array.isArray(defaultObj.nodes)) {
        for (let i = 0; i < target.nodes.length; i++) {
            if (deepFindAndReset(target.nodes[i], defaultObj.nodes[i], key)) return true;
        }
    }
    return false;
}

// 重置動作
function handleResetAction() {
    if(menuState.menuPanel?.key == InputNodesEnum.key) {
        resetInputValue();
        return;
    }

    if(menuState.menuPanel?.key == ColorNodesEnum.key) {
        resetColorRGB();
        setBrightnessValue();
        return
    };

    const resetPanel: { [key: number]: Nodes | null } = {
        2: menuState.menuPanel,
        3: menuState.secondPanel,
        4: menuState.thirdPanel
    };

    const panel = resetPanel[menuState.currentPanelNumber];
    if (!panel) return;


    let key =  panel.key;

    // 遞迴尋找並重設 menuStore.$state 與 MenusDefaultEnum
    let found = false;
    for (const storeKey of Object.keys(menuStore.$state)) {
        const storeObj = menuStore.$state[storeKey as keyof StoreState];
        const defaultObj = MenusDefaultEnum[storeKey as keyof StoreState];
        if (deepFindAndReset(storeObj, defaultObj, key)) {
            found = true;
            break;
        }
    }
    if (!found) {
        console.warn('handleResetAction: key not found in menuStore/MenusDefaultEnum', key);
    }
}

//恢復原廠設定
function handleFactoryResetAction(nodes: Nodes, previousNodes: Nodes) {
    if (nodes.key == YesNodesEnum.key) {
        factorySettings.value = true;
        menuStore.$resetAll();
        handlerClose();
        emit("update:showScreen", false);

        setTimeout(() => {
            emit("update:showScreen", true);
        }, 500);
    } else if (nodes.key == NoNodesEnum.key) {
        handlerNavigation("down");
    }
};

// 處理 Confirm 動作
function handleChangingMessageAction(nodes: Nodes) {
    const keyHandlers: { [key: string]: () => void } = {
        Confirm: () => {
            factorySettings.value = false;
            confirmState.openConfirm = false;
            restoreSelectedMenu();
            // 處理儲存內容
            handlerSave(menuState.currentPanelNumber);
        },
        Cancel: () => handlerCloseConfirmAction()
    };

    // 當為 nodes.key 時，執行動作
    if (nodes.key in keyHandlers) {
        keyHandlers[nodes.key]!();
    }
};

// 原廠設定電源警告判斷
function factorySettingOSDMessage() {
    // 設定 confirm State message
    const setupConfirmState = () => {
        confirmState.confirmMainPanel = PowerConfirmChangeNodesEnum;
        confirmState.confirmSecondPanel = PowerConfirmChangeNodesEnum.nodes[0];
        confirmState.confirmThirdPanel = PowerConfirmChangeNodesEnum.nodes[0].nodes[0];
        confirmState.openConfirm = true;
    }

    // 當是開啟全部選單時，暫時關閉且紀錄目前開啟的選當類型
    if(openAllMenu.value) {
        openAllMenu.value = false;
        menuState.selectedMenus = "openAllMenu";
    };

    // 當是開啟自訂選單時，暫時關閉且紀錄目前開啟的選當類型
    if(openAssignMenu.value) {
        openAssignMenu.value = false;
        menuState.selectedMenus = "openAssignMenu";
    };

    handlerMenuTimeout();
    setupConfirmState();
};

function handleCrosshairLocationAction() {
    if (gamingResult.value.crosshairLocation.enabled && gamingResult.value.crosshairLocation.start == false) {
        if(openAllMenu.value) {
            openAllMenu.value = false;
            menuState.selectedMenus = "openAllMenu";
            gamingResult.value.crosshairLocation.start = true;
            emit("update:showGamingCrosshair", true);
        };

        if(openAssignMenu.value) {
            openAssignMenu.value = false;
            menuState.selectedMenus = "openAssignMenu";
            gamingResult.value.crosshairLocation.start = true;
            emit("update:showGamingCrosshair", true);
        };
    }

    else if(gamingResult.value.crosshairLocation.enabled && gamingResult.value.crosshairLocation.start) {
        gamingResult.value.crosshairLocation.start = false;
        emit("update:showGamingCrosshair", false);
        restoreSelectedMenu();
    }
}

// 重啟選擇的 menu
function restoreSelectedMenu() {
    if (menuState.selectedMenus === "openAllMenu") {
        openAllMenu.value = true;
    } else {
        openAssignMenu.value = true;
    }


}

// 處理 confirm 取消後的動作，選擇為返回(Back)或離開(Exit)選項
function handlerCloseConfirmAction() {
    factorySettings.value = true;
    confirmState.openConfirm = false;
    restoreSelectedMenu();
    undoTheStaging();

    if(menuState.currentPanelNumber == 2) {
        let index = openAllMenu.value
            ? menuState.menuPanel!.nodes?.findIndex(s => s.key == BackNodesEnum.key)
            : menuState.menuPanel!.nodes?.findIndex(s => s.key == ExitNodesEnum.key);
        menuState.secondPanelIndex = index as number;
        menuState.secondPanel = menuState.menuPanel!.nodes![menuState.secondPanelIndex] as Nodes;
    } else if(menuState.currentPanelNumber == 3) {
        let index = openAllMenu.value
            ? menuState.secondPanel!.nodes?.findIndex(s => s.key == BackNodesEnum.key)
            : menuState.secondPanel!.nodes?.findIndex(s => s.key == ExitNodesEnum.key);
        menuState.thirdPanelIndex = index as number;
        menuState.thirdPanel = menuState.secondPanel!.nodes![menuState.thirdPanelIndex] as Nodes;
    }

    setBrightnessValue();

}

// 恢復預覽的結果
function undoTheStaging() {
    if(!menuState.temporaryStorage) return;

    if(menuState.currentPanelNumber == 2) {
        menuState.menuPanel!.result = menuState.temporaryStorage.result;
    }

    if(menuState.currentPanelNumber == 3) {
        menuState.secondPanel!.result = menuState.temporaryStorage.result;

    }
    if(menuState.currentPanelNumber == 4) {
        menuState.thirdPanel!.result = menuState.temporaryStorage.result;
    }

    menuState.temporaryStorage = null;

};

// 關閉全部選單，包含清除目前狀態
function handlerClose() {
    undoTheStaging();
    
    openControllerMenus.value = false;

    openAllMenu.value = false;
    openAssignMenu.value = false;

    // 當關閉 menu 開啟
    emit("update:showGamingSettingText", true);
    emit("update:showGamingCrosshair", true);

    menuState.menuPanel = null;
    menuState.secondPanel = null;
    menuState.thirdPanel = null;
    menuState.fourthPanel = null;

    menuState.currentPanelNumber = 0;
    menuState.menuPanelIndex = 0;
    menuState.secondPanelIndex = 0;
    menuState.thirdPanelIndex = 0;
    menuState.fourthPanelIndex = 0;
    menuState.assignPanelOrderIndex = 0;

    confirmState.openConfirm = false;
    confirmState.confirmMainPanel = null;
    confirmState.confirmSecondPanel = null;
    confirmState.confirmThirdPanel = null;
    confirmState.confirmThirdPanelIndex = 0;

    setBrightnessValue();
    returnToDefaultValue();
};

// 特殊邏輯
// 將語言及診斷模式、選單旋轉角度恢復
function returnToDefaultValue() {

    // 關閉診斷模式
    monitorScreenResult.value.diagnosticPatterns.close();
    // 恢復英文且回到第一頁
    menuStore.$state.menu.nodes[0].selected = "English";
    menuStore.$state.menu.nodes[0].result = "English";
    menuStore.$state.menu.nodes[0].page = 1;
    emit("update:enabledLanguageDirection", false);


    //取消無障礙模式
    menuStore.$state.management.nodes[3].selected = OffNodesEnum.selected;
    menuStore.$state.management.nodes[3].result = OffNodesEnum.result;

    // 恢復預設
    menuStore.$state.management.nodes[2].selected = DiagnosticPatternsNodesEnum.nodes[0].selected;
    menuStore.$state.management.nodes[2].result = DiagnosticPatternsNodesEnum.nodes[0].result;

    // 選單旋轉角度恢復
    menuStore.$state.menu.nodes[4].selected = "Landscape (0°)";
    menuStore.$state.menu.nodes[4].result = "Landscape (0°)";
}


// 開放給 home 使用
defineExpose({ handlerClose });

// 處理選單顯示時效
function handlerMenuTimeout() {
    clearInterval(menuTimeOutIntervalId.value!);
    menuTimeOutIntervalId.value = null;

    // 當為診斷模式時關閉倒數關閉
    if (menuTimeOutIntervalId.value != null && monitorScreenResult.value.diagnosticPatterns.enabled) {
        clearInterval(menuTimeOutIntervalId.value!);
        menuTimeOutIntervalId.value = null;
    } else if(menuTimeOutIntervalId.value == null && monitorScreenResult.value.diagnosticPatterns.enabled == false) {
        menuTimeOutIntervalId.value = setTimeout(() => {
            if(openAssignMenu.value) {
                handlerClose();
            }

            
            openAllMenu.value = false;
            openControllerMenus.value = false;
            // 當關閉 menu 開啟
            emit("update:showGamingSettingText", true);
    
            if(menuState.menuPanel && menuState.secondPanel) {

                if(menuState.menuPanel.key == ColorNodesEnum.key) {
                    menuState.menuPanel.result = menuState.menuPanel.selected;
                    menuState.secondPanel = null;
                    menuState.secondPanelIndex = 0;
                    menuState.currentPanelNumber = 1;
                }

                menuState.thirdPanel = null;
                menuState.thirdPanelIndex = 0;
                menuState.fourthPanel = null;
                menuState.fourthPanelIndex = 0;
                menuState.currentPanelNumber = 2;

                // 恢復原本選擇亮度與顏色
                setBrightnessValue();
                // 特殊邏輯，恢復預設值
                returnToDefaultValue();
            }
    
        }, (menuStateResult.value.menuTimeout as number) * 1000);
    } else {
        clearInterval(menuTimeOutIntervalId.value!);
        menuTimeOutIntervalId.value = null;
    }
}

</script>
<style lang="scss" scoped>

.menu-wrapper {
    position: absolute;
    content: "";
    top: 0px;
    left: 0px;
    width: $screen-width;
    height: $screen-height;
}

.menus {
	position: absolute;
	bottom: v-bind("menuStateResult.menuPosition.y");
	left: v-bind("menuStateResult.menuPosition.x");
	background-color: $black-09;
	width: v-bind("menuStateResult.menuSize.menuWidth");
	height: v-bind("menuStateResult.menuSize.menuHeight");
    z-index: 2;
    transform: rotate(v-bind("menuStateResult.menuRotation"));

	.body {
		height: calc(100% - 44px);
		display: flex;
		color: $light-grey;
		font-size: 10px;
	}
}

.menus {
    opacity: v-bind("menuStateResult.menuTransparency");
    
    &.accessibility {
        transform: scale(1.3) rotate(v-bind("menuStateResult.menuRotation"));
        bottom: 80px;
        left: 294px;
        margin: 0;
    }
}

.menu-controller-btn {
	position: absolute;
	bottom: -148px;
	right: 30px;

	.controller-btn,
	:deep(.controller-btn) {
        position: absolute;
		width: 46px;
		height: 46px;
        bottom: 24px;
        right: 0px;

        &:hover,
        &.show-guide {
            border: 1px dashed $white;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, .15);
        }
        
        &.controller-btn-center,
        &.controller-btn-top,
        &.controller-btn-right,
        &.controller-btn-left,
        &.controller-btn-bottom {
            width: 32px;
            height: 32px;
        }

        &.controller-btn-center {
            right: 93px;
            bottom: 32px;
        }
        &.controller-btn-top {
            right: 93px;
            bottom: 65px;
        }
        &.controller-btn-right {
            right: 60px;
            bottom: 32px;
        }
        &.controller-btn-left {
            right: 126px;
            bottom: 32px;
        }
        &.controller-btn-bottom {
            right: 93px;
            bottom: 0px;
        }
	}
}

</style>