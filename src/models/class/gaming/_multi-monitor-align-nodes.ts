import { ModeType } from "@/types";
import type { Nodes } from "@/types";
import { DefaultNodes, BackNodes, OnNodes, OffNodes } from '../_utilities';
import ColorNodes from './_color/color-nodes';
const BackNodesEnum = new BackNodes();
const OnNodesEnum = new OnNodes();
const OffNodesEnum = new OffNodes();
const ColorNodesEnum = new ColorNodes();

export default class MultiMonitorAlignNodes extends DefaultNodes implements Nodes {
    key = "MultiMonitorAlign";
    selected = OffNodesEnum.selected;
    result = OffNodesEnum.result;
    displayValue = true;
    size = 4;
    mode = ModeType.button;
    language = {
        German: "Mehrere Monitore ausrichten",
        SimplifiedChinese: "多显示器对齐",
        TraditionalChinese: "多螢幕校正",
        English: "Multi-Monitor Align",
        Español: "Alineación de varios monitores",
        French: "Alignement multimoniteur",
        Italian: "Allineamento multi-monitor",
        Japanese: "マルチ モニターの配置",
        Nederlands: "Meerdere monitoren uitlijnen",
        BrazilianPortuguese: "Alinhamento multimonitor",
        Russian: "Выравнивание мониторов"
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
        {
            ...JSON.parse(JSON.stringify(ColorNodesEnum)),
            parents: this.key,
            disabled: false
        },
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key
        }
    ];
};