// 電源 > 自動睡眠模式

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes, OnNodes, OffNodes } from '../_utilities';

const BackNodesEnum = new BackNodes();
const OnNodesEnum = new OnNodes();
const OffNodesEnum = new OffNodes();

export default class AutoSleepModeNodes extends DefaultNodes implements Nodes {
    key = "AutoSleepMode";
    selected = OnNodesEnum.selected;
    result = OnNodesEnum.result;
    displayValue = true;
    size = 3;
    mode = ModeType.button;
    language = {
        German: "Automat. Ruhemodus",
        SimplifiedChinese: "自动睡眠模式",
        TraditionalChinese: "自動睡眠模式",
        English: "Auto-Sleep Mode",
        Español: "Modo de apagado automático",
        French: "Mode Veille automatique",
        Italian: "Modalità disattivazione automatica",
        Japanese: "自動スリープ モード",
        Nederlands: "Automatische slaapmodus",
        BrazilianPortuguese: "Modo Suspensão automática",
        Russian: "Автом. спящий режим"
    };
    nodes = [
        {
            ...JSON.parse(JSON.stringify(OnNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(OffNodesEnum)),
            parents: this.key
        },
        // 上一步
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key
        }
    ]
};