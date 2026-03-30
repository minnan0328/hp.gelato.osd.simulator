import { ref, computed, reactive } from 'vue';
import type { Nodes } from '@/types';
import { useMenuStore } from '@/stores/index';
import { OnNodes, OffNodes, TopNodes, MediumNodes, BottomNodes, LowNodes, HighNodes } from '@/models/class/_utilities';
import SpeedrunTimerNodes from '@/models/class/gaming/_message-timers/_speedrun-timer-nodes';
import CountdownTimerNodes from '@/models/class/gaming/_message-timers/_countdown-timer-nodes';
import MessageNodes from '@/models/class/gaming/_message-timers/_message-nodes';
import { removeAndLowercase, minutesTolSeconds } from '@/service/service';
import dialog from '@/service/dialog/dialog';

import screenOff from '@/assets/images/screen-off.jpg';
import screenLow from '@/assets/images/screen-low.jpg';
import screenMedium from '@/assets/images/screen-medium.jpg';
import screenHigh from '@/assets/images/screen-high.jpg';

import iconClock from '@/assets/icons/icon-clock.svg';

const menuStore = useMenuStore();
const OnNodesEnum = new OnNodes();
const OffNodesEnum = new OffNodes();
const TopNodesEnum = new TopNodes();
const BottomNodesEnum = new BottomNodes();
const LowNodesEnum = new LowNodes();
const MediumNodesEnum = new MediumNodes();
const HighNodesEnum = new HighNodes();

const SpeedrunTimerNodesEnum = new SpeedrunTimerNodes();
const CountdownTimerNodesEnum = new CountdownTimerNodes();
const MessageNodesEnum = new MessageNodes();

const brightness = computed(()=> menuStore.$state.image);
const gaming = computed(()=> menuStore.$state.gaming);
const color = computed(()=> menuStore.$state.color);
const image = computed(()=> menuStore.$state.image);
const input = computed(()=> menuStore.$state.input);
const power = computed(()=> menuStore.$state.power);
const menu = computed(()=> menuStore.$state.menu);
const management = computed(()=> menuStore.$state.management);
const information = computed(()=> menuStore.$state.information);

const monitorWidth = 960;
const monitorHeight = 526;
const menuWidth = 480;
const menuHeight = 356;

// 診斷模式
const DiagnosticPatternsEnum = reactive({
    enabled: false,
    result: removeAndLowercase(management.value.nodes[2].nodes![1].result as string, "Full Screen"),
    index: 0,
    colors: [
        removeAndLowercase(management.value.nodes[2].nodes?.[1]?.result as string, "Full Screen"),
        removeAndLowercase(management.value.nodes[2].nodes![2].result as string, "Full Screen"),
        removeAndLowercase(management.value.nodes[2].nodes![3].result as string, "Full Screen"),
        removeAndLowercase(management.value.nodes[2].nodes![4].result as string, "Full Screen"),
        removeAndLowercase(management.value.nodes[2].nodes![5].result as string, "Full Screen")
    ],
    intervalId: null as number | null
});

