// 亮度 > 對比

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../_utilities';
const DefaultNodesEnum = new DefaultNodes();

export default class contrastNodes extends DefaultNodes implements Nodes {
    key = "Contrast";
    selected = 100;
    result = 100;
    displayValue = true;
    size = 1;
    mode = ModeType.button;
    language = {
        German: "Kontrast",
        SimplifiedChinese: "对比度",
        TraditionalChinese: "對比",
        English: "Contrast",
        Español: "Contraste",
        French: "Contraste",
        Italian: "Contrasto",
        Japanese: "コントラスト",
        Nederlands: "Contrast",
        BrazilianPortuguese: "Contraste",
        Russian: "Контрастность"
    };
    nodes = [
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "ContrastNodes",
            selected: this.selected,
            result: this.result,
            parents: this.key,
            mode: ModeType.verticalRange,
            rangeMin: 0,
            rangeMax: 100,
            rangeMaxIcon: "icon-contrast.svg",
            rangeMinIcon: "icon-contrast.svg",
            language: this.language
        }
    ]
};