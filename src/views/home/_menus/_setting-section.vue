<template>
    <div v-if="mainSectionNodes || secondarySectionNodes" :class="['setting', { 'two-columns': isTwoColumns }]">
        <template v-if="mainSectionNodes && mainSectionNodes.mode != ModeType.exit">
            <div class="main-section">

                <div class="setting-item unset-grid" v-if="currentPanelNumber == 4">
                    <div class="item border-bottom-line" v-text="toLanguageText(mainSectionNodes.language!)"></div>
                </div>

                <template v-for="(secondNodes, secondNodesIdx) in mainSectionNodes.nodes">
                    <div v-if="isEnableNode(secondNodes)
                        && secondNodes.menuItemDisplay && mainSectionNodes.mode
                        && handlePagination(mainSectionNodes, secondNodesIdx)
                        && secondNodes.key != 'Exit'" 
                        :class="['setting-item', secondNodes.key, { 'unset-grid': isTwoColumns }]">

                        <previousPageButtons
                            :currentNodes="secondNodes"
                            :nodes="secondarySectionNodes"
                            :previousNodes="mainSectionNodes">
                        </previousPageButtons>
                        
                        <info :currentNode="secondNodes"></info>

                        <buttonItem
                            :currentNode="secondNodes"
                            :nodes="secondarySectionNodes"
                            :previousNodes="mainSectionNodes"
                            :childNodes="thirdSectionNodes"
                            :bottomLine="false">
                        </buttonItem>

                        <customizeRadio
                            :currentNode="secondNodes" :nodes="secondarySectionNodes"
                            :previousNodes="mainSectionNodes" :bottomLine="false">
                        </customizeRadio>

                        <customizeCheckbox
                            :currentNode="secondNodes" :nodes="secondarySectionNodes"
                            :previousNodes="mainSectionNodes" :bottomLine="false">
                        </customizeCheckbox>

                        <!-- 設定狀態 -->
                        <div class="item state-item" v-if="secondNodes.displayState">
                            <span class="state" >state：{{toDisplayValueLanguageText(secondNodes)}}</span>
                        </div>
                        <!-- 設定狀態 -->

                        <nextPageButtons
                            :currentNodes="secondNodes"
                            :nodes="secondarySectionNodes"
                            :previousNodes="mainSectionNodes">
                        </nextPageButtons>

                        <!-- value -->
                        <div v-if="isShowValue(secondNodes, mainSectionNodes)"
                            :class="['item item-value', { disabled: secondNodes.disabled }]">
                            <span v-if="secondNodes.mode != ModeType.info" v-text="toDisplayValueLanguageText(secondNodes)"></span>
                            <span v-else-if="secondNodes.mode == ModeType.info" v-text="secondNodes.result"></span>
                            <span v-if="secondNodes.unitText" v-text="toLanguageText(secondNodes.unitText)"></span>
                        </div>
                        <!-- value -->
                    </div>
                </template>
            </div>
            <div v-if="mainSectionNodes && secondarySectionNodes && secondarySectionNodes.nodes" 
                :class="['secondary-section', { 'customRGB-range-section': secondarySectionNodes.key == rgbGainAdjustNodesEnum.key }]">

                <div class="setting-info-menu-left"
                    v-if="secondarySectionNodes.key == gamingResult.refreshRate.key
                    || secondarySectionNodes.key == gamingResult.messageTimers.key">

                    <span :class="['setting-info-value',
                            gamingResult.refreshRate.key,
                            gamingResult.refreshRate.color
                        ]"
                        v-if="secondarySectionNodes.key == gamingResult.refreshRate.key
                        && gamingResult.refreshRate.enabled"
                        v-text="gamingResult.refreshRate.rate">
                    </span>

                    <span :class="['setting-info-value',
                            gamingResult.messageTimers.key,
                            gamingResult.messageTimers.color
                        ]"
                        v-if="secondarySectionNodes.key == gamingResult.messageTimers.key
                        && gamingResult.messageTimers.enabled
                        && secondarySectionNodes.nodes[1]!.result == gamingResult.messageTimers.result"
                        v-text="toDisplayTimeFormat(gamingResult.messageTimers.timer[gamingResult.messageTimers.result] as number)">
                    </span>

                    <span :class="['setting-info-value',
                            gamingResult.messageTimers.key,
                            gamingResult.messageTimers.color
                        ]"
                        v-if="secondarySectionNodes.key == gamingResult.messageTimers.key
                        && gamingResult.messageTimers.enabled
                        && secondarySectionNodes.nodes[2]!.result == gamingResult.messageTimers.result"
                        v-text="toDisplayTimeFormat(gamingResult.messageTimers.timer[gamingResult.messageTimers.result] as number)">
                    </span>
                </div>

                <template v-for="(thirdNodes, thirdNodesIdx) in secondarySectionNodes.nodes">
                    <div :class="['setting-item unset-grid', thirdNodes.key]"
                        v-if="isEnableNode(thirdNodes) && thirdNodes.menuItemDisplay
                            && thirdNodes.mode != ModeType.verticalRange
                            && thirdNodes.mode != ModeType.horizontalRange
                            && thirdNodes.key != 'Exit'
                            && handlePagination(secondarySectionNodes, thirdNodesIdx)">
                        
                        <previousPageButtons
                            :currentNodes="thirdNodes"
                            :nodes="thirdSectionNodes"
                            :previousNodes="secondarySectionNodes">
                        </previousPageButtons>

                        <info :currentNode="thirdNodes"></info>
                        
                        <buttonItem
                            :currentNode="thirdNodes"
                            :nodes="thirdSectionNodes"
                            :previousNodes="secondarySectionNodes"
                            :currentPanelNumber="currentPanelNumber"
                            :bottomLine="enabledBottomLine(thirdNodes)">
                        </buttonItem>
                        
                        <customizeRadio
                            :currentNode="thirdNodes" :nodes="thirdSectionNodes"
                            :previousNodes="secondarySectionNodes" :bottomLine="enabledBottomLine(secondarySectionNodes)">
                        </customizeRadio>
                        
                        <customizeCheckbox
                            :currentNode="thirdNodes" :nodes="thirdSectionNodes"
                            :previousNodes="secondarySectionNodes" :bottomLine="enabledBottomLine(secondarySectionNodes)">
                        </customizeCheckbox>

                        <!-- 設定狀態 -->
                        <div class="item state-item" v-if="thirdNodes.displayState">
                            <span class="state" >status：{{toDisplayValueLanguageText(thirdNodes)}}</span>
                        </div>
                        <!-- 設定狀態 -->

                        <nextPageButtons
                            :currentNodes="thirdNodes"
                            :nodes="thirdSectionNodes"
                            :previousNodes="secondarySectionNodes">
                        </nextPageButtons>
                    </div>
                    <verticalRange v-else-if="thirdNodes.mode == ModeType.verticalRange" :currentNode="thirdNodes" :nodes="thirdSectionNodes"></verticalRange>
                    <horizontalRange v-else-if="thirdNodes.mode == ModeType.horizontalRange" :currentNode="thirdNodes" :nodes="thirdSectionNodes"></horizontalRange>
                </template>

                <!-- <div class="setting-item factory-reset-image" v-if="secondarySectionNodes.key == factoryResetNodesEnum.key">
                    <img src="@/assets/images/energy-star.jpg" alt="">
                </div> -->

                <div class="setting-item image-scaling" v-if="secondarySectionNodes.key == imageScalingNodesEnum.key">
                    <p>The “Image Scaling” OSD menu for this product is disabled for all 16:9 aspect ratio resolutions.</p>
                    <br/>
                    <p>But for this OSD training simulation, the menu will remain active for the simulated 1920x1080 resolution.</p>
                </div>

                <div class="setting-item crosshair" v-if="secondarySectionNodes.key == configureNodesEnum.key">
                    <div class="text">Preview:</div>
                    <div class="combination">
                        <svgIcon v-for="(node, index) in secondarySectionNodes.nodes" :key="index"
                            :node="node"
                            :color="gamingResult.crosshairLocation.color"
                            :enabledIcon="gamingResult.crosshairLocation.result"
                            :combination="true">
                        </svgIcon>
                    </div>
                </div>

            </div>
        </template>
        <template v-if="mainSectionNodes && mainSectionNodes.mode == ModeType.exit">
            <div class="full-image">
                <img :src="hpLogoColor" alt="">
            </div>
        </template>
    </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';
