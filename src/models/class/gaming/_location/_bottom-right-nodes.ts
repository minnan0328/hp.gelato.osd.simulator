import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes } from '../../_utilities';

export default class BottomRightNodes extends DefaultNodes implements Nodes {
    key = "BottomRight";
    selected = "Bottom-Right";
    result = "Bottom-Right";
    size = 3;
    mode = ModeType.radio;
    language = {
        German: "Unten Rechts",
        SimplifiedChinese: "右下",
        TraditionalChinese: "右下",
        English: "Bottom Right",
        Español: "Abajo a la derecha",
        French: "En bas à droite",
        Italian: "In basso a destra",
        Japanese: "右下",
        Nederlands: "Beneden rechts",
        BrazilianPortuguese: "Canto inferior direito",
        Russian: "Внизу справа"
    };
}
