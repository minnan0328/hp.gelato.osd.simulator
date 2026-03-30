<template>
    <div v-if="currentNode.mode == ModeType.button" 
        :class="['item ', {
            'merge-grid': currentNode.mergeGrid,
            'border-bottom-line': bottomLine,
            selected: nodes && nodes.key == currentNode.key,
            focus: nodes && nodes == currentNode && childNodes,
            disabled: currentNode.disabled
        }]">
        <span v-text="toLanguageText(currentNode.language!)"></span>
        <!-- <span v-if="previousNodes && previousNodes.key == 'FactoryReset' && currentNode.result == 'Yes'">（ENERGY STAR®）</span> -->
    </div>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import type { Nodes } from '@/types';
import { toLanguageText } from '@/service/service';
import { ModeType } from '@/types';

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
    childNodes: {
        type: Object as PropType<Nodes | null>,
        required: false,
        default: null
    },
    currentPanelNumber: {
        type: Number,
        default: 0
    },
    bottomLine: {
        type: Boolean,
        default: true
    }
});
</script>