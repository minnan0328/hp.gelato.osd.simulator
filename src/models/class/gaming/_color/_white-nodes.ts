import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../../_utilities';

export default class WhiteNodes extends DefaultNodes implements Nodes {
    key = "White";
    selected = "White";
    result = "White";
    optionColor = "rgb(255, 255, 255)";
    livePreview = true;
    mode = ModeType.radio;
    language = {
        German: "Weiß",
        SimplifiedChinese: "白色",
        TraditionalChinese: "白色",
        English: "White",
        Español: "Blanco",
        French: "Blanc",
        Italian: "Bianco",
        Japanese: "白",
        Nederlands: "Wit",
        BrazilianPortuguese: "Branco",
        Russian: "Белый"
    };
}
