<template>
    <div v-if="currentNodes.mode == ModeType.paginationButton
        && currentNodes.key == 'NextPageButtons'
        && (previousNodes.nodes!.length + 1) > previousNodes.size"
        :class="['item next-page-btn', {
            selected: nodes?.key == currentNodes.key,
            'merge-grid': currentNodes.mergeGrid,
            disabled: currentNodes.disabled
        }]">
    </div>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import type { Nodes } from '@/types';
import { ModeType } from '@/types';

const props = defineProps({
    currentNodes: {
        type: Object as PropType<Nodes>,
        required: true
    },
    nodes: {
        type: Object as PropType<Nodes | null>,
        required: false,
        default: null
    },
    previousNodes: {
        type: Object as PropType<Nodes>,
        required: true,
    }
});
</script>