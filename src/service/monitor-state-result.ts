import { ref, computed, reactive } from 'vue';
import type { Nodes } from '@/types';
import { useMenuStore } from '@/stores/index';
// service functions
import { removeAndLowercase, minutesTolSeconds } from '@/service/service';
// dialog function
import dialog from '@/service/dialog/dialog';
// utilities nodes
import { OnNodes, OffNodes } from '@/models/class/_utilities';
// gaming nodes
import AMDFreeSyncNodes from '@/models/class/gaming/_amd-free-sync-nodes';
import MPRTNodes from '@/models/class/gaming/_mprt-nodes';
import RefreshRateNodes from '@/models/class/gaming/_refresh-rate-nodes';
import CrosshairNodes from '@/models/class/gaming/_crosshair/crosshair-nodes';
import MessageTimersNodes from '@/models/class/gaming/_message-timers/message-timers-nodes';
import SpeedrunTimerNodes from '@/models/class/gaming/_message-timers/_speedrun-timer-nodes';
import CountdownTimerNodes from '@/models/class/gaming/_message-timers/_countdown-timer-nodes';
import MessageNodes from '@/models/class/gaming/_message-timers/_message-nodes';
import MultiMonitorAlignNodes from '@/models/class/gaming/_multi-monitor-align-nodes';
// image nodes
import BrightnessNodes from '@/models/class/image/_brightness-nodes';
import ContrastNodes from '@/models/class/image/_contrast-nodes';
import DynamicContrastNodes from '@/models/class/image/_dynamic-contrast-nodes';
import SharpnessNodes from '@/models/class/image/_sharpness-nodes';
import ImageScalingNodes from '@/models/class/image/_image-scaling-nodes';
// color nodes
import RGBGainAdjustNodes from '@/models/class/color/_RGB-gain-adjust-nodes';
// input nodes
import DisplayProtModeNodes from '@/models/class/input/_ display-port-mode-nodes';
import AutoSwitchInputNodes from '@/models/class/input/_auto-switch-input-nodes';
// menu nodes
import MenuPositionNodes from '@/models/class/menu/_menu-position-nodes';
import MenuTransparencyNodes from '@/models/class/menu/_menu-transparency-nodes';
import MenuTimeoutNodes from '@/models/class/menu/_menu-timeout-nodes';
import MenuOSDMessageNodes from '@/models/class/menu/_OSD-messages-nodes/OSD-messages-nodes';
import LanguageNodes from '@/models/class/menu/_language-nodes';
// management nodes
import AccessibilityNodes from '@/models/class/management/_accessibility-nodes';
import DiagnosticPatternsNodes from '@/models/class/management/_diagnostic-patterns-nodes';
// power nodes
import AutoSleepModeNodes from '@/models/class/power/_auto-sleep-mode-nodes';
import PowerLEDNodes from '@/models/class/power/_power-LED-nodes';
import PowerOnRecall from '@/models/class/power/_power-on-recall';

// images and icons
import screenOff from '@/assets/images/screen-off.jpg';
import iconClock from '@/assets/icons/icon-clock.svg';

const menuStore = useMenuStore();
const OnNodesEnum = new OnNodes();
const OffNodesEnum = new OffNodes();

