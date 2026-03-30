// 影像 > 回應時間

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes } from '../_utilities';
const DefaultNodesEnum = new DefaultNodes();
const BackNodesEnum = new BackNodes();

export default class ResponseTimeNodes extends DefaultNodes implements Nodes {
    key = "ResponseTime";
    selected = "Level 2 (Fast)";
    result = "Level 2 (Fast)";
    displayValue = true;
    size = 5;
    mode = ModeType.button;
    language = {
        German: "Reaktionszeit",
        SimplifiedChinese: "响应时间",
        TraditionalChinese: "回應時間",
        English: "Response Time",
        Español: "Tiempo de respuesta",
        French: "Temps de réponse",
        Italian: "Tempo di risposta",
        Japanese: "応答時間",
        Nederlands: "Reactietijd",
        BrazilianPortuguese: "Tempo de resposta",
        Russian: "Время отклика"
    };
    nodes = [
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "Level1",
            selected: "Level 1",
            result: "Level 1",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "Ebene 1",
                SimplifiedChinese: "1 级",
                TraditionalChinese: "1 級",
                English: "Level 1",
                Español: "Nivel 1",
                French: "Niveau 1",
                Italian: "Livello 1",
                Japanese: "レベル 1",
                Nederlands: "Niveau 1",
                BrazilianPortuguese: "Nível 1",
                Russian: "Уровень 1"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "Level2(Fast)",
            selected: "Level 2 (Fast)",
            result: "Level 2 (Fast)",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "Ebene 2 (Schnell)",
                SimplifiedChinese: "2 级（快）",
                TraditionalChinese: "2 級（快）",
                English: "Level 2 (Fast)",
                Español: "Nivel 2 (Rápido)",
                French: "Niveau 2 (Rapide)",
                Italian: "Livello 2 (Veloce)",
                Japanese: "レベル 2（高速）",
                Nederlands: "Niveau 2 (Snel)",
                BrazilianPortuguese: "Nível 2 (Rápido)",
                Russian: "Уровень 2 (быстрый отклик)"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "Level3",
            selected: "Level 3",
            result: "Level 3",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "Ebene 3",
                SimplifiedChinese: "3 级",
                TraditionalChinese: "3 級",
                English: "Level 3",
                Español: "Nivel 3",
                French: "Niveau 3",
                Italian: "Livello 3",
                Japanese: "レベル 3",
                Nederlands: "Niveau 3",
                BrazilianPortuguese: "Nível 3",
                Russian: "Уровень 3"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "Level4",
            selected: "Level 4",
            result: "Level 4",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "Ebene 4",
                SimplifiedChinese: "4 级",
                TraditionalChinese: "4 級",
                English: "Level 4",
                Español: "Nivel 4",
                French: "Niveau 4",
                Italian: "Livello 4",
                Japanese: "レベル 4",
                Nederlands: "Niveau 4",
                BrazilianPortuguese: "Nível 4",
                Russian: "Уровень 4"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "Level5(Fastest)",
            selected: "Level 5 (Fastest)",
            result: "Level 5 (Fastest)",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "Ebene 5 (Am schnellsten)",
                SimplifiedChinese: "5 级（最快）",
                TraditionalChinese: "5 級（最快）",
                English: "Level 5 (Fastest)",
                Español: "Nivel 5 (El más rápido)",
                French: "Niveau 5 (Le plus rapide)",
                Italian: "Livello 5 (Il più veloce)",
                Japanese: "レベル 4（最速）",
                Nederlands: "Niveau 5 (Snelste)",
                BrazilianPortuguese: "Nível 5 (O mais rápido)",
                Russian: "Уровень 5 (самый быстрый)"
            }
        },
        // 上一步
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key,
        }
    ];
};