<template>
    <div class="container">
        <div class="curtain">

            <ribbon></ribbon>

            <div class="section">
                <div class="inner">
                    <div class="left">
                        <div class="input">
                            <div :class="['tab', { 'selected-tab': menuStore.$state.input.result == tab.result }]" v-for="tab in tabs"
                                v-text="tab.selected" @click="selectInput(tab)"></div>
                        </div>
                        <div class="card">
                            <div class="top"></div>
                            <div class="info">
                                Welcome to the {{config.company}} {{config.screenModel}} OSD Simulator. Please press the power button and then select an input source.
                            </div>
                        </div>
                    </div>
                    
                    <div class="monitor-block">
                        <div class="monitor">
                            <img src="@/assets/images/monitor.png" alt="monitor">
                        </div>

                        <div class="wrapper" id="monitor-wrapper">
                            <div class="power-light" v-if="openMonitor && monitorResult.powerLED"></div>
    
                            <monitorScreen v-if="openMonitor" v-model:openMonitor="openMonitor"
                                v-model:screenInitial="screenInitial"
                                v-model:showMonitorStatus="showMonitorStatus"
                                v-model:showScreen="showScreen"
                                v-model:startUpFinish="startUpFinish"
                                v-model:showGamingSettingText="showGamingSettingText"
                                v-model:showGamingCrosshair="showGamingCrosshair">
                            </monitorScreen>

                            <div class="menu-buttons-image">
                                <img src="@/assets/images/menu-buttons.svg" alt="">
                                <div class="power-guide" v-if="!openMonitor">Power Button</div>
                                <div class="menu-buttons-guide" v-if="showMonitorStatus">Menu Buttons</div>
                            </div>

                            <div class="language-direction" v-if="enabledLanguageDirection">
                                <p class="direction">The function is for demonstration purposes only. Returning to the previous page will restore to English.</p>
                            </div>
    
                            <menus v-model:openMonitor="openMonitor"
                                v-model:startUpFinish="startUpFinish"
                                v-model:showScreen="showScreen"
                                v-model:showMonitorStatus="showMonitorStatus"
                                v-model:showGamingSettingText="showGamingSettingText"
                                v-model:showGamingCrosshair="showGamingCrosshair"
                                v-model:enabledLanguageDirection="enabledLanguageDirection"
                                ref="childMenusComponentRef">
                                <template v-slot:openMonitor>
                                    <button class="controller-btn open-btn" @click="handleMonitor"></button>
                                </template>
                            </menus>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, provide } from 'vue';
import { useMenuStore } from '@/stores/index';
import type { Nodes, HomeEvent, Language } from '@/types';
import ribbon from '@/views/home/_ribbon/ribbon.vue';
import monitorScreen from '@/views/home/_monitor-screen/monitor-screen.vue';
import menus from '@/views/home/_menus/menus.vue';
import { monitorResult } from '@/service/monitor-state-result';
import config from '@/config/config';

const menuStore = useMenuStore();

const tabs = reactive([
    menuStore.$state.input.nodes[0],
    menuStore.$state.input.nodes[1],
    menuStore.$state.input.nodes[2]
]);

const selectedTab = ref<Nodes | null>(tabs[0] as Nodes | null);

function selectInput(tab: Nodes) {
    if(screenInitial.value == false) {

        if(openMonitor.value && tab.result != menuStore.$state.input.result) {
            restartScreen();
        };

        selectedTab.value = tab;
        menuStore.$state.input.selected = selectedTab.value.selected as string;
        menuStore.$state.input.result = selectedTab.value.result as string;

        menuStore.$state.input.nodes[4].nodes[1].selected = `${menuStore.$state.input.selected} ${menuStore.$state.input.nodes[4].key}`;
        menuStore.$state.input.nodes[4].nodes[1].result = `${menuStore.$state.input.result} ${menuStore.$state.input.nodes[4].key}`;
    }
};


/* 啟動螢幕 start  */
const openMonitor = ref(false);
const screenInitial = ref(false);
const showMonitorStatus = ref(false);
const showScreen = ref(false);
const startUpFinish = ref(false);
const childMenusComponentRef = ref(null);
const enabledLanguageDirection = ref(false);

