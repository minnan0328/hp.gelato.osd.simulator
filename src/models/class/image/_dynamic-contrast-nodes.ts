// 亮度 > 動態對比

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes, OnNodes, OffNodes } from '../_utilities';

const BackNodesEnum = new BackNodes();
const OnNodesEnum = new OnNodes();
const OffNodesEnum = new OffNodes();

export default class DynamicContrastNodes extends DefaultNodes implements Nodes {
    key = "DynamicContrast";
    selected = OffNodesEnum.selected;
    result = OffNodesEnum.result;
    displayValue = true;
    size = 3;
    mode = ModeType.button;
    language = {
        German: "Dynamischer Kontrast",
        SimplifiedChinese: "动态对比度",
        TraditionalChinese: "動態對比",
        English: "Dynamic Contrast",
        Español: "Contraste dinámico",
        French: "Contraste dynamique",
        Italian: "Contrasto dinamico",
        Japanese: "ダイナミック コントラスト",
        Nederlands: "Dynamisch contrast",
        BrazilianPortuguese: "Contraste dinâmico",
        Russian: "Динамическая контрастность"
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