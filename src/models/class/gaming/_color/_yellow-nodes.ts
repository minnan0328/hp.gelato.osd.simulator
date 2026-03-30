import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../../_utilities';

export default class YellowNodes extends DefaultNodes implements Nodes {
    key = "Yellow";
    selected = "Yellow";
    result = "Yellow";
    optionColor = "rgb(255, 255, 0)";
    livePreview = true;
    disabled = true;
    mode = ModeType.radio;
    language = {
        German: "Gelb",
        SimplifiedChinese: "黃色",
        TraditionalChinese: "黃色",
        English: "Yellow",
        Español: "Amarillo",
        French: "Jaune",
        Italian: "Giallo",
        Japanese: "黄",
        Nederlands: "Geel",
        BrazilianPortuguese: "Amarelo",
        Russian: "Жёлтый"
    };
}