// 1. gaming 的 refreshRate 及 messageTimers 啟用時候
// 2. 1 啟用時，啟動 menu 不顯示
// 3. 1 不啟用時，不顯示
const showGamingSettingText = ref(true);
const showGamingCrosshair = ref(true);

function handleMonitor() {
    openMonitor.value = !openMonitor.value;

    if(openMonitor.value) {
        showScreen.value = false;
        showMonitorStatus.value = false;
        startUpFinish.value = false;
    }
};
/* 啟動螢幕 end  */

/* 重啟畫面 */
function restartScreen() {
    if(!screenInitial.value) {
        showScreen.value = false;
        showMonitorStatus.value = false;
        startUpFinish.value = false;
    
        if(childMenusComponentRef.value) {
            // 暫時使用 any 解決
            (childMenusComponentRef.value as any).handlerClose();
        };
        
        setTimeout(() => {
            showScreen.value = true;
            showMonitorStatus.value = true;
    
            setTimeout(() => {
                showMonitorStatus.value = false;
                startUpFinish.value = true;
            }, 5000);
        }, 1000);
    }
};
/* 重啟畫面 */


provide<HomeEvent>("homeEvent", {
    restartScreen
});


</script>

<style lang="scss" >
@forward '@/styles/_var';

.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.curtain {
    width: 1280px;
    max-width: 1280px;
    background-image: linear-gradient(to bottom, $white 9%, $grey 141%);
}

.section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: initial;

    .inner {
        display: grid;
        grid-template-columns: max-content 1fr;
        gap: 0 4px;
        margin-top: 8px;
    }

    .left {
        width: 224px;
        height: max-content;
        display: grid;
        gap: 88px 0;
        margin-top: 88px;

        .card {
            width: 184px;

            .top {
                width: initial;
                height: 18px;
                background-color: $dark-gray;
                margin-bottom: 2px;
            }

            .info {
                background-color: $light-grey;
                padding: 24px;
                color: $white;
                line-height: 1.2;
            }
        }
    }

    .monitor-block {
        position: relative;
        z-index: 1;

        &::after {
            position: absolute;
            content: "";
            width: 30px;
            height: 146px;
            right: -24px;
            bottom: 168px;
            border-top: 2px solid $white;
            border-right: 2px solid $white;
            border-bottom: 2px solid $white;
            z-index: -1;
        }

        .wrapper {
            position: absolute;
            content: '';
            top: 8px;
            left: 6px;
            width: $screen-width;
            height: $screen-height;
        }
        
        .monitor {
            img {
                // 螢幕內 960寬 需增加螢幕外觀尺寸
                width: calc(#{$screen-width} + 18px);
            }
        }

        .power-light {
            position: absolute;
            bottom: -24px;
            right: 34px;
            width: 4px;
            height: 4px;
            background-color: $white;
            border-radius: 50%;
            box-shadow: 0px 0px 10px 2px rgba($white, 0.9);
        }

        .menu-buttons-image {
            width: 202px;
            height: 95px;
            position: absolute;
            bottom: -150px;
            right: -6px;
            border: 2px solid $white;
            border-radius: 10px;

            img {
                width: 100%;
            }

            .power-guide {
                position: absolute;
                bottom: -36px;
                right: 14px;
                white-space: nowrap;

                &::before {
                    position: absolute;
                    content: "";
                    width: 0;
                    height: 0;
                    left: calc((100% - 10px) / 2);
                    bottom: 20px;
                    border-style: solid;
                    border-width: 0 5px 10px 5px;
                    border-color: transparent transparent $white transparent;
                }
            }

            .menu-buttons-guide {
                position: absolute;
                white-space: nowrap;
                content: "";
                bottom: -36px;
                right: 52px;
            }
        }

        .language-direction {
            width: 260px;
            height: max-content;
            position: absolute;
            bottom: -132px;
            right: 180px;
            line-height: 1.33;
            
            .direction{
                color: $text-red;
            }
        }
    }
}

.initial-enter-active {
    transition: opacity 1s ease;
}

.initial-leave-active {
    transition: opacity 2s ease;
}

.initial-enter-from,
.initial-leave-to {
    opacity: 0;
}
</style>