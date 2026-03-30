// 管理 > 診斷模式

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes } from '../_utilities';

const DefaultNodesEnum = new DefaultNodes(); 
const BackNodesEnum = new BackNodes();

export default class DiagnosticPatternsNodes extends DefaultNodes implements Nodes {
    // Y (Cycle Patterns highlighted)
    key = "DiagnosticPatterns";
    selected = "Cycle Patterns";
    result = "Cycle Patterns";
    size = 7;
    mode = ModeType.button;
    language = {
        German: "Diagnosemuster",
        SimplifiedChinese: "诊断模式",
        TraditionalChinese: "診斷模式",
        English: "Diagnostic Patterns",
        Español: "Patrones de diagnóstico",
        French: "Modèles de diagnostic",
        Italian: "Schemi diagnostici",
        Japanese: "診断パターン",
        Nederlands: "Diagnostische patronen",
        BrazilianPortuguese: "Padrões de diagnóstico",
        Russian: "Диагностические шаблоны"
    };
    nodes = [
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "CyclePatterns",
            selected: "Cycle Patterns",
            result: "Cycle Patterns",
            livePreview: true,
            parents: this.key,
            mode: ModeType.button,
            language: {
                German: "Muster durchlaufen",
                SimplifiedChinese: "循环模式",
                TraditionalChinese: "循環模式",
                English: "Cycle Patterns",
                Español: "Recorrer patrones",
                French: "Parcourir les modèles",
                Italian: "Schemi ciclici",
                Japanese: "パターンの切り替え",
                Nederlands: "Blader door patronen",
                BrazilianPortuguese: "Percorrer padrões",
                Russian: "Цикл по шаблонам"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "FullScreenBlack",
            selected: "Full Screen Black",
            result: "Full Screen Black",
            livePreview: true,
            parents: this.key,
            mode: ModeType.button,
            language: {
                German: "Kompletter Bildschirm schwarz",
                SimplifiedChinese: "黑色全屏",
                TraditionalChinese: "全螢幕黑色",
                English: "Full Screen Black",
                Español: "Pantalla completa en negro",
                French: "Plein écran noir",
                Italian: "Schermo intero nero",
                Japanese: "全画面黒",
                Nederlands: "Volledig scherm zwart",
                BrazilianPortuguese: "Ecrã inteiro preto",
                Russian: "Заполнение черным"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "FullScreenWhite",
            selected: "Full Screen White",
            result: "Full Screen White",
            livePreview: true,
            parents: this.key,
            mode: ModeType.button,
            language: {
                German: "Kompletter Bildschirm weiß",
                SimplifiedChinese: "白色全屏",
                TraditionalChinese: "全螢幕白色",
                English: "Full Screen White",
                Español: "Pantalla completa en blanco",
                French: "Plein écran blanc",
                Italian: "Schermo intero bianco",
                Japanese: "全画面白",
                Nederlands: "Volledig scherm wit",
                BrazilianPortuguese: "Ecrã inteiro branco",
                Russian: "Заполнение белым"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "FullScreenRed",
            selected: "Full Screen Red",
            result: "Full Screen Red",
            livePreview: true,
            parents: this.key,
            mode: ModeType.button,
            language: {
                German: "Kompletter Bildschirm rot",
                SimplifiedChinese: "红色全屏",
                TraditionalChinese: "全螢幕紅色",
                English: "Full Screen Red",
                Español: "Pantalla completa en rojo",
                French: "Plein écran rouge",
                Italian: "Schermo intero rosso",
                Japanese: "全画面赤",
                Nederlands: "Volledig scherm rood",
                BrazilianPortuguese: "Ecrã inteiro vermelho",
                Russian: "Заполнение красным"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "FullScreenGreen",
            selected: "Full Screen Green",
            result: "Full Screen Green",
            livePreview: true,
            parents: this.key,
            mode: ModeType.button,
            language: {
                German: "Kompletter Bildschirm grün",
                SimplifiedChinese: "绿色全屏",
                TraditionalChinese: "全螢幕綠色",
                English: "Full Screen Green",
                Español: "Pantalla completa en verde",
                French: "Plein écran vert",
                Italian: "Schermo intero verde",
                Japanese: "全画面緑",
                Nederlands: "Volledig scherm groen",
                BrazilianPortuguese: "Ecrã inteiro verde",
                Russian: "Заполнение зеленым"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "FullScreenBlue",
            selected: "Full Screen Blue",
            result: "Full Screen Blue",
            livePreview: true,
            parents: this.key,
            mode: ModeType.button,
            language: {
                German: "Kompletter Bildschirm blau",
                SimplifiedChinese: "蓝色全屏",
                TraditionalChinese: "全螢幕藍色",
                English: "Full Screen Blue",
                Español: "Pantalla completa en azul",
                French: "Plein écran bleu",
                Italian: "Schermo intero blu",
                Japanese: "全画面青",
                Nederlands: "Volledig scherm blauw",
                BrazilianPortuguese: "Ecrã inteiro azul",
                Russian: "Заполнение синим"
            }
        },
        // 上一步
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key
        }
    ]
};