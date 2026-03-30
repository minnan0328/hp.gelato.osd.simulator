import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../../_utilities';

export default class BlueNodes extends DefaultNodes implements Nodes {
    key = "Blue";
    selected = "Blue";
    result = "Blue";
    optionColor = "rgb(0, 0, 255)";
    livePreview = true;
    disabled = true;
    mode = ModeType.radio;
    language = {
        German: "Blau",
        SimplifiedChinese: "藍色",
        TraditionalChinese: "藍色",
        English: "Blue",
        Español: "Azul",
        French: "Bleu",
        Italian: "Blu",
        Japanese: "青",
        Nederlands: "Blauw",
        BrazilianPortuguese: "Azul",
        Russian: "Синий"
    };
}
