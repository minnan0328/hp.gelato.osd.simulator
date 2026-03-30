import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../../_utilities';

export default class GreenNodes extends DefaultNodes implements Nodes {
    key = "Green";
    selected = "Green";
    result = "Green";
    optionColor = "rgb(0, 255, 0)";
    livePreview = true;
    disabled = true;
    mode = ModeType.radio;
    language = {
        German: "Grün",
        SimplifiedChinese: "綠色",
        TraditionalChinese: "綠色",
        English: "Green",
        Español: "Verde",
        French: "Vert",
        Italian: "Verde",
        Japanese: "緑",
        Nederlands: "Groen",
        BrazilianPortuguese: "Verde",
        Russian: "Зелёный"
    };
}
