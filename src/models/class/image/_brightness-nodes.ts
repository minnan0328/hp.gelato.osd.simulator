// 亮度 > 亮度

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../_utilities';
const DefaultNodesEnum = new DefaultNodes();
export default class BrightnessNodes extends DefaultNodes implements Nodes {
    key = "Brightness";
    selected = 80;
    result = 80;
    displayValue = true;
    size = 1;
    mode = ModeType.button;
    language = {
        German: "Helligkeit",
        SimplifiedChinese: "亮度",
        TraditionalChinese: "亮度",
        English: "Brightness",
        Español: "Brillo",
        French: "Luminosité",
        Italian: "Luminosità",
        Japanese: "輝度",
        Nederlands: "Helderheid",
        BrazilianPortuguese: "Brilho",
        Russian: "Яркость"
    };
    nodes = [
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "BrightnessRange",
            selected: this.selected,
            result: this.result,
            parents: this.key,
            mode: ModeType.verticalRange,
            rangeMin: 0,
            rangeMax: 100,
            rangeMaxIcon: "icon-brightness.svg",
            rangeMinIcon: "icon-brightness.svg",
            language: this.language
        }
    ];
};