<template>
    <div class="range setting-item" v-if="isEnableNode(currentNode) && currentNode.mode == ModeType.verticalRange">
        <div :class="['vertical-range', {
                    selected: nodes && nodes?.key == currentNode.key,
                    color: isColor,
                    disabled: currentNode.disabled
                }]">
            <div class="range-max-value">
                <img v-if="currentNode.rangeMaxIcon" class="original" :src="getIconSrc(currentNode.rangeMaxIcon)" alt="">
                <span v-else-if="!isColor" v-text="currentNode.rangeMax"></span>
                <span v-if="!currentNode.rangeMaxIcon && isColor" :class="currentNode.key" v-text="toLanguageText(currentNode.language!)"></span>
            </div>

            <div class="range-max-value" v-if="!isColor">
                <span v-if="currentNode.rangeMaxIcon" v-text="currentNode.rangeMax"></span>
            </div>

            <div :class="['range-graduate item', { selected: nodes && nodes?.key == currentNode.key, 'merge-grid': isColor }]">
                <div :class="['graduate', currentNode.key, { max: currentNode.selected == currentNode.rangeMax }]">
                </div>
            </div>

            <div class="range-text" v-if="!isColor" >
                <span v-text="currentNode.selected"></span>
                <span v-if="currentNode.unitText" v-text="toLanguageText(currentNode.unitText)"></span>
            </div>

            <div class="range-max-value">
                <img v-if="currentNode.rangeMinIcon" class="small" :src="getIconSrc(currentNode.rangeMinIcon)" alt="">
                <span v-else-if="!isColor" v-text="currentNode.rangeMin"></span>
                <span v-if="!currentNode.rangeMinIcon && isColor" v-text="currentNode.selected"></span>
            </div>

            <div class="range-max-value" v-if="!isColor">
                <span v-if="currentNode.rangeMinIcon" v-text="currentNode.rangeMin"></span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';
import type { Nodes } from '@/types';
import { ModeType } from '@/types';
import { isEnableNode ,toLanguageText, getIconSrc } from '@/service/service';
import RGBGainAdjustNodes from '@/models/class/color/_RGB-gain-adjust-nodes';

const rgbGainAdjustNodesEnum = new RGBGainAdjustNodes();

const props = defineProps({
    currentNode: {
        type: Object as PropType<Nodes>,
        required: true
    },
    nodes: {
        type: Object as PropType<Nodes | null>,
        required: false,
        default: null
    }
});

const isColor = computed(() => props.nodes && props.nodes?.key == rgbGainAdjustNodesEnum.key);

const currentValue = computed(() => {
    let showValue = convertRange(props.currentNode.selected as number, props.currentNode.rangeMin as number, props.currentNode.rangeMax as number);
    return `${showValue as number}%`
});

function convertRange(value: number, rangeMin: number, rangeMax: number) {
    return ((value - rangeMin) / (rangeMax - rangeMin)) * (100 - 0) + 0;
};

</script>
<style lang="scss" scoped>


.range {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .vertical-range {
        display: grid;
        grid-template-columns: max-content 16px;
        grid-template-rows: max-content 1fr max-content;
        gap: 8px 8px;
        height: 75%;
        justify-content: center;
        align-items: center;

        &.color {
            grid-template-columns: max-content;
        }

        .range-text,
        .range-max-value {
            text-align: center;
        }

        .range-max-value {
            font-weight: bold;

            .original {
                width: 100%;
            }

            .small {
                max-width: 70%;
            }
        }

        &.selected:not(.disabled) {
            .range-text {
                color: #ffffff;
            }

            .range-max-value  {
                .RedColor {
                    color: #FF0000;
                }

                .GreenColor {
                    color: #00FF00;
                }
                
                .BlueColor {
                    color: #0000FF;
                }
            }
        }

        .range-graduate {
            width: 20px;
            height: calc(100% - 6px);
            background-color: transparent;
            padding: 2px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid transparent;
            position: relative;

            .graduate {
                width: 4px;
                height: calc(100% - 14px);
                background-color: $black-50;
                border-radius: 6px;
                position: absolute;
                top: 3px;
                bottom: 3px;
                padding: 4px;

                &::before {
                    position: absolute;
                    content: '';
                    bottom: 2px;
                    left: 2px;
                    right: 0;
                    background-color: $light-grey;
                    width: 6px;
                    height: calc(v-bind(currentValue) - 6px);
                    border: 1px solid #505050;
                    border-bottom-left-radius: 6px;
                    border-bottom-right-radius: 6px;
                }

                &.RedColor::before {
                    background-color: #FF0000;
                }
                &.GreenColor::before {
                    background-color: #00FF00;
                }
                &.BlueColor::before {
                    background-color: #0000FF;
                }

                &.max {
                    &::before {
                        border-radius: 6px;
                    }
                }
            }
        }
    }
}
</style>