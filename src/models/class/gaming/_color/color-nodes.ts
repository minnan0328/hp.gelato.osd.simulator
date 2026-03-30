import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes } from '../../_utilities';
import WhileNodes from './_white-nodes';
import RedNodes from './_red-nodes';
import GreenNodes from './_green-nodes';
import BlueNodes from './_blue-nodes';
import YellowNodes from './_yellow-nodes';
import PurpleNodes from './_purple-nodes';
import LightBlue from './_light-blue-nodes';
import OrangeNodes from './_orange-nodes';
import BlackNodes from './_black-nodes';

const WhileNodesEnum = new WhileNodes();
const RedNodesEnum = new RedNodes();
const GreenNodesEnum = new GreenNodes();
const BlueNodesEnum = new BlueNodes();
const YellowNodesEnum = new YellowNodes();
const PurpleNodesEnum = new PurpleNodes();
const LightBlueNodesEnum = new LightBlue();
const OrangeNodesEnum = new OrangeNodes();
const BlackNodesEnum = new BlackNodes();
const BackNodesEnum = new BackNodes();

export default class ColorNodes extends DefaultNodes implements Nodes {
    key = "SettingTextColor";
    selected = WhileNodesEnum.selected;
    result = WhileNodesEnum.result;
    assignItemDisplay = false;
    displayValue = true;
    disabled = true;
    size = 10;
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
            ...JSON.parse(JSON.stringify(WhileNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(RedNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(GreenNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(BlueNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(YellowNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(PurpleNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(LightBlueNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(OrangeNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(BlackNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key
        }
    ];
}
