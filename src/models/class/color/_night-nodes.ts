// 顏色 > 冷色

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../_utilities';

const DefaultNodesEnum = new DefaultNodes();
export default class CoolNodes extends DefaultNodes implements Nodes {
    key = "Night";
    selected = "Night";
    result = "Night";
    brightness = 44;
    rgb = { r: 255, g: 188, b: 90 };
    livePreview = true;
    mode = ModeType.radio;
    size = 7;
    language = {
        German: "Nacht",
        SimplifiedChinese: "夜晚",
        TraditionalChinese: "夜間",
        English: "Night",
        Español: "Noche",
        French: "Nuit",
        Italian: "Notte",
        Japanese: "夜",
        Nederlands: "Nacht",
        BrazilianPortuguese: "Noite",
        Russian: "Ночь"
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
            key: "NightMessage",
            selected: null,
            result: null,
            mode: ModeType.info,
            parents: this.key,
            language: {
                German: "Schwaches blaues Licht",
                SimplifiedChinese: "低蓝光",
                TraditionalChinese: "低藍光",
                English: "Low Blue Light",
                Español: "Luz azul claro",
                French: "Voyant bleu faible",
                Italian: "Riduci luce blu",
                Japanese: "低ブルー ライト",
                Nederlands: "Laag blauw licht",
                BrazilianPortuguese: "Luz azul fraca",
                Russian: "Ослабление синего цвета"
            }
        }
    ]
};