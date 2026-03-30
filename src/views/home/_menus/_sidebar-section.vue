<template>
    <div class="sidebar setting">
        <div class="hp-logo">
            <img :src="hpLogo" alt="">
        </div>
        <div class="options setting-item">
            <template  v-for="menu in menus.nodes" v-text="toLanguageText(menu.language)">
                <div :class="['option item merge-grid', { selected: menuState.menuPanel?.key == menu.key, focus: menuState.menuPanel?.key == menu.key && menuState.secondPanel }]"
                    v-if="isEnableNode(menu)" v-text="toLanguageText(menu.language!)">
                </div>
            </template>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Nodes } from '@/types';
import { isEnableNode, toLanguageText } from '@/service/service';
import hpLogo from '@/assets/images/hp-logo.svg';

const props = defineProps<{
    menus: Nodes,
    menuState: {
        menuPanel: Nodes | null,
        secondPanel: Nodes | null
    }
}>();

</script>

<style lang="scss" scoped>
    .sidebar {
        width: 120px;
        height: 100%;
        background-color: $black-1C;

        .hp-logo {
            padding: 8px 0;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 60%;
            }
        }
    }
</style>