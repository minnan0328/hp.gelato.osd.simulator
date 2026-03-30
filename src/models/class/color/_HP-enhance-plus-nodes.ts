// 顏色 > HP Enhance+

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes, LowNodes, MediumNodes, HighNodes } from '../_utilities';

const BackNodesEnum = new BackNodes();
const LowNodesEnum = new LowNodes();
const MediumNodesEnum = new MediumNodes();
const HighNodesEnum = new HighNodes();

export default class HPEnhancePlusNode extends DefaultNodes implements Nodes {
    key = "HPEnhancePlus";
    selected = 'HPEnhancePlus' + MediumNodesEnum.selected;
    result = 'HPEnhancePlus' + MediumNodesEnum.result;
    brightness = 80;
    rgb = { r: 255, g: 255, b: 255 };
    // 需要顯示語言
    displayValue = true;
    livePreview = true;
    size = 4;
    mode = ModeType.radio;
    language = {
        German: "HP Enhance+",
        SimplifiedChinese: "HP Enhance+",
        TraditionalChinese: "HP Enhance+",
        English: "HP Enhance+",
        Español: "HP Enhance+",
        French: "HP Enhance+",
        Italian: "HP Enhance+",
        Japanese: "HP Enhance+",
        Nederlands: "HP Enhance+",
        BrazilianPortuguese: "HP Enhance+",
        Russian: "HP Enhance+"
    };
    nodes = [
        // 低
        {
            ...JSON.parse(JSON.stringify(LowNodesEnum)),
            selected: this.key + LowNodesEnum.selected,
            result: this.key + LowNodesEnum.result,
            parents: this.key

        },
        // 中
        {
            ...JSON.parse(JSON.stringify(MediumNodesEnum)),
            selected: this.key + MediumNodesEnum.selected,
            result: this.key + MediumNodesEnum.result,
            parents: this.key
        },
        // 高
        {
            ...JSON.parse(JSON.stringify(HighNodesEnum)),
            selected: this.key + HighNodesEnum.selected,
            result: this.key + HighNodesEnum.result,
            parents: this.key
        },
        // 上一步
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key
        }
    ]
};