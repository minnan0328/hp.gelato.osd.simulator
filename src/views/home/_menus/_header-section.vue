<template>
    <div class="header">
        <p>{{config.company}} {{config.screenModel}}</p>
    </div>
</template>

<script lang="ts" setup>
import config from '@/config/config';
</script>

<style lang="scss" scoped>
	.header {
		padding: 6px 12px;
		color: $white;
		font-size: 10px;
	}
</style>