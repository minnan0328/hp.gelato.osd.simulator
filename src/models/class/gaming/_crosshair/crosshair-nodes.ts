import { ModeType } from "@/types";
import type { Nodes } from "@/types";
import { DefaultNodes, BackNodes, ResetNodes, OnNodes, OffNodes, ExitNodes } from '../../_utilities';
import ConfigureNodes from './_configure-nodes';
import ColorNodes from '../_color/color-nodes';
import LocationNodes from './_location-nodes';

const OnNodesEnum = new OnNodes();
const OffNodesEnum = new OffNodes();
const ResetNodesEnum = new ResetNodes(); 
const BackNodesEnum = new BackNodes();
const ExitNodesEnum = new ExitNodes();
const ConfigureNodesEnum = new ConfigureNodes();
const ColorNodesEnum = new ColorNodes();
const LocationNodesEnum = new LocationNodes();

export default class CrosshairNodes extends DefaultNodes implements Nodes {
    key = "Crosshair";
    selected = OffNodesEnum.selected;
    result = OffNodesEnum.result;
    displayValue = true;
    size = 8;
    mode = ModeType.button;
    language = {
        German: "Fadenkreuz",
        SimplifiedChinese: "十字线",
        TraditionalChinese: "十字線",
        English: "Crosshair",
        Español: "Mira",
        French: "La croix",
        Italian: "Mirino",
        Japanese: "十字型カーソル",
        Nederlands: "Dradenkruis",
        BrazilianPortuguese: "Mira",
        Russian: "Прицел"
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
            ...JSON.parse(JSON.stringify(ConfigureNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(ColorNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(LocationNodesEnum)),
            parents: this.key,
            assignItemDisplay: true
        },
        {
            ...JSON.parse(JSON.stringify(ResetNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key
        },
        {
            ...ExitNodesEnum,
            ...JSON.parse(JSON.stringify(ExitNodesEnum)),
            parents: this.key,
        }
    ];
}