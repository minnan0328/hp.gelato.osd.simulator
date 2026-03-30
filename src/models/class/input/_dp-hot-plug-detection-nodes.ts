// 管理 > 無障礙

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes } from '../_utilities';

const DefaultNodesEnum = new DefaultNodes();
const BackNodesEnum = new BackNodes();

export default class DPHotPlugDetectionNodes extends DefaultNodes implements Nodes {
    key = "DPHotPlugDetection";
    selected = "Always Active";
    result = "Always Active";
    assignItemDisplay = false;
    displayValue = true;
    size = 3;
    mode = ModeType.button;
    language = {
        German: "DP-Hot-Plug-Erkennung",
        SimplifiedChinese: "DP 热插拔检测",
        TraditionalChinese: "DP 熱插拔偵測",
        English: "DP Hot-Plug Detection",
        Español: "Detección conexión directa DP",
        French: "Détection connexion à chaud DP",
        Italian: "Rilevazione Hot-Plug DP",
        Japanese: "DP ホット プラグの検出",
        Nederlands: "DP Hot Plug detectie",
        BrazilianPortuguese: "Detecção de Hot-Plug DP",
        Russian: "Обнаружен. горяч. подкл-я DP"
    };
    nodes = [
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "LowPower",
            selected: "Low Power",
            result: "Low Power",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "Niedrige Leistung",
                SimplifiedChinese: "省电模式",
                TraditionalChinese: "省電模式",
                English: "Low Power",
                Español: "Potencia baja",
                French: "Basse puissance",
                Italian: "Potenza in esaur.",
                Japanese: "省電力",
                Nederlands: "Weinig energie",
                BrazilianPortuguese: "Baixa energia",
                Russian: "Пониженное энергопотребление"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "AlwaysActive",
            selected: "Always Active",
            result: "Always Active",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "Immer aktiv",
                SimplifiedChinese: "持续检测",
                TraditionalChinese: "持續檢測",
                English: "Always Active",
                Español: "Siempre activo",
                French: "Toujours actif",
                Italian: "Sempre attivo",
                Japanese: "常に有効",
                Nederlands: "Altijd actief",
                BrazilianPortuguese: "Sempre ativa",
                Russian: "Всегда активен"
            }
        },
        // 上一步
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key
        }
    ]
};