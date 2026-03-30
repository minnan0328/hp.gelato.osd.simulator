import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, ResetNodes, BackNodes } from '../_utilities';
import AutoSleepModeNodes from './_auto-sleep-mode-nodes';
import PowerOnRecallNodes from './_power-on-recall';
import PowerLEDNodes from './_power-LED-nodes';

const ResetNodesEnum = new ResetNodes();
const BackNodesEnum = new BackNodes();
const AutoSleepModeNodesEnum = new AutoSleepModeNodes();
const PowerOnRecallNodesEnum = new PowerOnRecallNodes();
const PowerLEDNodesEnum = new PowerLEDNodes();

export default class Power extends DefaultNodes implements Nodes {
    key = "Power";
    size = 5;
    mode = ModeType.button;
    language = {
        German: "Energie",
        SimplifiedChinese: "电源",
        TraditionalChinese: "電源",
        English: "Power",
        Español: "Alimentación",
        French: "Alimentation",
        Italian: "Alimentazione",
        Japanese: "電源",
        Nederlands: "Energie",
        BrazilianPortuguese: "Energia",
        Russian: "Питание"
    };
    nodes = [
        // 自動睡眠模式
        {
            ...JSON.parse(JSON.stringify(AutoSleepModeNodesEnum)),
            parents: this.key
        },
        // 重新開機
        {
            ...JSON.parse(JSON.stringify(PowerOnRecallNodesEnum)),
            parents: this.key

        },
        // 電源指示燈
        {
            ...JSON.parse(JSON.stringify(PowerLEDNodesEnum)),
            parents: this.key
        },
        // 重置
        {
            ...JSON.parse(JSON.stringify(ResetNodesEnum)),
            parents: this.key,
            mergeGrid: true 
        },
        // 上一步
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key,
            mergeGrid: true 
        }
    ];
};