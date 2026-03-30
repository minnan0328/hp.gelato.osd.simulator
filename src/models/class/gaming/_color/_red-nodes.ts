import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../../_utilities';

export default class RedNodes extends DefaultNodes implements Nodes {
    key = "Red";
    selected = "Red";
    result = "Red";
    optionColor = "rgb(255, 0, 0)";
    livePreview = true;
    disabled = true;
    mode = ModeType.radio;
    language = {
        German: "Rot",
        SimplifiedChinese: "紅色",
        TraditionalChinese: "紅色",
        English: "Red",
        Español: "Rojo",
        French: "Rouge",
        Italian: "Rosso",
        Japanese: "赤",
        Nederlands: "Rood",
        BrazilianPortuguese: "Vermelho",
        Russian: "Красный"
    };
}
