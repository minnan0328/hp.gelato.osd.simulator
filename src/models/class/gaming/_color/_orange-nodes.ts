import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../../_utilities';

export default class OrangeNodes extends DefaultNodes implements Nodes {
    key = "Orange";
    selected = "Orange";
    result = "Orange";
    optionColor = "rgb(255, 139, 6)";
    livePreview = true;
    mode = ModeType.radio;
    language = {
        German: "Orange",
        SimplifiedChinese: "橙色",
        TraditionalChinese: "橙色",
        English: "Orange",
        Español: "Naranja",
        French: "Orange",
        Italian: "Arancione",
        Japanese: "オレンジ",
        Nederlands: "Oranje",
        BrazilianPortuguese: "Laranja",
        Russian: "Оранжевый"
    };
}
