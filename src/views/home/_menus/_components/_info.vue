<template>
    <div v-if="currentNode.mode == ModeType.info" 
        :class="['item', { 'merge-grid': currentNode.mergeGrid, disabled: currentNode.disabled }]"
        v-text="`${toLanguageText(currentNode.language!)}${enabledSymbol ? ':' : ''}`">
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
    enabledSymbol: {
        type: Boolean,
        default: false
    }
});
</script>