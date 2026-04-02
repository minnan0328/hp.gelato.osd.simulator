import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes, OnNodes, OffNodes } from '../_utilities';
const DefaultNodesEnum = new DefaultNodes();
const BackNodesEnum = new BackNodes();
const OnNodesEnum = new OnNodes();
const OffNodesEnum = new OffNodes();

export default class amdFreeSync extends DefaultNodes implements Nodes {
    key = "AmdFreeSync";
    selected = OnNodesEnum.selected;
    result = OnNodesEnum.result;
    displayValue = true;
    size = 2;
    mode = ModeType.button;
    language = {
        English: "Variable Refresh Rate",
        BrazilianPortuguese: "Taxa de atualização variável",
        Russian: "Переменная частота обновления",
        Nederlands: "Variabele vernieuwingsfrequentie",
        French: "Taux. rafraîch. var.",
        German: "Variable Bildwiederholungsrate",
        Español: "Tasa de actualización variable",
        Italian: "Frequenza di aggiorn. variabile",
        SimplifiedChinese: "可变刷新率",
        TraditionalChinese: "可變更新率",
        Japanese: "可変リフレッシュ レート"
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
    ];
}