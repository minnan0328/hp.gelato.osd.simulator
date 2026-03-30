import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../../_utilities';

export default class ResetTimerNodes extends DefaultNodes implements Nodes {
    key = "ResetTimer";
    selected = "Reset Timer";
    result = "Reset Timer";
    disabled = true;
    mode = ModeType.button;
    language = {
        German: "Timer zurücksetzen",
        SimplifiedChinese: "重置计时器",
        TraditionalChinese: "重設計時器",
        English: "Reset Timer",
        Español: "Resetear temporizador",
        French: "Réinitialisez la minuterie",
        Italian: "Timer di reset",
        Japanese: "タイマーのリセット",
        Nederlands: "Timer opnieuw instellen",
        BrazilianPortuguese: "Repor temporizador",
        Russian: "Сбросить таймер"
    };
}