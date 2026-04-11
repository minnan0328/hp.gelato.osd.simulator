import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes } from '../../_utilities';

export default class BottomLeftNodes extends DefaultNodes implements Nodes {
    key = "BottomLeft";
    selected = "Bottom-Left";
    result = "Bottom-Left";
    size = 3;
    mode = ModeType.radio;
    language = {
        German: "Unten Links",
        SimplifiedChinese: "左下",
        TraditionalChinese: "左下",
        English: "Bottom Left",
        Español: "Abajo a la izquierda",
        French: "En bas à gauche",
        Italian: "In basso a sinistra",
        Japanese: "左下",
        Nederlands: "Beneden links",
        BrazilianPortuguese: "Canto inferior esquerdo",
        Russian: "Внизу слева"
    };
}
