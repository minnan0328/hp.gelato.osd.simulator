<template>
    <div v-if="currentNode.mode == ModeType.checkBox" :class="['customize-checkbox ', { 'border-bottom-line': isLastNode(currentNode, previousNodes) }]">
        <div :class="['checkbox item', { selected: nodes?.key == currentNode.key, disabled: currentNode.disabled }]">
            <div :class="['box', { checked: isChecked(currentNode), disabled: currentNode.disabled }]"></div>
            <svgIcon v-if="currentNode.useIcon"  :node="currentNode"></svgIcon>
            <div v-else v-text="toLanguageText(currentNode.language!)"></div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import type { Nodes } from '@/types';
import { ModeType } from '@/types';
import { toLanguageText } from '@/service/service';
import svgIcon from './_icon-svg.vue';

const props = defineProps({
    currentNode: {
        type: Object as PropType<Nodes>,
        required: true
    },
    nodes: {
        type: Object as PropType<Nodes | null>,
        required: false,
        default: null,
    },
    previousNodes: {
        type: Object as PropType<Nodes>,
        required: true
    },
    bottomLine: {
        type: Boolean,
        default: true
    },
    disabled: {
        disabled: Boolean,
        required: false,
        default: false
    }
});

function isChecked(item: Nodes): boolean {
    const value = props.previousNodes.selected;

    // 強制轉型，並根據類型使用 includes 方法
    return Array.isArray(value)
        ? (value as string[]).includes(item.selected as string)
        : false;
};

function isLastNode(node: Nodes, previousNodes: Nodes): boolean {
    if(previousNodes.nodes) {
        let nodesList = previousNodes.nodes.filter(n => n.mode == ModeType.checkBox);

        return nodesList[nodesList.length - 1]!.key == node.key && props.bottomLine;
    } else {
        return false
    }
};


</script>
<style lang="scss" scoped>
.customize-checkbox {
    border: 1px solid transparent;

    &.border-bottom-line {
        border-bottom: 1px solid $black-28;
    }

    .checkbox {
        border: 1px solid transparent;
        height: 26px;
        padding: 0 8px;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
    
        .box {
            position: relative;
            width: 10px;
            height: 10px;
            background-color: $black;
            border: 1px solid $black-28;
            margin-right: 4px;
    
            &.checked::before {
                position: absolute;
                content: "";
                background-image: url('@/assets/icons/icon-check.svg');
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
                left: 0px;
                top: 0px;
                width: 10px;
                height: 10px;
            }
        }

        &.selected:not(.disabled) {
            .checkbox {
                .box {
                    background-color: $black-28;
                    border: 1px solid $light-grey;
                }
            }
        }
    }

    .child-node {
        div.customize-radio {
            margin-left: 16px;
        }
    }
}
</style>