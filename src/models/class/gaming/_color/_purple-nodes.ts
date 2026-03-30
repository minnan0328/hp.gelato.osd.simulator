import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../../_utilities';

export default class PurpleNodes extends DefaultNodes implements Nodes {
    key = "Purple";
    selected = "Purple";
    result = "Purple";
    optionColor = "rgb(191, 15, 250)";
    livePreview = true;
    disabled = true;
    mode = ModeType.radio;
    language = {
        German: "Lila",
        SimplifiedChinese: "紫色",
        TraditionalChinese: "紫色",
        English: "Purple",
        Español: "Morado",
        French: "Violet",
        Italian: "Viola",
        Japanese: "紫",
        Nederlands: "Paars",
        BrazilianPortuguese: "Roxo",
        Russian: "Фиолетовый"
    };
}
