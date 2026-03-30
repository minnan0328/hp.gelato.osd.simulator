import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../../_utilities';

export default class BlueNodes extends DefaultNodes implements Nodes {
    key = "Black";
    selected = "Black";
    result = "Black";
    optionColor = "rgb(0, 0, 0)";
    livePreview = true;
    disabled = true;
    mode = ModeType.radio;
    language = {
        German: "Schwarz",
        SimplifiedChinese: "黑色",
        TraditionalChinese: "黑色",
        English: "Black",
        Español: "Negro",
        French: "Noir",
        Italian: "Nero",
        Japanese: "黒",
        Nederlands: "Zwart",
        BrazilianPortuguese: "Preto",
        Russian: "Чёрный",
    };
}