// gaming nodes
const AMDFreeSyncNodesEnum = new AMDFreeSyncNodes();
const MPRTNodesEnum = new MPRTNodes();
const MessageTimersNodesEnum = new MessageTimersNodes();
const RefreshRateNodesEnum = new RefreshRateNodes();
const SpeedrunTimerNodesEnum = new SpeedrunTimerNodes();
const CountdownTimerNodesEnum = new CountdownTimerNodes();
const MessageNodesEnum = new MessageNodes();
const MultiMonitorAlignNodesEnum = new MultiMonitorAlignNodes();
const CrosshairNodesEnum = new CrosshairNodes();
// image nodes
const BrightnessNodesEnum = new BrightnessNodes();
const ContrastNodesEnum = new ContrastNodes();
const DynamicContrastNodesEnum = new DynamicContrastNodes();
const ImageScalingNodesEnum = new ImageScalingNodes();
const SharpnessNodesEnum = new SharpnessNodes();
// color nodes
const RGBGainAdjustNodesEnum = new RGBGainAdjustNodes();
// input nodes
const DisplayPortModeNodesEnum = new DisplayProtModeNodes();
const AutoSwitchInputNodesEnum = new AutoSwitchInputNodes();
// menu nodes
const MenuPositionNodesEnum = new MenuPositionNodes();
const MenuTransparencyNodesEnum = new MenuTransparencyNodes();
const MenuTimeoutNodesEnum = new MenuTimeoutNodes();
const MenuOSDMessageNodesEnum = new MenuOSDMessageNodes();
const LanguageNodesEnum = new LanguageNodes();
// management nodes
const AccessibilityNodesEnum = new AccessibilityNodes();
const DiagnosticPatternsNodesEnum = new DiagnosticPatternsNodes();
// power nodes
const AutoSleepModeNodesEnum = new AutoSleepModeNodes();
const PowerLEDNodesEnum = new PowerLEDNodes();
const PowerOnRecallNodesEnum = new PowerOnRecall();
// monitor screen result
// gaming nodes
const AMDFreeSync = computed(()=> menuStore.$state.gaming.nodes?.find(n => n.key == AMDFreeSyncNodesEnum.key));
const MPRT = computed(()=> menuStore.$state.gaming.nodes?.find(n => n.key == MPRTNodesEnum.key));
const refreshRate = computed(()=> menuStore.$state.gaming.nodes?.find(n => n.key == RefreshRateNodesEnum.key));
const crosshair = computed(()=> menuStore.$state.gaming.nodes?.find(n => n.key == CrosshairNodesEnum.key));
const messageTimers = computed(()=> menuStore.$state.gaming.nodes?.find(n => n.key == MessageTimersNodesEnum.key));
const countdownTimer = computed(()=> messageTimers.value?.nodes?.find((n: Nodes) => n.key == CountdownTimerNodesEnum.key));
const multiMonitorAlign = computed(()=> menuStore.$state.gaming.nodes?.find(n => n.key == MultiMonitorAlignNodesEnum.key));
// color nodes
const color = computed(()=> menuStore.$state.color);
const RGBGainAdjust = computed(()=> menuStore.$state.color.nodes.find(n => n.key == RGBGainAdjustNodesEnum.key));
// menu nodes
const brightness = computed(()=> menuStore.$state.image.nodes.find(n => n.key == BrightnessNodesEnum.key));
const contrast = computed(()=> menuStore.$state.image.nodes.find(n => n.key == ContrastNodesEnum.key));
const dynamicContrast = computed(()=> menuStore.$state.image.nodes.find(n => n.key == DynamicContrastNodesEnum.key));
const sharpness = computed(()=> menuStore.$state.image.nodes.find(n => n.key == SharpnessNodesEnum.key));
const imageScaling = computed(()=> menuStore.$state.image.nodes.find(n => n.key == ImageScalingNodesEnum.key));
// input nodes
const input = computed(()=> menuStore.$state.input);
const autoSwitchInput = computed(()=> menuStore.$state.input.nodes.find(n => n.key == AutoSwitchInputNodesEnum.key));
// power nodes
const autoSleepMode = computed(()=> menuStore.$state.power.nodes.find(n => n.key == AutoSleepModeNodesEnum.key));
const powerLED = computed(()=> menuStore.$state.power.nodes.find(n => n.key == PowerLEDNodesEnum.key));
const powerOnRecall = computed(()=> menuStore.$state.power.nodes.find(n => n.key == PowerOnRecallNodesEnum.key));
// menu nodes
const menuPosition = computed(()=> menuStore.$state.menu.nodes.find(n => n.key == MenuPositionNodesEnum.key));
const menuTransparency = computed(()=> menuStore.$state.menu.nodes.find(n => n.key == MenuTransparencyNodesEnum.key));
const menuTimeout = computed(()=> menuStore.$state.menu.nodes.find(n => n.key == MenuTimeoutNodesEnum.key));
const menuOSDMessage = computed(()=> menuStore.$state.menu.nodes.find(n => n.key == MenuOSDMessageNodesEnum.key));
// menu nodes
const language = computed(()=> menuStore.$state.menu.nodes.find(n => n.key == LanguageNodesEnum.key));
// management nodes
const accessibility = computed(()=> menuStore.$state.management.nodes.find(n => n.key == AccessibilityNodesEnum.key));
const diagnosticPatterns = computed(()=> menuStore.$state.management.nodes.find(n => n.key == DiagnosticPatternsNodesEnum.key));
const information = computed(()=> menuStore.$state.information);

