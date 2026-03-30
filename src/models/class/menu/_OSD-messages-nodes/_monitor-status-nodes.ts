// 亮度 > 螢幕狀態

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes, OffNodes, TopNodes, MediumNodes, BottomNodes } from '../../_utilities';

const BackNodesEnum = new BackNodes();
const OffNodesEnum = new OffNodes();
const TopNodesEnum = new TopNodes();
const MediumNodesEnum = new MediumNodes();
const BottomNodesEnum = new BottomNodes();

export default class MonitorStatusNodes extends DefaultNodes implements Nodes {
    key = "MonitorStatus";
    selected = TopNodesEnum.selected;
    result = TopNodesEnum.result;
    displayValue = true;
    size = 5;
    mode = ModeType.button;
    language = {
        German: "Monitorstatus",
        SimplifiedChinese: "显示器状态",
        TraditionalChinese: "螢幕狀態",
        English: "Monitor Status",
        Español: "Estado del monitor",
        French: "État du moniteur",
        Italian: "Stato Monitor",
        Japanese: "モニター ステータス",
        Nederlands: "Monitor Status",
        BrazilianPortuguese: "Status do Monitor",
        Russian: "Состояние монитора"
    };
    nodes = [
        {
            ...JSON.parse(JSON.stringify(OffNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(TopNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(MediumNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(BottomNodesEnum)),
            parents: this.key
        },
        // 上一步
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key
        }
    ]
};