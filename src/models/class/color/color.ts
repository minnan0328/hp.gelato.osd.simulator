import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, ResetNodes, BackNodes, ExitNodes } from '../_utilities';
import FPSNodes from './_fps-nodes';
import RPGNodes from './_rpg-nodes';
import RTSNodes from './_rts-nodes';
import sRGBNodes from './_sRGB-nodes';
import NativeNodes from './_native-nodes';
import CinemaNodes from './_cinema-nodes';
import NightNodes from './_night-nodes';
import HPEnhancePlusNodes from './_HP-enhance-plus-nodes';
import RGBGainAdjustNodes from './_RGB-gain-adjust-nodes';

const ResetNodesEnum = new ResetNodes(); 
const BackNodesEnum = new BackNodes();
const ExitNodesEnum = new ExitNodes();
const FPSNodesEnum = new FPSNodes();
const RPGNodesEnum = new RPGNodes();
const RTSNodesEnum = new RTSNodes();
const sRGBNodesEnum = new sRGBNodes();
const NativeNodesEnum = new NativeNodes();
const CinemaNodesEnum = new CinemaNodes();
const NightNodesEnum = new NightNodes();
const HPEnhancePlusNodesEnum = new HPEnhancePlusNodes();
const RGBGainAdjustNodesEnum = new RGBGainAdjustNodes();
export default class Color extends DefaultNodes implements Nodes {
    key = "Color";
    selected = FPSNodesEnum.selected;
    result = FPSNodesEnum.result;
    brightness = FPSNodesEnum.brightness;
    size = 12;
    mode = ModeType.button;
    language = {
        German: "Farbe",
        SimplifiedChinese: "颜色",
        TraditionalChinese: "色彩",
        English: "Color",
        Español: "Color",
        French: "Couleur",
        Italian: "Colore",
        Japanese: "色",
        Nederlands: "Kleur",
        BrazilianPortuguese: "Cor",
        Russian: "Цвет"
    };
    nodes = [
        {
            //Set to Native color space - 220 nits (lower green gain to 215 in RGB Gain Adjust setting)
            ...JSON.parse(JSON.stringify(FPSNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(RPGNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(RTSNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(sRGBNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(NativeNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(CinemaNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(NightNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(HPEnhancePlusNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(RGBGainAdjustNodesEnum)),
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
};