const monitorWidth = 960;
const monitorHeight = 526;
const menuWidth = 480;
const menuHeight = 356;

// 診斷模式
const DiagnosticPatternsEnum = reactive({
    enabled: false,
    result: removeAndLowercase(diagnosticPatterns.value?.nodes[1].result as string, "Full Screen"),
    index: 0,
    colors: [
        removeAndLowercase(diagnosticPatterns.value?.nodes[1]?.result as string, "Full Screen"),
        removeAndLowercase(diagnosticPatterns.value?.nodes[2].result as string, "Full Screen"),
        removeAndLowercase(diagnosticPatterns.value?.nodes[3].result as string, "Full Screen"),
        removeAndLowercase(diagnosticPatterns.value?.nodes[4].result as string, "Full Screen"),
        removeAndLowercase(diagnosticPatterns.value?.nodes[5].result as string, "Full Screen")
    ],
    intervalId: null as number | null
});

// 訊息計時器
const MessageTimersEnum = reactive({
    timer: {
        [SpeedrunTimerNodesEnum.result]: 0,
        [CountdownTimerNodesEnum.result]: minutesTolSeconds(countdownTimer.value?.nodes![0].result as number)
    },
    start: false,
    intervalId: null as number | null
});

// 十字準星
const CrosshairEnum = reactive({
    start: false
});

// 螢幕與圖片設定
export const monitorScreenResult = computed(() => {
    return {
        // 取得桌面圖片
        image: screenOff,
        monitorSize: {
            monitorWidth: `${monitorWidth}px`,
            monitorHeight: `${monitorHeight}px`
        }, 
        // 取得亮度值 Brightness (每次遞減/遞增 1% 對應 0.01，0% 時保留 0.3)
        brightness: Math.max(0.3, brightness.value.nodes[0].result / 100),
        // 取得對比值 Contrast (每次遞減/遞增 1% 對應 0.01，0% 時保留 0.3)
        contrast: 1 - Math.max(0.3, contrast.value.nodes[0].result / 100),
        RGB: toImageColor.value,
        // 取得銳利度
        sharpness: getSharpness.value,
        // 取得診斷模式顏色
        diagnosticPatterns: {
            get enabled() {
                return DiagnosticPatternsEnum.enabled;
            },
            set enabled(value: boolean) {
                DiagnosticPatternsEnum.enabled = value;
            },
            get result() {
                return DiagnosticPatternsEnum.result;
            },
            set result(value: string) {
                DiagnosticPatternsEnum.result = value;
            },
            clearInterval: function() {
                if (DiagnosticPatternsEnum.intervalId !== null) {
                    clearInterval(DiagnosticPatternsEnum.intervalId);
                    DiagnosticPatternsEnum.intervalId = null;
                }
            },
            implement: function () {
                if(this.enabled) {
                    const resultIndex = diagnosticPatterns.value?.nodes!.findIndex((node: Nodes) => node.result === diagnosticPatterns.value.result);

                    if(resultIndex == 0 && DiagnosticPatternsEnum.intervalId == null) {
                        if(DiagnosticPatternsEnum.intervalId) {
                            return
                        }
                            
                        DiagnosticPatternsEnum.index = resultIndex;
                        this.result = DiagnosticPatternsEnum.colors[DiagnosticPatternsEnum.index]!;

                        DiagnosticPatternsEnum.intervalId = setInterval(() => {
                            DiagnosticPatternsEnum.index = (DiagnosticPatternsEnum.index + 1) % DiagnosticPatternsEnum.colors.length;
                            this.result = DiagnosticPatternsEnum.colors[DiagnosticPatternsEnum.index]!;
                        }, 3000);

                    } else if(resultIndex >= 1) {
                        if (DiagnosticPatternsEnum.intervalId !== null) {
                            this.clearInterval();
                            DiagnosticPatternsEnum.intervalId = null;
                        };

                        DiagnosticPatternsEnum.index = resultIndex - 1;
                        this.result = DiagnosticPatternsEnum.colors[DiagnosticPatternsEnum.index]!;
                    } else if(diagnosticPatterns.value?.nodes.length == resultIndex) {
                        this.clearInterval();
                        DiagnosticPatternsEnum.intervalId = null;
                        DiagnosticPatternsEnum.enabled = false;

                    }
                } else {
                    if (DiagnosticPatternsEnum.intervalId !== null) {
                        this.clearInterval();
                        DiagnosticPatternsEnum.intervalId = null;
                    }
                }
            },
            close: function () {
                this.enabled = false;
                this.result = removeAndLowercase(diagnosticPatterns.value?.nodes[1].result as string, "Full Screen");
                DiagnosticPatternsEnum.index = 0;
                this.clearInterval();

            }
        },
        // 取得影像位置座標 Image Position
        imagePosition: {
            // x 座標
            x: input.value.result == "VGA" ? `${(((dynamicContrast.value?.nodes[0].result as number) / 100) * (20 - (-20)) - 20)}px` : 0,
            // y 座標
            y: input.value.result == "VGA" ? `${(((dynamicContrast.value?.nodes[1].result as number) / 100) * (20 - (-20)) - 20)}px` : 0
        },
        // 取得影像縮放設定 Image Scaling
        imageScaling: imageScaling.value?.result.replace(/\s+/g, '')
    }
});

