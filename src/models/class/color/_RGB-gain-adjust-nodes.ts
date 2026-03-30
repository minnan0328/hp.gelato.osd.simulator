// 顏色 > 自訂 RBG

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../_utilities';

const DefaultNodesEnum = new DefaultNodes();

export default class CustomRGBNodes extends DefaultNodes implements Nodes {
    key = "RGBGainAdjust";
    selected = "RGB Gain Adjust";
    result = "RGB Gain Adjust";
    assignItemDisplay = false;
    size = 3;
    mode = ModeType.button;
    language = {
        German: "RGB-Gain-Einstellung",
        SimplifiedChinese: "RGB 增益调整",
        TraditionalChinese: "RGB 增益調整",
        English: "RGB Gain Adjust",
        Español: "Ajuste de la ganancia RGB",
        French: "Réglage du gain RGB",
        Italian: "Regolazione guadagno RGB",
        Japanese: "RGBゲイン調整",
        Nederlands: "RGB-versterking aanpassen",
        BrazilianPortuguese: "Ajuste do ganho RGB",
        Russian: "Регулировка усиления RGB"
    };
    nodes = [
        // RGB range (0~255)
        // Red Color
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "RedColor",
            selected: 255,
            result: 255,
            parents: this.key,
            mode: ModeType.verticalRange,
            rangeMin: 0,
            rangeMax: 255,
            language: {
                German: "R",
                SimplifiedChinese: "R",
                TraditionalChinese: "R",
                English: "R",
                Español: "R",
                French: "R",
                Italian: "R",
                Japanese: "R",
                Nederlands: "R",
                BrazilianPortuguese: "R",
                Russian: "R"
            }
        },
        // Green Color
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "GreenColor",
            selected: 235,
            result: 235,
            parents: this.key,
            mode: ModeType.verticalRange,
            rangeMin: 0,
            rangeMax: 255,
            language: {
                German: "G",
                SimplifiedChinese: "G",
                TraditionalChinese: "G",
                English: "G",
                Español: "G",
                French: "G",
                Italian: "G",
                Japanese: "G",
                Nederlands: "G",
                BrazilianPortuguese: "G",
                Russian: "G"
            }
        },
        // Blue Color
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "BlueColor",
            selected: 245,
            result: 245,
            parents: this.key,
            mode: ModeType.verticalRange,
            rangeMin: 0,
            rangeMax: 255,
            language: {
                German: "B",
                SimplifiedChinese: "B",
                TraditionalChinese: "B",
                English: "B",
                Español: "B",
                French: "B",
                Italian: "B",
                Japanese: "B",
                Nederlands: "B",
                BrazilianPortuguese: "B",
                Russian: "B"
            }
        }
    ]
};