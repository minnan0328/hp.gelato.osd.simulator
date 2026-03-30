import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes } from '../../_utilities';
import TopLeftNodes from './_top-left-nodes';
import TopRightNodes from './_top-right-nodes';
import BottomLeftNodes from './_bottom-left-nodes';
import BottomRightNodes from './_bottom-right-nodes';

const TopLeftNodesEnum = new TopLeftNodes();
const TopRightNodesEnum = new TopRightNodes();
const BottomLeftNodesEnum = new BottomLeftNodes();
const BottomRightNodesEnum = new BottomRightNodes();
const BackNodesEnum = new BackNodes();

export default class LocationNodes extends DefaultNodes implements Nodes {
    key = "Location";
    selected = TopRightNodesEnum.selected;
    result = TopRightNodesEnum.result;
    assignItemDisplay = false;
    displayValue = true;
    disabled = true;
    size = 5;
    mode = ModeType.button;
    language = {
        German: "Speicherort",
        SimplifiedChinese: "位置",
        TraditionalChinese: "位置",
        English: "Location",
        Español: "Ubicación",
        French: "Emplacement",
        Italian: "Posizione",
        Japanese: "場所",
        Nederlands: "Locatie",
        BrazilianPortuguese: "Localização",
        Russian: "Местоположение"
    };
    nodes = [
        {
            ...JSON.parse(JSON.stringify(TopLeftNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(TopRightNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(BottomLeftNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(BottomRightNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key
        }
    ];
}