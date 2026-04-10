import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../_utilities';

const DefaultNodesEnum = new DefaultNodes();
export default class StandardNodes extends DefaultNodes implements Nodes {
    key = "Standard";
    selected = "Standard";
    result = "Standard";
    brightness = 52;
    rgb = { r: 254, g: 240, b: 255 };
    livePreview = true;
    mode = ModeType.radio;
    size = 4;
    language = {
        German: "Standard",
        SimplifiedChinese: "标准",
        TraditionalChinese: "標準",
        English: "Standard",
        Español: "Estándar",
        French: "Standard",
        Italian: "Standard",
        Japanese: "標準",
        Nederlands: "Standaard",
        BrazilianPortuguese: "Padrão",
        Russian: "Стандарт"
    };
    nodes = [
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            selected: null,
            result: null,
            mode: ModeType.info,
            parents: this.key,
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            selected: null,
            result: null,
            mode: ModeType.info,
            parents: this.key,
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            selected: null,
            result: null,
            mode: ModeType.info,
            parents: this.key,
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "sRGBMessage",
            selected: null,
            result: null,
            mode: ModeType.info,
            parents: this.key,
            language: {
                German: "Standardfarbraum für Arbeit und Web",
                SimplifiedChinese: "针对工作和网络的标准色域",
                TraditionalChinese: "適用於工作和網路的標準色域",
                English: "Standard gamut for work and web",
                Español: "Gama estándar para el trabajo y la web",
                French: "Gamme standard pour le travail/le web",
                Italian: "Gamma standard per lavoro e web",
                Japanese: "仕事やウェブ向けの標準色域",
                Nederlands: "Standaardgamma voor werk en web",
                BrazilianPortuguese: "Gama padrão para trabalho e Web",
                Russian: "Промышленный стандарт"
            }
        }
    ]
};