// 選單狀態設定
export const menuStateResult = computed(() => {
    // 選單 100% 時的 x 座標 - 預設百分比的 x 座標 - 8
    // 選單 100% 時的 y 座標 - 預設百分比的 y 座標 + 0
    // 選單偏移量計算方式
    // 選單百分比 < 98 時，選單偏移量會隨著選單百分比遞增
    // 選單百分比 >= 98 時，選單偏移量會隨著選單百分比遞減
    // 最大遞減基準值
    const maxDecrease = { x: 102, y: 16 }; 
    // 遞增閾值
    const increaseThreshold = {  x: 97, y: 8 };
    // 遞減閾值
    const decreaseThreshold = 100;
    // 計算遞增係數 (從 0 到 97，deviation.x 從 0 到 97.01)
    const increase = {
        x: 97.01 / increaseThreshold.x, // 97.01 / 97 = 1.0001
        y: maxDecrease.y / increaseThreshold.y
    };
    // 計算遞減係數 (從 97 到 100，deviation.x 從 97.01 到 102)
    const decrease = {
        x: (maxDecrease.x - 97.01) / (decreaseThreshold - increaseThreshold.x), // (102 - 97.01) / (100 - 97) = 4.99 / 3 = 1.663
        y: maxDecrease.y / (decreaseThreshold - increaseThreshold.y)
    };
    // 計算 deviation 的值
    let deviation: { x: number; y: number; } = { x: 0, y: 0 };

    if (menuPosition.value.nodes![0].result as number <= increaseThreshold.x) {
        // 遞增階段：從 0 到 97，deviation.x 從 0 到 97.01
        deviation.x = (increase.x * menuPosition.value.nodes![0].result as number);
    } else { 
        // 遞減階段：從 97 到 100，deviation.x 從 97.01 到 102
        deviation.x = 97.01 + decrease.x * (menuPosition.value.nodes![0].result as number - increaseThreshold.x);
    }

    // 添加 y 軸的計算邏輯
    if (menuPosition.value.nodes![1].result as number < increaseThreshold.y) {
        deviation.y = (increase.y * menuPosition.value.nodes![1].result as number);
    } else { 
        deviation.y = (maxDecrease.y - decrease.y * (menuPosition.value.nodes![1].result as number - increaseThreshold.y));
    }

    return {
        // 選單寬度與高度
        menuSize: {
            menuWidth: `${menuWidth}px`,
            menuHeight: `${menuHeight}px`,
        },
        // 選單座標位置，旋轉角度的座標位置為 demo 使用，當返回上一步時，就會復原原本選單角度
        menuPosition: {
            // 水平
            x: `${(menuPosition.value.nodes![0].result as number / 100) * ((monitorWidth) - menuWidth) - deviation.x}px`,
            // 垂直
            y: `${(menuPosition.value.nodes![1].result as number / 100) * ((monitorHeight - menuHeight)) + deviation.y}px`
        },
        // 選單透明度
        menuTransparency: ((10 - (menuTransparency.value?.result as number)) / 10) + 0.2,
        // 選單顯示時間
        menuTimeout: menuTimeout.value?.result,
        // 螢幕 OSD 訊息
        OSDMessage: {
            // 取得是否螢幕電源開啟時顯示 LOGO
            powerOnLogo: (menuOSDMessage.value?.result as string).includes(menuOSDMessage.value?.nodes![0].result as string),
            // 取得是否顯示無輸入端警告
            noInputSignalWarning: (menuOSDMessage.value?.result as string).includes(menuOSDMessage.value?.nodes![1].result as string),
            // 取得是否啟用確認變更訊息 Confirm Change Message
            confirmMessage: (menuOSDMessage.value?.result as string).includes(menuOSDMessage.value?.nodes![2].result as string),
        },
        // 取得螢幕狀態
        monitorStatus: {
            // 取得是否顯示螢幕狀態視窗
            show: menuOSDMessage.value?.result.includes(menuOSDMessage.value?.nodes![3].result as string),
            // 取得螢幕狀態
            nodes: menuOSDMessage.value?.nodes![3]
        },
        // 取得目前選擇的語言
        language: language.value?.result,
        // 取得輸入端
        input: input.value,
        // 取得輸入端自動切換輸入
        autoSwitchInput: {
            name: autoSwitchInput.value,
            // 取得輸入端自動切換狀態
            state: autoSwitchInput.value?.nodes?.find((node: Nodes) => node.result == autoSwitchInput.value?.result)
        },
        // 取得顏色目前設定
        color: {
            name: information.value.nodes[2],
            state: color.value.nodes.find(n => n.result == information.value.nodes[2].result)
        },
        // 取得目前螢幕模式
        information: {
            // 當前模式
            currentMode: information.value.nodes[0],
            // 最佳模式
            optimalMode: information.value.nodes[1],
            // 顯示模式
            displayMode: information.value.nodes[3]
        },
        // 螢幕診斷模式
        accessibility: {
            show: accessibility.value?.result == OnNodesEnum.result
        }
    }
});

