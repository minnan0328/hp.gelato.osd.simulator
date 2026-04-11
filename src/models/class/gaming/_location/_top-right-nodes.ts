import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes } from '../../_utilities';

export default class TopRightNodes extends DefaultNodes implements Nodes {
    key = "TopRight";
    selected = "Top-Right";
    result = "Top-Right";
    size = 3;
    mode = ModeType.radio;
    language = {
        German: "Oben Rechts",
        SimplifiedChinese: "右上",
        TraditionalChinese: "右上",
        English: "Top Right",
        Español: "Arriba a la derecha",
        French: "En haut à droite",
        Italian: "In alto a destra",
        Japanese: "右上",
        Nederlands: "Boven rechts",
        BrazilianPortuguese: "Canto superior direito",
        Russian: "Вверху справа"
    };
}