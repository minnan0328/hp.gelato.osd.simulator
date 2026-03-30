<template>
    <div v-if="currentNode.mode == ModeType.radio"
        :class="['customize-radio item',  currentNode.key, currentNode.parents, {
            selected: nodes?.key == currentNode.key,
            'border-bottom-line': isLastNode(currentNode, previousNodes!),
            disabled: currentNode.disabled
        }]">
        <div :class="['round', { checked: isSelected(currentNode, previousNodes), disabled: currentNode.disabled }]"></div>
        <div v-if="currentNode.optionColor" class="color-box" :style="{ backgroundColor: currentNode.optionColor }"></div>
        <div v-else v-text="toLanguageText(currentNode.language!)"></div>
    </div>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import type { Nodes } from '@/types';
import { ModeType } from '@/types';
import { toLanguageText } from '@/service/service';

const props = defineProps({
    currentNode: {
        type: Object as PropType<Nodes>,
        required: true
    },
    nodes: {
        type: Object as PropType<Nodes | null>,
        required: false,
        default: null
    },
    previousNodes: {
        type: Object as PropType<Nodes | null>,
        required: false,
        default: null
    },
    bottomLine: {
        type: Boolean,
        default: true
    }
});

function isSelected(node: Nodes, previousNodes: (Nodes | null)) {
    return previousNodes!.selected == node.selected;
}


function isLastNode(node: Nodes, previousNodes: Nodes): boolean {
    if(previousNodes.nodes) {
        let nodesList = previousNodes.nodes.filter(n => n.mode == ModeType.radio);

        return nodesList[nodesList.length - 1]!.key == node.key && props.bottomLine;
    } else {
        return false
    }
};


</script>
<style lang="scss" scoped>
.customize-radio {
    height: 26px;
    border: 1px solid transparent;
    padding: 0 8px;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;

    &.border-bottom-line {
        border-bottom: 1px solid $black-28;
    }

    &.AudioFollowsVideo {
        padding-left: 20px;
    }

    .round {
        position: relative;
        width: 10px;
        height: 10px;
        background-color: $black;
        border: 1px solid $black-28;
        border-radius: 50%;
        margin-right: 4px;

        &.checked::before {
            position: absolute;
            content: "";
            width: 6px;
            height: 6px;
            background-color: $light-grey;
            border-radius: 50%;
            left: 2px;
            top: 2px;
        }
    }

    .color-box {
        width: 16px;
        height: 16px;
    }

    &.disabled {
        color: $black-50;
    }

    &.selected:not(.disabled) {
        &.customize-radio {
            .round {
                background-color: $black-28;
                border: 1px solid $light-grey;

                &.checked::before {
                    background-color: $white;
                }
            }
        }
    }
}
</style>