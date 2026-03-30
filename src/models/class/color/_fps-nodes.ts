import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../_utilities';

const DefaultNodesEnum = new DefaultNodes();
export default class FPSNodes extends DefaultNodes implements Nodes {
    key = "FPS";
    selected = "FPS";
    result = "FPS";
    brightness = 80;
    rgb = { r: 255, g: 235, b: 245 };
    livePreview = true;
    mode = ModeType.radio;
    language = {
        German: "FPS",
        SimplifiedChinese: "第一人称射击游戏",
        TraditionalChinese: "第一人稱射擊遊戲",
        English: "FPS",
        Español: "FPS",
        French: "IPS",
        Italian: "FPS",
        Japanese: "FPS",
        Nederlands: "FPS",
        BrazilianPortuguese: "FPS",
        Russian: "FPS"
    };
    nodes = [
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "FPSMessage",
            selected: null,
            result: null,
            mode: ModeType.info,
            parents: this.key,
            language: {
                German: "Ego-Shooter",
                SimplifiedChinese: "第一人称射击游戏",
                TraditionalChinese: "第一人稱射擊",
                English: "First Person Shooters",
                Español: "Juegos de disparos en primera persona",
                French: "Tireurs à la première personne",
                Italian: "Sparatutto in prima persona",
                Japanese: "ファースト パーソン シューティング ゲーム",
                Nederlands: "First person shooters",
                BrazilianPortuguese: "Jogo de tiros em primeira pessoa",
                Russian: "Шутеры от первого лица"
            }
        }
    ]
};