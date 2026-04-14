// 亮度 > 黑色延展

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes, OffNodes, LowNodes, MediumNodes, HighNodes } from '../_utilities';
const BackNodesEnum = new BackNodes();
const offNodesEnum = new OffNodes();
const LowNodesEnum = new LowNodes();
const MediumNodesEnum = new MediumNodes();
const HighNodesEnum = new HighNodes();

export default class BlackStretchNodes extends DefaultNodes implements Nodes {
    key = "BlackStretch";
    selected = offNodesEnum.selected;
    result = offNodesEnum.result;
    displayValue = true;
    size = 5;
    page = 1;
    mode = ModeType.button;
    language = {
        German: "Schwarzdehnung",
        SimplifiedChinese: "黑延伸",
        TraditionalChinese: "黑色延展",
        English: "Black Stretch",
        Español: "Estirar negro",
        French: "Suramplification du noir",
        Italian: "Controllo del nero",
        Japanese: "黒色ストレッチ",
        Nederlands: "Black Stretch",
        BrazilianPortuguese: "Contraste de sombreado",
        Russian: "Растяжение черного"
    };
    nodes = [
        // 關
        {
            ...JSON.parse(JSON.stringify(offNodesEnum)),
            livePreview: true,
            parents: this.key
        },
        // 低
        {
            ...JSON.parse(JSON.stringify(LowNodesEnum)),
            livePreview: true,
            parents: this.key
        },
        // 中
        {
            ...JSON.parse(JSON.stringify(MediumNodesEnum)),
            livePreview: true,
            parents: this.key
        },
        // 高
        {
            ...JSON.parse(JSON.stringify(HighNodesEnum)),
            livePreview: true,
            parents: this.key
        },
        // 上一步
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key
        }
    ]
};