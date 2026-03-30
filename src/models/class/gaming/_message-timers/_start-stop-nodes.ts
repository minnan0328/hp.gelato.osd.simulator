import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../../_utilities';

export default class StartStopNodes extends DefaultNodes implements Nodes {
    key = "StartStop";
    selected = "Start / Stop";
    result = "Start / Stop";
    disabled = true;
    mode = ModeType.button;
    language = {
        German: "Start / Stop",
        SimplifiedChinese: "开始/结束",
        TraditionalChinese: "開始 / 停止",
        English: "Start / Stop",
        Español: "Iniciar / Parar",
        French: "Commencer / Arrêter",
        Italian: "Avvia / Arresta",
        Japanese: "スタート / ストップ",
        Nederlands: "Starten / stoppen",
        BrazilianPortuguese: "Iniciar / parar",
        Russian: "Пуск / стоп"
    };
}