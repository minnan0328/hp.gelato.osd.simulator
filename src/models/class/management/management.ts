import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, ResetNodes, BackNodes } from '../_utilities';
import FactoryResetNodes from './_factory-reset-nodes';
import DDCCISupportNodes from './_DDC-CISupport-nodes';
import DiagnosticPatternsNodes from './_diagnostic-patterns-nodes';
import AccessibilityNodes from './_accessibility-nodes';

const ResetNodesEnum = new ResetNodes(); 
const BackNodesEnum = new BackNodes();
const FactoryResetNodesEnum = new FactoryResetNodes();
const DDCCISupportNodesEnum = new DDCCISupportNodes();
const DiagnosticPatternsNodesEnum = new DiagnosticPatternsNodes();
const AccessibilityNodesEnum = new AccessibilityNodes();

export default class Management extends DefaultNodes implements Nodes {
    key = "Management";
    size = 6;
    mode = ModeType.button;
    language = {
        German: "Steuerung",
        SimplifiedChinese: "管理",
        TraditionalChinese: "管理",
        English: "Management",
        Español: "Gestión",
        French: "Gestion",
        Italian: "Gestione",
        Japanese: "マネージメント",
        Nederlands: "Beheer",
        BrazilianPortuguese: "Gerenciamento",
        Russian: "Управление"
    };
    nodes = [
        {
            ...JSON.parse(JSON.stringify(FactoryResetNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(DDCCISupportNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(DiagnosticPatternsNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(AccessibilityNodesEnum)),
            parents: this.key
        },
        // 重置
        {
            ...JSON.parse(JSON.stringify(ResetNodesEnum)),
            parents: this.key,
            mergeGrid: true 
        },
        // 上一步
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key,
            mergeGrid: true 
        }
    ];
};