// 訊息計時器
const MessageTimersEnum = reactive({
    timer: {
        [SpeedrunTimerNodesEnum.result]: 0,
        [CountdownTimerNodesEnum.result]: minutesTolSeconds(gaming.value.nodes[4].nodes![2].nodes![0].result as number)
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
        // 取得亮度值 Brightness
        brightness: `${image.value.nodes[0].nodes[0].result}%`,
        // 取得對比值 Contrast
        contrast: `${image.value.nodes[1].nodes[0].result}%`,
        RGB: {
            R: (color.value.nodes[8].nodes) ? color.value.nodes[8].nodes[0].result as number : 255,
            G:(color.value.nodes[8].nodes) ? color.value.nodes[8].nodes[1].result as number : 255,
            B: (color.value.nodes[8].nodes) ? color.value.nodes[8].nodes[2].result as number : 255
        },
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
                    const resultIndex = management.value.nodes[2].nodes!.findIndex((node: Nodes) => node.result === management.value.nodes[2].result);
                    
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
                this.result = removeAndLowercase(management.value.nodes[2].nodes![1].result as string, "Full Screen");
                DiagnosticPatternsEnum.index = 0;
                this.clearInterval();

            }
        },
        // 取得影像位置座標 Image Position
        imagePosition: {
            // x 座標
            x: input.value.result == "VGA" ? `${(((image.value.nodes[2].nodes![0].result as number) / 100) * (20 - (-20)) - 20)}px` : 0,
            // y 座標
            y: input.value.result == "VGA" ? `${(((image.value.nodes[2].nodes![1].result as number) / 100) * (20 - (-20)) - 20)}px` : 0
        },
        // 取得影像縮放設定 Image Scaling
        imageScaling: image.value.nodes[5].result.replace(/\s+/g, '')
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
    const maxDecrease = {
        x: 102,
        y: 16
    }; 
    // 遞增閾值
    const increaseThreshold = {
        x: 97,
        y: 8
    };
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
    let deviation: {
        x: number;
        y: number;
    } = {
        x: 0,
        y: 0
    };

    if (menu.value.nodes[1].nodes![0].result as number <= increaseThreshold.x) {
        // 遞增階段：從 0 到 97，deviation.x 從 0 到 97.01
        deviation.x = (increase.x * menu.value.nodes[1].nodes![0].result as number);
    } else { 
        // 遞減階段：從 97 到 100，deviation.x 從 97.01 到 102
        deviation.x = 97.01 + decrease.x * (menu.value.nodes[1].nodes![0].result as number - increaseThreshold.x);
    }

    // 添加 y 軸的計算邏輯
    if (menu.value.nodes[1].nodes![1].result as number < increaseThreshold.y) {
        deviation.y = (increase.y * menu.value.nodes[1].nodes![1].result as number);
    } else { 
        deviation.y = (maxDecrease.y - decrease.y * (menu.value.nodes[1].nodes![1].result as number - increaseThreshold.y));
    }

    // 取得選單旋轉角度
    let getMenuRotation = extractStringFromParentheses(menu.value.nodes[4].result);

    return {
        // 選單寬度與高度
        menuSize: {
            menuWidth: `${menuWidth}px`,
            menuHeight: `${menuHeight}px`,
        },
        // 選單座標位置，旋轉角度的座標位置為 demo 使用，當返回上一步時，就會復原原本選單角度
        menuPosition: {
            // 水平
            x: getMenuRotation == 90 || getMenuRotation ==  270 ? "430px" : `${(menu.value.nodes[1].nodes![0].result as number / 100) * ((monitorWidth) - menuWidth) - deviation.x}px`,
            // 垂直
            y: getMenuRotation == 90 || getMenuRotation ==  270 ? "92px" : `${(menu.value.nodes[1].nodes![1].result as number / 100) * ((monitorHeight - menuHeight)) + deviation.y}px`
        },
        // 選單透明度
        menuTransparency: ((10 - (menu.value.nodes[2].result as number)) / 10) + 0.2,
        // 選單顯示時間
        menuTimeout: menu.value.nodes[3].result,
        // 選單旋轉角度
        menuRotationValue: getMenuRotation,
        // 選單旋轉角度 css 設定使用
        menuRotation: `-${getMenuRotation}deg`,
        // 螢幕 OSD 訊息
        OSDMessage: {
            // 取得是否螢幕電源開啟時顯示 LOGO
            powerOnLogo: (menu.value.nodes[5].result as string).includes(menu.value.nodes[5].nodes![0].result as string),
            // 取得是否顯示無輸入端警告
            noInputSignalWarning: (menu.value.nodes[5].result as string).includes(menu.value.nodes[5].nodes![1].result as string),
            // 取得是否啟用確認變更訊息 Confirm Change Message
            confirmMessage: (menu.value.nodes[5].result as string).includes(menu.value.nodes[5].nodes![2].result as string),
        },
        // 取得螢幕狀態
        monitorStatus: {
            // 取得是否顯示螢幕狀態視窗
            show: menu.value.nodes[5].nodes![3].result != OffNodesEnum.result ? true : false,
            // 取得螢幕狀態
            nodes: menu.value.nodes[5].nodes![3]
        },
        // 取得輸入端
        input: input.value,
        // 取得輸入端自動切換輸入
        autoSwitchInput: {
            name: input.value.nodes[3],
            // 取得輸入端自動切換狀態
            state: input.value.nodes[3].nodes?.find((node: Nodes) => node.result == input.value.nodes[3].result)
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
        accessibility: management.value.nodes[3].result == OnNodesEnum.result
    }
});

