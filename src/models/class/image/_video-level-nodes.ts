// 亮度 > 視訊等級

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes } from '../_utilities';

const BackNodesEnum = new BackNodes();
const DefaultNodesEnum = new DefaultNodes();

export default class BlackStretchNodes extends DefaultNodes implements Nodes {
    key = "VideoLevel";
    selected = "Auto";
    result = "Auto";
    displayValue = true;
    size = 4;
    mode = ModeType.button;
    language = {
        German: "Videostufe",
        SimplifiedChinese: "视频电平",
        TraditionalChinese: "視訊等級",
        English: "Video Level",
        Español: "Nivel de vídeo",
        French: "Niveau vidéo",
        Italian: "Livello video",
        Japanese: "ビデオ レベル",
        Nederlands: "Videoniveau",
        BrazilianPortuguese: "Nível de vídeo",
        Russian: "Уровень видеосигнала"
    };
    nodes = [
        // 自動
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "Auto",
            selected: "Auto",
            result: "Auto",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "Automatisch",
                SimplifiedChinese: "自动",
                TraditionalChinese: "自動",
                English: "Auto",
                Español: "Automático",
                French: "Automatique",
                Italian: "Automatico",
                Japanese: "自動",
                Nederlands: "Automatisch",
                BrazilianPortuguese: "Automático",
                Russian: "Автоматически"
            }
        },
        // 限制範圍
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "LimitedRange(16 - 235)",
            selected: "Limited Range (16 - 235)",
            result: "Limited Range (16 - 235)",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "Begrenzter Bereich (16 - 235)",
                SimplifiedChinese: "有限范围 (16 - 235)",
                TraditionalChinese: "限制範圍 (16 - 235)",
                English: "Limited Range (16 - 235)",
                Español: "Rango limitado (16 - 235)",
                French: "Plage limitée (16 - 235)",
                Italian: "Intervallo limitato (16 - 235)",
                Japanese: "制限された範囲（16 - 235）",
                Nederlands: "Beperkt bereik (16 - 235)",
                BrazilianPortuguese: "Gama limitada (16 - 235)",
                Russian: "Ограниченный диапазон (16 - 235)"
            }
        },
        // 完整範圍
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "FullRange(0 - 255)",
            selected: "Full Range (0 - 255)",
            result: "Full Range (0 - 255)",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "Volle Reichweite (0 - 255)",
                SimplifiedChinese: "完整范围 (0 - 255)",
                TraditionalChinese: "完整範圍 (0 - 255)",
                English: "Full Range (0 - 255)",
                Español: "Rango completo (0 - 255)",
                French: "Plage maximale (0 - 255)",
                Italian: "Intervallo completo (0 - 255)",
                Japanese: "すべての範囲（0 - 255）",
                Nederlands: "Volledig bereik (0 - 255)",
                BrazilianPortuguese: "Gama completa (0 - 255)",
                Russian: "Полный диапазон (0 - 255)"
            }
        },
        // 上一步
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            mergeGrid: false
        }
    ]
};