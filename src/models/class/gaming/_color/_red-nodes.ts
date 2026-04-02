import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../../_utilities';

export default class RedNodes extends DefaultNodes implements Nodes {
    key = "Red";
    selected = "HyperX Red";
    result = "HyperX Red";
    optionColor = "rgb(255, 0, 0)";
    livePreview = true;
    disabled = true;
    mode = ModeType.radio;
    language = {
        German: "Rot",
        SimplifiedChinese: "紅色",
        TraditionalChinese: "紅色",
        English: "HyperX Red",
        Español: "HyperX Rojo",
        French: "HyperX Rouge",
        Italian: "HyperX Rosso",
        Japanese: "HyperX 赤",
        Nederlands: "HyperX Rood",
        BrazilianPortuguese: "HyperX Vermelho",
        Russian: "HyperX Красный"
    };
}
