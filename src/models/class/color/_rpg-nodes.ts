import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../_utilities';

const DefaultNodesEnum = new DefaultNodes();
export default class RPGNodes extends DefaultNodes implements Nodes {
    key = "RPG";
    selected = "RPG";
    result = "RPG";
    brightness = 52;
    rgb = { r: 255, g: 255, b: 255 };
    livePreview = true;
    mode = ModeType.radio;
    size = 2;
    language = {
        German: "Rollenspiel",
        SimplifiedChinese: "角色扮演游戏",
        TraditionalChinese: "角色扮演遊戲",
        English: "RPG",
        Español: "RPG",
        French: "RPG",
        Italian: "RPG",
        Japanese: "RPG",
        Nederlands: "RPG",
        BrazilianPortuguese: "RPG",
        Russian: "RPG"
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
            key: "RPGMessage",
            selected: null,
            result: null,
            mode: ModeType.info,
            parents: this.key,
            language: {
                German: "RPGs",
                SimplifiedChinese: "角色扮演游戏",
                TraditionalChinese: "角色扮演遊戲",
                English: "Role Playing Games",
                Español: "Juegos de rol",
                French: "Jeux de rôle",
                Italian: "Giochi di ruolo",
                Japanese: "ロール プレイング ゲーム",
                Nederlands: "Rollengames",
                BrazilianPortuguese: "Jogos de representação de papéis (RPG)",
                Russian: "Ролевые игры"
            }
        }
    ]
};