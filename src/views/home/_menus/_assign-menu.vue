<template>
    <div :class="['menu assign-menu', mainSectionNodes!.key, { 'accessibility': menuStateResult.accessibility }]">
        <div class="header">
            <p>{{ toLanguageText(mainSectionNodes!.language!) }}</p>
        </div>

        <div class="body">
            <div :class="['assign-setting', mainSectionNodes!.key]">
                <div class="setting-info-menu-left assign-info-menu-left"
                    v-if="mainSectionNodes!.key == gamingResult.messageTimers.key">

                    <span :class="['setting-info-value',
                            gamingResult.messageTimers.key,
                            gamingResult.messageTimers.color
                        ]"
                        v-if="mainSectionNodes!.key == gamingResult.messageTimers.key
                        && gamingResult.messageTimers.enabled
                        && mainSectionNodes!.nodes![1]!.result == gamingResult.messageTimers.result"
                        v-text="toDisplayTimeFormat(gamingResult.messageTimers.timer[gamingResult.messageTimers.result] as number)">
                    </span>

                    <span :class="['setting-info-value',
                            gamingResult.messageTimers.key,
                            gamingResult.messageTimers.color
                        ]"
                        v-if="mainSectionNodes!.key == gamingResult.messageTimers.key
                        && gamingResult.messageTimers.enabled
                        && mainSectionNodes!.nodes![2]!.result == gamingResult.messageTimers.result"
                        v-text="toDisplayTimeFormat(gamingResult.messageTimers.timer[gamingResult.messageTimers.result] as number)">
                    </span>
                </div>

                <template v-for="secondNodes in mainSectionNodes!.nodes">
                    <div :class="['setting-item', secondNodes.key, { 'unset-grid': secondNodes.mode != ModeType.info }]"
                        v-if="isEnableNode(secondNodes) 
                        && secondNodes.key != ResetNodesEnum.key
                        && !secondNodes.assignItemChildrenDisplay
                        && isEnableNode(secondNodes) && secondNodes.key != BackNodesEnum.key
                        && isEnableNode(secondNodes) && secondNodes.mode != ModeType.verticalRange
                        && secondNodes.assignItemDisplay">
                        
                        <info :currentNode="secondNodes" :enabledSymbol="true"></info>
        
                        <buttonItem
                            :currentNode="secondNodes"
                            :nodes="secondarySectionNodes"
                            :previousNodes="mainSectionNodes"
                            :bottomLine="false">
                        </buttonItem>
        
                        <customizeRadio
                            :currentNode="secondNodes" :nodes="secondarySectionNodes"
                            :previousNodes="mainSectionNodes" :bottomLine="enabledBottomLine(mainSectionNodes!)">
                        </customizeRadio>
        
                        <!-- value -->
                        <template v-if="secondNodes.mode == ModeType.info">
                            <div :class="['item item-value', {
                                disabled: secondNodes.disabled
                            }]">
                                <span v-text="secondNodes.result"></span>
                            </div>
                        </template>
                        <!-- value -->
                    </div>

                    <template v-else-if="secondNodes.assignItemChildrenDisplay && secondNodes.nodes && secondNodes.nodes.length > 0">

                        <div :class="['setting-item', secondNodes.key]">
                            <labelComponent :currentNode="secondNodes" :enabledSymbol="true"></labelComponent>
                        </div>

                        <template v-for="childrenNodes in secondNodes.nodes">
                            <div :class="['setting-item', childrenNodes.key, { 'unset-grid': childrenNodes.mode != ModeType.info }]">
                                <customizeRadio
                                    :currentNode="childrenNodes" :nodes="thirdSectionNodes"
                                    :previousNodes="secondNodes" :bottomLine="false">
                                </customizeRadio>
                            </div>
                        </template>
                    </template>

                    <verticalRange v-else-if="secondNodes.mode == ModeType.verticalRange" :currentNode="secondNodes"></verticalRange>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { Nodes } from '@/types';
import { ModeType } from '@/types';
import { isEnableNode, toLanguageText, toDisplayTimeFormat } from '@/service/service';
// components
import info from './_components/_info.vue';
import buttonItem from './_components/_button-item.vue';
import verticalRange from './_components/_vertical-range.vue';
import customizeRadio from './_components/_customize-radio.vue';
import labelComponent from './_components/_label.vue';

import { BackNodes, ResetNodes } from '@/models/class/_utilities';

import { menuStateResult, gamingResult } from '@/service/monitor-state-result';

const BackNodesEnum = new BackNodes();
const ResetNodesEnum = new ResetNodes();

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
    }
});

function enabledBottomLine(node: Nodes) {
    const enabledNodes = ["MessageTimers"];
    
    return enabledNodes.includes(node.key) && isEnableNode(node);
}

</script>

<style lang="scss" scoped>
.assign-menu {
    position: absolute;
	background-color: $black-09;
    transform: rotate(v-bind("menuStateResult.menuRotation"));
	bottom: 34px;
	right: 112px;
    background-color: $black-16;
    width: 200px;
	height: 304px;
    z-index: 2;

    &.accessibility {
        transform: scale(1.2);
        bottom: 100px;
        right: 120px;
    }

    &.Information {
        width: 300px;
    }

    .header {
        padding: 6px 12px;
		color: $white;
		font-size: 10px;
        background-color: $black-09;
    }
    .body {
		display: flex;
		color: $light-grey;
		font-size: 10px;
        height: calc(100% - 22px);
    }
}
</style>