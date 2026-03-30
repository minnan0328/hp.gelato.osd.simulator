<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { onMounted } from 'vue';
import config from '@/config/config';

onMounted(() => {
	const company = config.company ? `${config.company}_` : "";
	document.title = `${company}${config.screenModel}`;
});
</script>

<template>
	<RouterView />
</template>

<style lang="scss" scoped>

</style>
