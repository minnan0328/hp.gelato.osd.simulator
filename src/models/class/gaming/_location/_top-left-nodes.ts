import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes } from '../../_utilities';

export default class TopLeftNodes extends DefaultNodes implements Nodes {
    key = "TopLeft";
    selected = "Top-Left";
    result = "Top-Left";
    size = 3;
    mode = ModeType.radio;
    disabled = true;
    language = {
        German: "Oben Links",
        SimplifiedChinese: "左上",
        TraditionalChinese: "左上",
        English: "Top Left",
        Español: "Arriba a la izquierda",
        French: "En haut à gauche",
        Italian: "In alto a sinistra",
        Japanese: "左上",
        Nederlands: "Boven links",
        BrazilianPortuguese: "Canto superior esquerdo",
        Russian: "Вверху слева"
    };
}
