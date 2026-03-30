// 功能表 > 功能表位置

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes } from '../_utilities';

const DefaultNodesEnum = new DefaultNodes();
const BackNodesEnum = new BackNodes();

export default class MenuPositionNodes extends DefaultNodes implements Nodes {
    key = "MenuPosition";
    selected = "H=97, V=8";
    result = "H=97, V=8";
    displayValue = true;
    size = 3;
    mode = ModeType.button;
    language = {
        German: "Menüposition",
        SimplifiedChinese: "菜单位置",
        TraditionalChinese: "功能表位置",
        English: "Menu Position",
        Español: "Posición del menú",
        French: "Position du menu",
        Italian: "Posizione menu",
        Japanese: "メニューの表示位置",
        Nederlands: "Menu Positie",
        BrazilianPortuguese: "Posição do menu",
        Russian: "Положение меню"
    };
    nodes = [
        {
            // Range (0~100)
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "Horizontal",
            selected: 97,
            result: 97,
            parents: this.key,
            mode: ModeType.horizontalRange,
            rangeMin: 0,
            rangeMax: 100,
            horizontalRangeFocus: true,
            language: {
                German: "Horizontal",
                SimplifiedChinese: "水平",
                TraditionalChinese: "水平",
                English: "Horizontal",
                Español: "Horizontal",
                French: "Horizontal",
                Italian: "Orizzontale",
                Japanese: "水平",
                Nederlands: "Horizontaal",
                BrazilianPortuguese: "Horizontal",
                Russian: "Горизонтально"
            }
        },
        {
            // Range (0~100)
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "Vertical",
            selected: 8,
            result: 8,
            parents: this.key,
            mode: ModeType.horizontalRange,
            rangeMin: 0,
            rangeMax: 100,
            horizontalRangeFocus: false,
            language: {
                German: "Vertikal",
                SimplifiedChinese: "垂直",
                TraditionalChinese: "垂直",
                English: "Vertical",
                Español: "Vertical",
                French: "Vertical",
                Italian: "Verticale",
                Japanese: "垂直",
                Nederlands: "Verticaal",
                BrazilianPortuguese: "Vertical",
                Russian: "Вертикально"
            }
        },
        // 上一步
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key
        }
    ]
};