// 取得遊戲模式
export const gamingResult = computed(() => {
    return {
        // 取得 AMD FreeSync 狀態
        amdFreeSync: {
            key: AMDFreeSyncNodesEnum.key,
            status: AMDFreeSync.value?.result == OnNodesEnum.result
                ? input.value.nodes.find(n => n.key == DisplayPortModeNodesEnum.key).result === "DisplayPort 1.2"
                    ? "AMD FreeSync"
                    : "Normal"
                : "Off",
        },
        // 取得 Moving Picture Response Time
        MPRT: {
            key: MPRTNodesEnum.key,
            value: MPRT.value?.result == OffNodesEnum.result
                ? 0 
                : (Number(MPRT.value?.result.split("Level").pop()?.trim()) * 0.02) || 0
        },
        // 當前更新率
        refreshRate: {
            key: refreshRate.value?.key,
            enabled: refreshRate.value?.result == OnNodesEnum.result,
            color: refreshRate.value?.nodes[2].result,
            location: refreshRate.value?.nodes[3].result,
            rate: 120
        },
        // 取得訊息顯示時間
        messageTimers: {
            key: messageTimers.value.key,
            enabled: [messageTimers.value.nodes[1].result, messageTimers.value.nodes[2].result].includes(messageTimers.value.result as string),
            get start() {
                return MessageTimersEnum.start;
            },
            set start(value: boolean) {
                MessageTimersEnum.start = value;
            },
            result: messageTimers.value.result,
            get timer() {
                return MessageTimersEnum.timer;
            },
            set timer(value: any) {
                MessageTimersEnum.timer = value;
            },
            color: messageTimers.value.nodes[6].result,
            location: messageTimers.value.nodes[7].result,
            message: messageTimers.value.nodes![5].nodes!.find((n: Nodes) => n.result == messageTimers.value.nodes![5].result),
            clearInterval: function() {
                if (MessageTimersEnum.intervalId !== null) {
                    clearInterval(MessageTimersEnum.intervalId);
                    MessageTimersEnum.intervalId = null;
                }
            },
            implement: function(callback?: Function) {
                if(this.enabled && this.start) {
                    
                    const step = {
                        [SpeedrunTimerNodesEnum.result]: 1,
                        [CountdownTimerNodesEnum.result]: -1
                    };
                    MessageTimersEnum.intervalId = setInterval(() => {

                        if(this.result <= CountdownTimerNodesEnum.result && this.timer[this.result] == 0) {
                            this.start = false;
                            this.clearInterval();
                            callback && callback();
                            const message = MessageNodesEnum.nodes.find((n: Nodes) => n.result == MessageNodesEnum.result);
                            dialog.toast({ message: message.language, image: iconClock });
                            return;
                        }

                        this.timer[this.result]! += step[this.result]!;

                    }, 1000);
                } else {
                    this.clearInterval();
                }
            },
            resetTimer: function() {
                this.clearInterval();
                this.start = false;
                this.timer = reactive({
                    [SpeedrunTimerNodesEnum.result]: 0,
                    [CountdownTimerNodesEnum.result]: minutesTolSeconds(countdownTimer.value.nodes![0].result as number)
                });
            }
        },
        multiMonitorAlign: {
            enabled: multiMonitorAlign.value?.result == OnNodesEnum.selected,
            color: multiMonitorAlign.value?.nodes[2].result,
        },
        crosshairLocation: {
            enabled: crosshair.value?.result == OnNodesEnum.selected,
            result: crosshair.value?.nodes[2].result,
            color: crosshair.value?.nodes![3].result,
            position: {
                x: `${crosshair.value?.nodes[4].result.x}px`,
                y: `${crosshair.value?.nodes[4].result.y}px`
            },
            get start() {
                return CrosshairEnum.start;
            },
            set start(value: boolean) {
                CrosshairEnum.start = value;
            } 
        }
    }
});

