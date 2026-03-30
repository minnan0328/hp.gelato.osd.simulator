<template>
    <div class="modal confirm">

        <img class="warn-img" src="@/assets/images/warning.png" alt="warn" />

        <div class="title" v-text="toLanguageText(mainSectionNodes?.language!)"></div>
        <div class="confirm-text" v-text="toLanguageText(secondarySectionNodes?.language!)"></div>
        <div class="confirm-button-section">
            <button :class="['confirm-button', secondNodes.result, {
                selected: secondNodes.result == thirdSectionNodes?.result!
            }]"
                v-for="secondNodes in secondarySectionNodes!.nodes"
                v-text="toLanguageText(secondNodes?.language!)">
            </button>
        </div>

    </div>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import type { Nodes } from '@/types/index';
import { toLanguageText } from '@/service/_to-display-language-text';

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

</script>
<style lang="scss" scoped>
</style>