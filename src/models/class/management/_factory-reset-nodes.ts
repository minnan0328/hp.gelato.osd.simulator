// 管理 > 恢復出廠設定值

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes, YesNodes, NoNodes } from '../_utilities';

const DefaultNodesEnum = new DefaultNodes(); 
const BackNodesEnum = new BackNodes();
const YesNodesEnum = new YesNodes();
const NoNodesEnum = new NoNodes();

export default class FactoryResetNodes extends DefaultNodes implements Nodes {
    key = "FactoryReset";
    selected = "Yes";
    result = "Yes";
    size = 3;
    mode = ModeType.button;
    language = {
        German: "Werkseinst. wiederherst.",
        SimplifiedChinese: "恢复出厂设置",
        TraditionalChinese: "恢復出廠預設值",
        English: "Factory Reset",
        Español: "Ajuste de fábrica",
        French: "Réglage usine",
        Italian: "Regolazione di fabbrica",
        Japanese: "出荷時設定にリセット",
        Nederlands: "Standaard herstellen",
        BrazilianPortuguese: "Redefinição de Fábrica",
        Russian: "Сброс до заводских значений"
    };
    nodes = [
        {
            ...JSON.parse(JSON.stringify(YesNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(NoNodesEnum)),
            parents: this.key
        },
        // 上一步
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key
        }
    ]
};