// 取得螢幕
export const monitorResult = computed(() => {
    return {
        // 取得自動睡眠設定
        autoSleepMode: autoSleepMode.value?.result == OnNodesEnum.result ? true : false,
        // 取得重新開機設定
        powerOnRecall: powerOnRecall.value?.result == OnNodesEnum.result ? true : false,
        // 取得店員指示燈設定
        powerLED: powerLED.value?.result == OnNodesEnum.result ? true : false,
    }
});


// 取讀銳利度
const getSharpness = computed(() => {
    if(sharpness.value.result == sharpness.value.nodes![0].result) {
        return "0.7px";
    } else if(sharpness.value.result == sharpness.value.nodes![1].result) {
        return "0.6px";
    } else if(sharpness.value.result == sharpness.value.nodes![2].result) {
        return "0.5px";
    } else if(sharpness.value.result == sharpness.value.nodes![3].result) {
        return "0.4px";
    } else if(sharpness.value.result == sharpness.value.nodes![4].result) {
        return "0.3px";
    } else if(sharpness.value.result == sharpness.value.nodes![5].result) {
        return "0.2px";
    } else if(sharpness.value.result == sharpness.value.nodes![6].result) {
        return "0px";
    } else {
        return "0.4px"
    }
});

const toImageColor = computed(() => {
    // 自訂 RGB，RGB 轉換
    let RGB: {r: number, g: number, b: number} = {r: 0, g: 0, b: 0};

    RGB = {
        r: RGBGainAdjust.value.nodes[0].result == 255
            ? RGBGainAdjust.value.nodes[0].result 
            : (RGBGainAdjust.value.nodes[0].result / 2) + 127.5 as number,
        g: RGBGainAdjust.value.nodes[1].result == 255
            ? RGBGainAdjust.value.nodes[1].result
            : (RGBGainAdjust.value.nodes[1].result / 2) + 127.5 as number,
        b: RGBGainAdjust.value.nodes[2].result == 255
            ? RGBGainAdjust.value.nodes[2].result
            : (RGBGainAdjust.value.nodes[2].result / 2) + 127.5 as number
    }

    return RGB;
});

// 取出括號中的數字，選單旋轉使用
function extractStringFromParentheses(input: string): number {
    const match = input.match(/\(([^)]+)\)/); // 匹配括號中的內容
    if (match) {
        const cleanedString = match[1]!.replace(/°/g, ""); // 移除 ° 符號
        const number = parseFloat(cleanedString); // 將移除後的字串轉換為數字
        return isNaN(number) ? 0 : number; // 確保結果為有效的數字
    }
    return 0;
}
