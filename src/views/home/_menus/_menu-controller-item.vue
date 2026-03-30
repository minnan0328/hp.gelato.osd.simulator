<template>
    <div :class="['menu-controller', { 'accessibility': menuStateResult.accessibility }]">
        <template v-for="(currentButton, index) in handleControllerButtonList">
            <div :class="['controller-item', {
                'controller-item-center': index == 0,
                'controller-item-top': index == 1,
                'controller-item-bottom': index == 2,
                'controller-item-left': index == 3,
                'controller-item-right': index == 4
            }]" v-if="currentButton?.image">
                <img :src="currentButton?.image" alt="">
            </div>
            <div :class="['controller-item', {
                'controller-item-center': index == 0,
                'controller-item-top': index == 1,
                'controller-item-bottom': index == 2,
                'controller-item-left': index == 3,
                'controller-item-right': index == 4
            }]" v-else></div>
        </template>
    </div>
</template>

<script lang="ts" setup>
import type { ControllerButtonList } from '@/types';
import { menuStateResult } from '@/service/monitor-state-result';

const props = defineProps<{
    handleControllerButtonList: ControllerButtonList[];
}>();

</script>

<style lang="scss" scoped>

.menu-controller {
	position: absolute;
	display: flex;
    background-color: $black-28;
    border: 0.8px solid $black;
    width: 84px;
    height: 84px;
	bottom: 30px;
	right: 12px;
    z-index: 3;

    &.accessibility {
        transform: scale(1.1);
        right: 10px;
    }

    $menuitem-icon-width: 18px;
    $menuitem-icon-height: 18px;

	.controller-item {
		display: flex;
		justify-content: center;
		align-items: center;
		width: $menuitem-icon-width;
		height: $menuitem-icon-height;

		img {
            width: 16px;
            transform:  rotate(v-bind("menuStateResult.menuRotation"));
		}

        &.controller-item-center {
            position: absolute;
            top: calc(50% - #{$menuitem-icon-height} / 2);
            left: calc(50% - #{$menuitem-icon-width} / 2);
        }

        &.controller-item-top {
            position: absolute;
            left: calc(50% - #{$menuitem-icon-width} / 2);

            &::before {
                position: absolute;
                content: "";
                width: 100%;
                height: 100%;
                background-image: url('@/assets/icons/menu-arrow/menu-arrow-top.svg');
                background-size: 19px 19px;
                background-repeat: no-repeat;
                top: $menuitem-icon-height;
            }
        }

        &.controller-item-right {
            position: absolute;
            top: calc(50% - #{$menuitem-icon-height} / 2);
            right: 0px;
            
            &::before {
                position: absolute;
                content: "";
                width: 100%;
                height: 100%;
                background-image: url('@/assets/icons/menu-arrow/menu-arrow-right.svg');
                background-size: 19px 19px;
                background-repeat: no-repeat;
                right: $menuitem-icon-width;
            }
        }

        &.controller-item-left {
            position: absolute;
            top: calc(50% - #{$menuitem-icon-height} / 2);
            left: 0px;

            &::before {
                position: absolute;
                content: "";
                width: 100%;
                height: 100%;
                background-image: url('@/assets/icons/menu-arrow/menu-arrow-left.svg');
                background-size: 19px 19px;
                background-repeat: no-repeat;
                left: $menuitem-icon-width;
            }
        }

        &.controller-item-bottom {
            position: absolute;
            left: calc(50% - #{$menuitem-icon-width} / 2);
            bottom: 0px;

            &::before {
                position: absolute;
                content: "";
                width: 100%;
                height: 100%;
                background-image: url('@/assets/icons/menu-arrow/menu-arrow-bottom.svg');
                background-size: 19px 19px;
                background-repeat: no-repeat;
                bottom: $menuitem-icon-height;
            }
        }
	}
}
</style>