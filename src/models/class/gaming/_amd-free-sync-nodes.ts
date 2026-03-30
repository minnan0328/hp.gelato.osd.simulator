import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes, OnNodes, OffNodes } from '../_utilities';
const BackNodesEnum = new BackNodes();
const OnNodesEnum = new OnNodes();
const OffNodesEnum = new OffNodes();

export default class amdFreeSync extends DefaultNodes implements Nodes {
    key = "AmdFreeSync";
    selected = OnNodesEnum.selected;
    result = OnNodesEnum.result;
    displayValue = true;
    size = 3;
    mode = ModeType.button;
    language = {
        German: "AMD FreeSync",
        SimplifiedChinese: "AMD FreeSync",
        TraditionalChinese: "AMD FreeSync",
        English: "AMD FreeSync",
        Español: "AMD FreeSync",
        French: "AMD FreeSync",
        Italian: "AMD FreeSync",
        Japanese: "AMD FreeSync",
        Nederlands: "AMD FreeSync",
        BrazilianPortuguese: "AMD FreeSync",
        Russian: "AMD FreeSync"
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
    ];
}