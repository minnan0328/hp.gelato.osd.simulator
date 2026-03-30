// 電源 > 電源指示燈

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes, OnNodes, OffNodes } from '../_utilities';

const BackNodesEnum = new BackNodes();
const OnNodesEnum = new OnNodes();
const OffNodesEnum = new OffNodes();

export default class PowerLEDNodes extends DefaultNodes implements Nodes {
    key = "PowerLED";
    selected = OnNodesEnum.selected;
    result = OnNodesEnum.result;
    displayValue = true;
    size = 3;
    mode = ModeType.button;
    language = {
        German: "Betriebs-LED",
        SimplifiedChinese: "电源 LED 指示灯",
        TraditionalChinese: "電源指示燈",
        English: "Power LED",
        Español: "LED de encendido",
        French: "Voyant d'alimentation",
        Italian: "LED alimentazione",
        Japanese: "電源ランプ",
        Nederlands: "Aan/uit-lampje",
        BrazilianPortuguese: "LED de energia",
        Russian: "Индикатор питания"
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