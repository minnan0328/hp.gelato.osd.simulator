<template>
    <div class="footer">
        <div class="current-mode">
            {{ toLanguageText(language) }}: {{ menuStateResult.information.currentMode.result }}
        </div>  
        <div class="current-input">
            {{ toLanguageText(menuStateResult.input.language) }}: {{ menuStateResult.input.result }}
        </div>
    </div>

</template>

<script lang="ts" setup>
import { menuStateResult } from '@/service/monitor-state-result';
import { toLanguageText } from '@/service/service';

const language = {
    German: "Normal",
    SimplifiedChinese: "正常",
    TraditionalChinese: "正常",
    English: "Normal",
    Español: "Normal",
    French: "Normal",
    Italian: "Normale",
    Japanese: "標準",
    Nederlands: "Normaal",
    BrazilianPortuguese: "Normal",
    Russian: "Обычный"
};


</script>

<style lang="scss" scoped>
	.footer {
        padding: 6px 12px;
		color: rgb(156, 156, 156);
		font-size: 10px;
		position: absolute;
		bottom: 0;
		width: calc(100% - 24px);
		display: flex;
		justify-content: space-between;
	}
</style>