// 管理 > 無障礙

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes } from '../_utilities';

const DefaultNodesEnum = new DefaultNodes();
const BackNodesEnum = new BackNodes();

export default class DisplayPortModeNodes extends DefaultNodes implements Nodes {
    key = "DisplayPortMode";
    selected = "DisplayPort 1.4";
    result = "DisplayPort 1.4";
    assignItemDisplay = false;
    displayValue = true;
    size = 3;
    mode = ModeType.button;
    language = {
        German: "DisplayPort-Modus",
        SimplifiedChinese: "DisplayPort 模式",
        TraditionalChinese: "DisplayPort 模式",
        English: "DisplayPort Mode",
        Español: "Modo DisplayPort",
        French: "Mode DisplayPort",
        Italian: "Modalità DisplayPort",
        Japanese: "DisplayPortモード",
        Nederlands: "DisplayPort-modus",
        BrazilianPortuguese: "Modo DisplayPort",
        Russian: "Режим DisplayPort"
    };
    nodes = [
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "DisplayPort1.1",
            selected: "DisplayPort 1.1",
            result: "DisplayPort 1.1",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "DisplayPort 1.1",
                SimplifiedChinese: "DisplayPort 1.1",
                TraditionalChinese: "DisplayPort 1.1",
                English: "DisplayPort 1.1",
                Español: "DisplayPort 1.1",
                French: "DisplayPort 1.1",
                Italian: "DisplayPort 1.1",
                Japanese: "DisplayPort 1.1",
                Nederlands: "DisplayPort 1.1",
                BrazilianPortuguese: "DisplayPort 1.1",
                Russian: "DisplayPort 1.1"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "DisplayPort1.2",
            selected: "DisplayPort 1.2",
            result: "DisplayPort 1.2",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "DisplayPort 1.2",
                SimplifiedChinese: "DisplayPort 1.2",
                TraditionalChinese: "DisplayPort 1.2",
                English: "DisplayPort 1.2",
                Español: "DisplayPort 1.2",
                French: "DisplayPort 1.2",
                Italian: "DisplayPort 1.2",
                Japanese: "DisplayPort 1.2",
                Nederlands: "DisplayPort 1.2",
                BrazilianPortuguese: "DisplayPort 1.2",
                Russian: "DisplayPort 1.2"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "DisplayPort1.4",
            selected: "DisplayPort 1.4",
            result: "DisplayPort 1.4",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "DisplayPort 1.4",
                SimplifiedChinese: "DisplayPort 1.4",
                TraditionalChinese: "DisplayPort 1.4",
                English: "DisplayPort 1.4",
                Español: "DisplayPort 1.4",
                French: "DisplayPort 1.4",
                Italian: "DisplayPort 1.4",
                Japanese: "DisplayPort 1.4",
                Nederlands: "DisplayPort 1.4",
                BrazilianPortuguese: "DisplayPort 1.4",
                Russian: "DisplayPort 1.4"
            }
        },
        // 上一步
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key
        }
    ]
};