import type { Nodes } from '@/types';
import { ModeType } from '@/types';
import { isEnableNode, toLanguageText, toDisplayValueLanguageText, toDisplayTimeFormat } from '@/service/service';
import { gamingResult } from '@/service/monitor-state-result';
import hpLogoColor from '@/assets/images/hp-logo-color.png';

// components
import info from './_components/_info.vue';
import buttonItem from './_components/_button-item.vue';
import verticalRange from './_components/_vertical-range.vue';
import horizontalRange from './_components/_horizontal-range.vue';
import customizeCheckbox from './_components/_customize-checkbox.vue';
import customizeRadio from './_components/_customize-radio.vue';
import previousPageButtons from './_components/_previous-page-buttons.vue';
import nextPageButtons from './_components/_next-page-button.vue';
import svgIcon from './_components/_icon-svg.vue';

import FactoryResetNodes from '@/models/class/management/_factory-reset-nodes';
import ImageScalingNodes from '@/models/class/image/_image-scaling-nodes';
import RGBGainAdjustNodes from '@/models/class/color/_RGB-gain-adjust-nodes';
import ConfigureNodes from '@/models/class/gaming/_crosshair/_configure-nodes';

const factoryResetNodesEnum = new FactoryResetNodes();
const imageScalingNodesEnum = new ImageScalingNodes();
const rgbGainAdjustNodesEnum = new RGBGainAdjustNodes();
const configureNodesEnum = new ConfigureNodes();

const props = defineProps({
    mainSectionNodes: {
        type: Object as PropType<Nodes | null>,
        default: null
    },
    secondarySectionNodes: {
        type: Object as PropType<Nodes | null>,
        default: null
    },
    thirdSectionNodes: {
        type: Object as PropType<Nodes | null>,
        default: null
    },
    currentPanelNumber: {
        type: Number,
        default: 0
    }
});

function isShowValue(Nodes: Nodes, previousNodes: Nodes) {
    return !props.secondarySectionNodes && Nodes.displayValue
            || props.secondarySectionNodes && !props.secondarySectionNodes!.nodes && !props.thirdSectionNodes && Nodes.result && Nodes.displayValue
            || props.secondarySectionNodes && !props.secondarySectionNodes!.nodes && !props.thirdSectionNodes && Nodes.result == 0 && Nodes.displayValue;
}

const isTwoColumns = computed(() => {
    return props.secondarySectionNodes?.nodes && props.secondarySectionNodes?.nodes!.length! > 0;
});

function enabledBottomLine(node: Nodes) {
    const enabledNodes = ["ResetTimer", "MessageTimers", "Configure", "option5bmp", "RefreshRate", "MultiMonitorAlign", "OSDMessages"];

    return enabledNodes.includes(node.key) && isEnableNode(node);
}


function handlePagination(node: Nodes, index: number) {
    return index > ((node.size * (node.page - 1)) - 1)&& index <= (node.size * (node.page));
};

</script>
<style lang="scss" scoped></style>