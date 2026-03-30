<template>
    <div class="icon item" v-html="node.svgIcon" v-if="combination == false"></div>
    <div :class="['icon combination-icon', color]" v-html="node.svgIcon" v-if="combination && enabledIcon(node.result)"></div>
</template>
<script lang="ts" setup>
import type { Nodes } from '@/types/index';

const props = defineProps({
    node: {
        type: Object as () => Nodes,
        required: true
    },
    enabledIcon: {
        type: Array as () => string[],
        required: false,
        default: () => []
    },
    combination: {
        type: Boolean,
        required: false,
        default: false
    },
    color: {
        type: String,
        required: false,
        default: "white"
    },
    position: {
        type: Object as () => { x: string; y: string },
        required: false,
        default: () => ({ x: '0px', y: '0px' })
    }
});

function enabledIcon(icon: string | number | boolean | string[] | object |null) {
    return props.enabledIcon.includes(icon as string);
};

</script>

<style lang="scss" scoped>
@use '@/styles/mixin/gaming-setting.scss' as *;

.icon {
    width: 24px;
    height: 24px;

    &.item {
        :deep(svg) {
            margin-top: 2px;
        }
    }

    &.combination-icon:nth-child(1) {
        width: 24px;
        height: 24px;

        :deep(svg) {
            width: inherit;
            height: inherit;
        }
    }

    &.combination-icon:nth-child(2)  {
        width: 24px;
        height: 24px;

        :deep(svg) {
            width: inherit;
            height: inherit;
        }
    }
    
    &.combination-icon:nth-child(3) {
        width: 24px;
        height: 24px;

        :deep(svg) {
            width: inherit;
            height: inherit;
        }
    }

    &.combination-icon:nth-child(4) {
        width: 24px;
        height: 24px;

        :deep(svg) {
            width: inherit;
            height: inherit;
        }
    }

    &.combination-icon:nth-child(5) {
        width: 48px;
        height: 48px;

        :deep(svg) {
            width: inherit;
            height: inherit;
        }
    }


    @include multi-monitor-align-color();
    
}
</style>