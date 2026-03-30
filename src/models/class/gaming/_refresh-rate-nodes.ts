import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes, ResetNodes, OnNodes, OffNodes, ExitNodes } from '../_utilities';
import ColorNodes from './_color/color-nodes';
import LocationNodes from './_location/location-nodes';
const BackNodesEnum = new BackNodes();
const OnNodesEnum = new OnNodes();
const OffNodesEnum = new OffNodes();
const ResetNodesEnum = new ResetNodes();
const ExitNodesEnum = new ExitNodes();
const ColorNodesEnum = new ColorNodes();
const LocationNodesEnum = new LocationNodes();

export default class RefreshRateNodes extends DefaultNodes implements Nodes {
    key = "RefreshRate";
    selected = OffNodesEnum.selected;
    result = OffNodesEnum.result;
    displayValue = true;
    size = 7;
    mode = ModeType.button;
    language = {
        German: "Bildwiederholungsrate",
        SimplifiedChinese: "刷新率",
        TraditionalChinese: "更新率",
        English: "Refresh Rate",
        Español: "Tasa de actualización",
        French: "Taux de rafraîchissement",
        Italian: "Frequenza di aggiornamento",
        Japanese: "リフレッシュ レート",
        Nederlands: "Vernieuwingsfrequentie",
        BrazilianPortuguese: "Taxa de atualização",
        Russian: "Частота обновления"
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
            ...JSON.parse(JSON.stringify(ColorNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(LocationNodesEnum)),
            parents: this.key,
            assignItemDisplay: true,
            assignItemChildrenDisplay: true
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