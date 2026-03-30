// 顏色 > 原生

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../_utilities';

const DefaultNodesEnum = new DefaultNodes();
export default class NativeNodes extends DefaultNodes implements Nodes {
    key = "Native";
    selected = "Native";
    result = "Native";
    brightness = 100;
    rgb = { r: 255, g: 255, b: 255 };
    livePreview = true;
    mode = ModeType.radio;
    size = 5;
    language = {
        German: "Eigen",
        SimplifiedChinese: "本机",
        TraditionalChinese: "原生",
        English: "Native",
        Español: "Nativo",
        French: "Native",
        Italian: "Nativo",
        Japanese: "ネイティブ",
        Nederlands: "Eigen",
        BrazilianPortuguese: "Nativo",
        Russian: "Исходный"
    };
    nodes = [
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            selected: null,
            result: null,
            mode: ModeType.info,
            parents: this.key,
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            selected: null,
            result: null,
            mode: ModeType.info,
            parents: this.key,
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            selected: null,
            result: null,
            mode: ModeType.info,
            parents: this.key,
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            selected: null,
            result: null,
            mode: ModeType.info,
            parents: this.key,
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "NativeMessage",
            selected: null,
            result: null,
            mode: ModeType.info,
            parents: this.key,
            language: {
                German: "Native Panel-Einstellungen",
                SimplifiedChinese: "本地面板设置",
                TraditionalChinese: "原生面板設定",
                English: "Native panel settings",
                Español: "Configuración del panel nativo",
                French: "Paramètres du panneau natif",
                Italian: "Impostazioni native del pannello",
                Japanese: "ネイティブ パネル設定",
                Nederlands: "Oorspronkelijke paneelinstellingen",
                BrazilianPortuguese: "Definições do painel nativo",
                Russian: "Настройки родной панели"
            }
        }
    ]
};