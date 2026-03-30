<template>
    <div :class="['monitor-status', position]" v-show="show">
        <div class="monitor-status-title">{{ toLanguageText(menuStateResult.monitorStatus.nodes.language!) }}</div>
        <div class="monitor-status-info input">
            <template v-for="currentInput in menuStateResult.input.nodes">
                <p v-if="currentInput.mode == ModeType.radio"
                    :class="{ action: currentInput.result == menuStateResult.input.result }"
                    v-text="`${toLanguageText(currentInput.language)}:`">
                </p>
                <p v-if="currentInput.mode == ModeType.radio"
                    :class="{ action: currentInput.result == menuStateResult.input.result }">
                    {{ currentInput.result == menuStateResult.input.result ? toLanguageText(Active.language) : toLanguageText(Inactive.language) }}
                </p>
            </template>
        </div>

        <div class="monitor-status-info setting">
            <p v-text="`${toLanguageText(menuStateResult.autoSwitchInput.name.language)}:`"></p>
            <p v-text="toLanguageText(menuStateResult.autoSwitchInput.state!.language!)"></p>
            <p v-text="`${toLanguageText(menuStateResult.color.name.language)}:`"></p>
            <p v-text="toLanguageText(menuStateResult.color.state?.language!)"></p>
            <p v-text="`${toLanguageText(menuStateResult.information.displayMode.language)}:`"></p>
            <p v-text="toLanguageText(displayModeResultLanguage)"></p>
        </div>

        <div class="monitor-status-info mode">
            <p v-text="`${toLanguageText(menuStateResult.information.currentMode.language)}:`"></p>
            <p v-text="menuStateResult.information.currentMode.result"></p>
            <p v-text="`${toLanguageText(menuStateResult.information.optimalMode.language)}:`"></p>
            <p v-text="menuStateResult.information.optimalMode.result"></p>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { toLanguageText } from '@/service/service';
import { ModeType } from '@/types';
import { menuStateResult } from '@/service/monitor-state-result';

const props = defineProps({
    show: {
        type: Boolean,
        default: true
    },
    position: {
        type: String,
        default: "Top"
    }
});

const Active = ref({
    language: {
        German: "Aktiv",
        SimplifiedChinese: "活动",
        TraditionalChinese: "使用中",
        English: "Active",
        Español: "Activo",
        French: "Actif",
        Italian: "Attiva",
        Japanese: "アクティブ",
        Nederlands: "Actief",
        BrazilianPortuguese: "Ativado",
        Russian: "Активен"
    }
});

const Inactive = ref({
    language: {
        German: "Inaktiv",
        SimplifiedChinese: "非活动",
        TraditionalChinese: "未使用",
        English: "Inactive",
        Español: "Inactivo",
        French: "Inactif",
        Italian: "Inattivo",
        Japanese: "非アクティブ",
        Nederlands: "Inactief",
        BrazilianPortuguese: "Inativa",
        Russian: "Неактивен"
    }
});

const displayModeResultLanguage = {
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


.monitor-status {
    position: absolute;
    top: 32px;
    left: calc((100% - 268px) / 2);
    color: $white;
    background-color: $black-16;
    border: 2px solid  $light-grey;
    padding: 12px 12px 20px;
    font-size: 10px;
    font-weight: bold;
    z-index: 1;
    width: 240px;
    height: 152px;

    &.Top {
        top: 32px;
        left: calc((100% - 268px) / 2);
    }
    &.Medium {
        top: calc((100% - 170px) / 2);
    }
    &.Bottom {
        top: unset;
        bottom: 32px;
    }

    .monitor-status-title {
        padding-bottom: 8px;
        margin-bottom: 12px;
        border-bottom: 1px solid $light-grey;
    }

    .monitor-status-info {
        display: grid;
        grid-template-columns: max-content max-content;
        gap: 0 16px;

        &.input {
            margin-bottom: 14px;

            .action {
                color: $grey-blue;
            }
        }

        &.setting {
            margin-bottom: 24px;
        }
    }
}
</style>