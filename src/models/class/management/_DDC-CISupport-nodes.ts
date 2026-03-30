// 管理 > 支援 DDC/DC

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes, OnNodes, OffNodes } from '../_utilities';

const BackNodesEnum = new BackNodes();
const OnNodesEnum = new OnNodes();
const OffNodesEnum = new OffNodes();

export default class DDCCISupportNodes extends DefaultNodes implements Nodes {
    key = "DDC/CISupport";
    selected = OnNodesEnum.selected;
    result = OnNodesEnum.result;
    displayValue = true;
    size = 3;
    mode = ModeType.button;
    language = {
        German: "DDC/CI-Unterstützung",
        SimplifiedChinese: "DDC/CI 支持",
        TraditionalChinese: "支援 DDC/CI",
        English: "DDC/CI Support",
        Español: "Compatibilidad DDC/CI",
        French: "Prise en charge DDC/CI",
        Italian: "Supporto DDC/CI",
        Japanese: "DDC/CI サポート",
        Nederlands: "DDC/CI-ondersteuning",
        BrazilianPortuguese: "Suporte DDC/CI",
        Russian: "Поддержка DDC/CI"
    };
    nodes = [
        {
            ...JSON.parse(JSON.stringify(OnNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(OffNodesEnum)),
            parents: this.key
        },
        // 上一步
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key
        }
    ]
};