// 取得遊戲模式
export const gamingResult = computed(() => {
    return {
        // 當前更新率
        refreshRate: {
            key: gaming.value.nodes[2].key,
            enabled: gaming.value.nodes[2].result == OnNodesEnum.result,
            color: gaming.value.nodes[2].nodes[2].result,
            location: gaming.value.nodes[2].nodes[3].result,
            rate: 120
        },
        // 取得訊息顯示時間
        messageTimers: {
            key: gaming.value.nodes[4].key,
            enabled: [gaming.value.nodes[4].nodes[1].result, gaming.value.nodes[4].nodes[2].result].includes(gaming.value.nodes[4].result as string),
            get start() {
                return MessageTimersEnum.start;
            },
            set start(value: boolean) {
                MessageTimersEnum.start = value;
            },
            result: gaming.value.nodes[4].result,
            get timer() {
                return MessageTimersEnum.timer;
            },
            set timer(value: any) {
                MessageTimersEnum.timer = value;
            },
            color: gaming.value.nodes[4].nodes[6].result,
            location: gaming.value.nodes[4].nodes[7].result,
            message: gaming.value.nodes[4].nodes![5].nodes!.find((n: Nodes) => n.result == gaming.value.nodes[4].nodes![5].result),
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
                    [CountdownTimerNodesEnum.result]: minutesTolSeconds(gaming.value.nodes[4].nodes![2].nodes![0].result as number)
                });
            }
        },
        multiMonitorAlign: {
            enabled: gaming.value.nodes[5].result == OnNodesEnum.selected,
            color: gaming.value.nodes[5].nodes![2].result,
        },
        crosshairLocation: {
            enabled: gaming.value.nodes[3].result == OnNodesEnum.selected,
            result: gaming.value.nodes[3].nodes[2].result,
            color: gaming.value.nodes[3].nodes![3].result,
            position: {
                x: `${gaming.value.nodes[3].nodes![4].result.x}px`,
                y: `${gaming.value.nodes[3].nodes![4].result.y}px`
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
        autoSleepMode: power.value.nodes[0].result == OnNodesEnum.result ? true : false,
        // 取得重新開機設定
        powerOnRecall: power.value.nodes[1].result == OnNodesEnum.result ? true : false,
        // 取得店員指示燈設定
        powerLED: power.value.nodes[2].result == OnNodesEnum.result ? true : false,
    }
});


// 取讀銳利度
const getSharpness = computed(() => {
    if(image.value.nodes[4].result == image.value.nodes[4].nodes![0].result) {
        return "0.7px";
    } else if(image.value.nodes[4].result == image.value.nodes[4].nodes![1].result) {
        return "0.6px";
    } else if(image.value.nodes[4].result == image.value.nodes[4].nodes![2].result) {
        return "0.5px";
    } else if(image.value.nodes[4].result == image.value.nodes[4].nodes![3].result) {
        return "0.4px";
    } else if(image.value.nodes[4].result == image.value.nodes[4].nodes![4].result) {
        return "0.3px";
    } else if(image.value.nodes[4].result == image.value.nodes[4].nodes![5].result) {
        return "0.2px";
    } else if(image.value.nodes[4].result == image.value.nodes[4].nodes![6].result) {
        return "0px";
    } else {
        return "0.4px"
    }
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
