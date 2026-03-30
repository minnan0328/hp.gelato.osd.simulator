// 功能表 > 指定鍵

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes } from '../../_utilities';
import { 
    AssignBrightnessNodes,
    AssignColorNodes,
    AssignDisplayInformationNodes,
    AssignNextActiveInputNodes,
    AssignMessageTimersNodes,
    AssignRefreshRateNodes,
    AssignCrosshairNodes,
    AssignEmptyNodes
} from './_utilities';

const DefaultNodesEnum = new DefaultNodes();
const BackNodesEnum = new BackNodes();
const AssignBrightnessNodesEnum = new AssignBrightnessNodes();
const AssignColorNodesEnum = new AssignColorNodes();
const AssignDisplayInformationNodesEnum = new AssignDisplayInformationNodes();
const AssignNextActiveInputNodesEnum = new AssignNextActiveInputNodes();
const AssignMessageTimersNodesEnum = new AssignMessageTimersNodes();
const AssignRefreshRateNodesEnum = new AssignRefreshRateNodes();
const AssignCrosshairNodesEnum = new AssignCrosshairNodes();
const AssignEmptyNodesEnum = new AssignEmptyNodes();

// 共用 nodes 陣列
const assignButtonNodes = [
    {
        ...JSON.parse(JSON.stringify(AssignBrightnessNodesEnum)),
        parents: ""
    },
    {
        ...JSON.parse(JSON.stringify(AssignColorNodesEnum)),
        parents: ""
    },
    {
        ...JSON.parse(JSON.stringify(AssignDisplayInformationNodesEnum)),
        parents: ""
    },
    {
        ...JSON.parse(JSON.stringify(AssignNextActiveInputNodesEnum)),
        parents: ""
    },
    {
        ...JSON.parse(JSON.stringify(AssignMessageTimersNodesEnum)),
        parents: ""
    },
    {
        ...JSON.parse(JSON.stringify(AssignRefreshRateNodesEnum)),
        parents: ""
    },
    {
        ...JSON.parse(JSON.stringify(AssignCrosshairNodesEnum)),
        parents: ""
    },
    {
        ...JSON.parse(JSON.stringify(AssignEmptyNodesEnum)),
        parents: ""
    },
    {
        ...JSON.parse(JSON.stringify(BackNodesEnum)),
        parents: ""
    }
];

export default class AssignButtonsNodes extends DefaultNodes implements Nodes {
    key = "AssignButtons";
    size = 5;
    mode = ModeType.button;
    language = {
        German: "Tasten zuweisen",
        SimplifiedChinese: "指定按钮",
        TraditionalChinese: "指定鍵",
        English: "Assign Buttons",
        Español: "Asignar botones",
        French: "Attribuer boutons",
        Italian: "Assegna pulsanti",
        Japanese: "ボタンの割り当て",
        Nederlands: "Knoppen toewijzen",
        BrazilianPortuguese: "Atribuir botões",
        Russian: "Назначить кнопки"
    };
    nodes = [
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "AssignLeftButton",
            selected: AssignBrightnessNodesEnum.selected,
            result: AssignBrightnessNodesEnum.result,
            displayValue: true,
            displayState: true,
            size: assignButtonNodes.length,
            parents: this.key,
            mode: ModeType.button,
            language: {
                German: "Linke Taste zuordnen",
                SimplifiedChinese: "分配左按钮",
                TraditionalChinese: "指定向左按鈕",
                English: "Assign Left Button",
                Español: "Asignar botón izquierdo",
                French: "Attribuer le bouton gauche",
                Italian: "Assegna pulsante sinistro",
                Japanese: "左方向ボタンを割り当て",
                Nederlands: "Knop links toewijzen",
                BrazilianPortuguese: "Atribuir botão esquerdo",
                Russian: "Назначить левую кнопку",
            },
            nodes: assignButtonNodes.map(n => ({ ...n, parents: "AssignButton1" }))
        },
        {   
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "AssignRightButton",
            selected: AssignColorNodesEnum.selected,
            result: AssignColorNodesEnum.result,
            displayValue: true,
            displayState: true,
            size: assignButtonNodes.length,
            parents: this.key,
            mode: ModeType.button,
            language: {
                German: "Rechte Taste zuordnen",
                SimplifiedChinese: "分配右按钮",
                TraditionalChinese: "指定向右按鈕",
                English: "Assign Right Button",
                Español: "Asignar botón derecho",
                French: "Attribuer le bouton droit",
                Italian: "Assegna pulsante destro",
                Japanese: "右方向ボタンを割り当て",
                Nederlands: "Knop rechts toewijzen",
                BrazilianPortuguese: "Atribuir botão direito",
                Russian: "Назначить правую кнопку",
            },
            nodes: assignButtonNodes.map(n => ({ ...n, parents: "AssignButton2" }))
        },
        {   
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "AssignUpButton",
            selected: AssignNextActiveInputNodesEnum.selected,
            result: AssignNextActiveInputNodesEnum.result,
            displayValue: true,
            displayState: true,
            size: assignButtonNodes.length,
            parents: this.key,
            mode: ModeType.button,
            language: {
                German: "Aufwärts-Taste zuordnen",
                SimplifiedChinese: "分配向上按钮",
                TraditionalChinese: "指定向上按鈕",
                English: "Assign Up Button",
                Español: "Asignar botón hacia arriba",
                French: "Attribuer le bouton haut",
                Italian: "Assegna pulsante Su",
                Japanese: "上方向ボタンを割り当て",
                Nederlands: "Knop omhoog toewijzen",
                BrazilianPortuguese: "Atribuir botão para cima",
                Russian: "Назначить верхнюю кнопку",
            },
            nodes: assignButtonNodes.map(n => ({ ...n, parents: "AssignButton3" }))
        },
        {   
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "AssignDownButton",
            selected: AssignDisplayInformationNodesEnum.selected,
            result: AssignDisplayInformationNodesEnum.result,
            displayValue: true,
            displayState: true,
            size: assignButtonNodes.length,
            parents: this.key,
            mode: ModeType.button,
            language: {
                German: "Abwärts-Taste zuordnen",
                SimplifiedChinese: "分配向下按钮",
                TraditionalChinese: "指定向下按鈕",
                English: "Assign Down Button",
                Español: "Asignar botón hacia abajo",
                French: "Attribuer le bouton bas",
                Italian: "Assegna pulsante Giù",
                Japanese: "下方向ボタンを割り当て",
                Nederlands: "Knop omlaag toewijzen",
                BrazilianPortuguese: "Atribuir botão para baixo",
                Russian: "Назначить нижнюю кнопку",
            },
            nodes: assignButtonNodes.map(n => ({ ...n, parents: "AssignButton4" }))
        },
        // 上一步
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key
        }
    ]
};
