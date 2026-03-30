// 電源 > 重新開機

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes, OnNodes, OffNodes } from '../_utilities';

const BackNodesEnum = new BackNodes();
const OnNodesEnum = new OnNodes();
const OffNodesEnum = new OffNodes();

export default class PowerOnRecallNodes extends DefaultNodes implements Nodes {
    key = "PowerOnRecall";
    selected = OnNodesEnum.selected;
    result = OnNodesEnum.result;
    displayValue = true;
    size = 3;
    mode = ModeType.button;
    language = {
        German: "Einschaltstatus speichern",
        SimplifiedChinese: "开机复位",
        TraditionalChinese: "重新開機",
        English: "Power-On Recall",
        Español: "Reactivar",
        French: "Réveil",
        Italian: "Ripristino all’accensione",
        Japanese: "再開時に電源オン",
        Nederlands: "Opstartstand opslaan",
        BrazilianPortuguese: "Ligar Novamente",
        Russian: "Восстан. питания"
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