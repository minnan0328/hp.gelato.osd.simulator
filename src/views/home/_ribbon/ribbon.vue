<template>
    <div class="ribbon">
        <div class="logo">
            <img src="@/assets/images/hp-old-logo.png" alt="HP">
        </div>
        <div class="title">
            <h2>{{config.screenModel}} OSD Simulator</h2>
        </div>
    </div>
</template>
<script setup lang="ts">
import config from '@/config/config';
</script>
<style lang="scss" scoped>

.ribbon {
    background-color: #0083ca;
    width: initial;
    height: 64px;
    display: flex;
    padding: 0 48px;
    margin-top: 40px;

    .title {
        margin-left: 28px;
        font-size: 28px;
        display: flex;
        align-items: center;
        color: $white;
    }

    .logo {
        display: flex;
        align-items: center;
    }
}
</style>