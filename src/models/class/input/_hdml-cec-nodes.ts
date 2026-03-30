import type { Nodes } from '@/types';
import { ModeType } from '@/types';
import { DefaultNodes, BackNodes, OnNodes, OffNodes } from '../_utilities';

let OnNodesEnum = new OnNodes();
let OffNodesEnum = new OffNodes();
let BackNodesEnum = new BackNodes();

export default class HDMLCECNodes extends DefaultNodes implements Nodes {
    key = "HDMICEC";
    selected = OnNodesEnum.selected;
    result = OnNodesEnum.result;
    assignItemDisplay = false;
    displayValue = true;
    size = 3;
    mode = ModeType.button;
    language = {
        German: "HDMI CEC",
        SimplifiedChinese: "HDMI CEC",
        TraditionalChinese: "HDMI CEC",
        English: "HDMI CEC",
        Español: "HDMI CEC",
        French: "HDMI CEC",
        Italian: "HDMI CEC",
        Japanese: "HDMI CEC",
        Nederlands: "HDMI CEC",
        BrazilianPortuguese: "HDMI CEC",
        Russian: "HDMI CEC",
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
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key
        }
    ];
}