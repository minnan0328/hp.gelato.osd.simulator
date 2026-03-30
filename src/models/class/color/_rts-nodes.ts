import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../_utilities';

const DefaultNodesEnum = new DefaultNodes();
export default class RTSNodes extends DefaultNodes implements Nodes {
    key = "RTS";
    selected = "RTS";
    result = "RTS";
    brightness = 68;
    rgb = { r: 255, g: 255, b: 255 };
    livePreview = true;
    mode = ModeType.radio;
    size = 3;
    language = {
        German: "RTS",
        SimplifiedChinese: "即时战略游戏",
        TraditionalChinese: "即時策略遊戲",
        English: "RTS",
        Español: "RTS",
        French: "RTS",
        Italian: "RTS",
        Japanese: "RTS",
        Nederlands: "RTS",
        BrazilianPortuguese: "RTS",
        Russian: "RTS"
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
            key: "RTSMessage",
            selected: null,
            result: null,
            mode: ModeType.info,
            parents: this.key,
            language: {
                German: "Echtzeitstrategie",
                SimplifiedChinese: "实时战略",
                TraditionalChinese: "即時策略",
                English: "Real-Time Strategy",
                Español: "Estrategia en tiempo real",
                French: "Stratégie en temps réel",
                Italian: "Strategia in tempo reale",
                Japanese: "リアルタイム ストラテジー",
                Nederlands: "Realtime strategie",
                BrazilianPortuguese: "Estratégia em tempo real",
                Russian: "Стратегия в реальном времени"
            }
        }
    ]
};