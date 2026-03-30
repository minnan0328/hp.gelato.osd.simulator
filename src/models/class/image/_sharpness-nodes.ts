// 影像 > 銳利度

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes } from '../_utilities';
const DefaultNodesEnum = new DefaultNodes();
const BackNodesEnum = new BackNodes();

export default class SharpnessNodes extends DefaultNodes implements Nodes {
    key = "Sharpness";
    selected = "0";
    result = "0";
    displayValue = true;
    size = 8;
    mode = ModeType.button;
    language = {
        German: "Schärfe",
        SimplifiedChinese: "清晰度",
        TraditionalChinese: "銳利度",
        English: "Sharpness",
        Español: "Nitidez",
        French: "Netteté",
        Italian: "Nitidezza",
        Japanese: "シャープネス",
        Nederlands: "Scherpte",
        BrazilianPortuguese: "Nitidez",
        Russian: "Резкость"
    };
    nodes = [
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "– 3",
            selected: "– 3",
            result: "– 3",
            livePreview: true,
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "– 3",
                SimplifiedChinese: "– 3",
                TraditionalChinese: "– 3",
                English: "– 3",
                Español: "– 3",
                French: "– 3",
                Italian: "– 3",
                Japanese: "– 3",
                Nederlands: "– 3",
                BrazilianPortuguese: "– 3",
                Russian: "– 3"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "– 2",
            selected: "– 2",
            result: "– 2",
            livePreview: true,
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "– 2",
                SimplifiedChinese: "– 2",
                TraditionalChinese: "– 2",
                English: "– 2",
                Español: "– 2",
                French: "– 2",
                Italian: "– 2",
                Japanese: "– 2",
                Nederlands: "– 2",
                BrazilianPortuguese: "– 2",
                Russian: "– 2"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "– 1",
            selected: "– 1",
            result: "– 1",
            livePreview: true,
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "– 1",
                SimplifiedChinese: "– 1",
                TraditionalChinese: "– 1",
                English: "– 1",
                Español: "– 1",
                French: "– 1",
                Italian: "– 1",
                Japanese: "– 1",
                Nederlands: "– 1",
                BrazilianPortuguese: "– 1",
                Russian: "– 1"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "0",
            selected: "0",
            result: "0",
            livePreview: true,
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "0",
                SimplifiedChinese: "0",
                TraditionalChinese: "0",
                English: "0",
                Español: "0",
                French: "0",
                Italian: "0",
                Japanese: "0",
                Nederlands: "0",
                BrazilianPortuguese: "0",
                Russian: "0"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "+ 1",
            selected: "+ 1",
            result: "+ 1",
            livePreview: true,
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "+ 1",
                SimplifiedChinese: "+ 1",
                TraditionalChinese: "+ 1",
                English: "+ 1",
                Español: "+ 1",
                French: "+ 1",
                Italian: "+ 1",
                Japanese: "+ 1",
                Nederlands: "+ 1",
                BrazilianPortuguese: "+ 1",
                Russian: "+ 1"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "+ 2",
            selected: "+ 2",
            result: "+ 2",
            livePreview: true,
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "+ 2",
                SimplifiedChinese: "+ 2",
                TraditionalChinese: "+ 2",
                English: "+ 2",
                Español: "+ 2",
                French: "+ 2",
                Italian: "+ 2",
                Japanese: "+ 2",
                Nederlands: "+ 2",
                BrazilianPortuguese: "+ 2",
                Russian: "+ 2"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "+ 3",
            selected: "+ 3",
            result: "+ 3",
            livePreview: true,
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "+ 3",
                SimplifiedChinese: "+ 3",
                TraditionalChinese: "+ 3",
                English: "+ 3",
                Español: "+ 3",
                French: "+ 3",
                Italian: "+ 3",
                Japanese: "+ 3",
                Nederlands: "+ 3",
                BrazilianPortuguese: "+ 3",
                Russian: "+ 3"
            }
        },
        // 上一步
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key,
        }
    ];
};