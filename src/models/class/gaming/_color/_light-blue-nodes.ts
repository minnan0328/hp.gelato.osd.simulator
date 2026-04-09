import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../../_utilities';

export default class LightBlueNodes extends DefaultNodes implements Nodes {
    key = "Light Blue";
    selected = "Light-Blue";
    result = "Light-Blue";
    optionColor = "rgb(104, 149, 209)";
    livePreview = true;
    mode = ModeType.radio;
    language = {
        German: "Hellblau",
        SimplifiedChinese: "淺藍色",
        TraditionalChinese: "淺藍色",
        English: "Light Blue",
        Español: "Azul Claro",
        French: "Bleu Clair",
        Italian: "Azzurro",
        Japanese: "水色",
        Nederlands: "Lichtblauw",
        BrazilianPortuguese: "Azul Claro",
        Russian: "Голубой"
    };
}
