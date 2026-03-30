import type { Nodes } from '@/types';
import { ModeType } from '@/types';
import { DefaultNodes, ResetNodes, BackNodes, ExitNodes, OnNodes, OffNodes } from '../_utilities';
import AutoSwitchInputNodes from './_auto-switch-input-nodes';
import DPHotPlugDetectionNodes from './_dp-hot-plug-detection-nodes';
import DisplayPortModeNodes from './_ display-port-mode-nodes';
import HDMICECNodes from './_hdml-cec-nodes';

let AutoSwitchInputNodesEnum = new AutoSwitchInputNodes(); 
let DPHotPlugDetectionNodesEnum = new DPHotPlugDetectionNodes(); 
let DisplayPortModeNodesEnum = new DisplayPortModeNodes(); 
let HDMICECNodesEnum = new HDMICECNodes();
let DefaultNodesEnum = new DefaultNodes(); 
let ResetNodesEnum = new ResetNodes(); 
let BackNodesEnum = new BackNodes();
let ExitNodesEnum = new ExitNodes();
let OnNodesEnum = new OnNodes();
let OffNodesEnum = new OffNodes();

export default class Input extends DefaultNodes implements Nodes {
    key = "Input";
    selected = "HDMI 1";
    result = "HDMI 1";
    size = 10;
    mode = ModeType.button;
    language = {
        German: "Eingabe",
        SimplifiedChinese: "输入",
        TraditionalChinese: "輸入",
        English: "Input",
        Español: "Entrada",
        French: "Entrée",
        Italian: "Invoer",
        Japanese: "入力",
        Nederlands: "Invoer",
        BrazilianPortuguese: "Entrada",
        Russian: "Входы",
    };
    nodes =  [
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "DisplayPort",
            selected: "DisplayPort",
            result: "DisplayPort",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "DisplayPort",
                SimplifiedChinese: "DisplayPort",
                TraditionalChinese: "DisplayPort",
                English: "DisplayPort",
                Español: "DisplayPort",
                French: "DisplayPort",
                Italian: "DisplayPort",
                Japanese: "DisplayPort",
                Nederlands: "DisplayPort",
                BrazilianPortuguese: "DisplayPort",
                Russian: "DisplayPort"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "HDMI1",
            selected: "HDMI 1",
            result: "HDMI 1",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "HDMI 1",
                SimplifiedChinese: "HDMI 1",
                TraditionalChinese: "HDMI 1",
                English: "HDMI 1",
                Español: "HDMI 1",
                French: "HDMI 1",
                Italian: "HDMI 1",
                Japanese: "HDMI 1",
                Nederlands: "HDMI 1",
                BrazilianPortuguese: "HDMI 1",
                Russian: "HDMI 1"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "HDMI2",
            selected: "HDMI 2",
            result: "HDMI 2",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "HDMI 2",
                SimplifiedChinese: "HDMI 2",
                TraditionalChinese: "HDMI 2",
                English: "HDMI 2",
                Español: "HDMI 2",
                French: "HDMI 2",
                Italian: "HDMI 2",
                Japanese: "HDMI 2",
                Nederlands: "HDMI 2",
                BrazilianPortuguese: "HDMI 2",
                Russian: "HDMI 2"
            }
        },
        {
            ...JSON.parse(JSON.stringify(AutoSwitchInputNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(DPHotPlugDetectionNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(DisplayPortModeNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(HDMICECNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(ResetNodesEnum)),
            parents: this.key,
            mergeGrid: true
        },
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key,
            mergeGrid: true
        },
        {
            ...JSON.parse(JSON.stringify(ExitNodesEnum)),
            parents: this.key,
        }
    ];
}