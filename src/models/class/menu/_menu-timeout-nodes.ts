// 功能表 > 功能表延遲

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes } from '../_utilities';
const DefaultNodesEnum = new DefaultNodes();

const BackNodesEnum = new BackNodes();

export default class MenuTimeoutNodes extends DefaultNodes implements Nodes {
    key = "MenuTimeout";
    selected = 30;
    result = 30;
    displayValue = true;
    size = 1;
    mode = ModeType.button;
    language = {
        German: "Menü-Timeout",
        SimplifiedChinese: "菜单超时",
        TraditionalChinese: "功能表逾時",
        English: "Menu Timeout",
        Español: "Tiempo de espera del menú",
        French: "Délai d'expiration du menu",
        Italian: "Timeout menu",
        Japanese: "メニューのタイムアウト",
        Nederlands: "Menu Time-out",
        BrazilianPortuguese: "Tempo limite do menu",
        Russian: "Тайм-аут меню"
    };
    unitText = {
        German: "s",
        SimplifiedChinese: "s",
        TraditionalChinese: "s",
        English: "s",
        Español: "s",
        French: "s",
        Italian: "s",
        Japanese: "s",
        Nederlands: "s",
        BrazilianPortuguese: "s",
        Russian: "s"
    };
    nodes = [
        {
            // Range (5~60)
            // Y (FD=60) for Accessibility mode
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "MenuTimeoutNodes",
            selected: this.selected,
            result: this.result,
            parents: this.key,
            mode: ModeType.verticalRange,
            rangeMin: 5,
            rangeMax: 60,
            language: {
                German: "Menü-Timeout",
                SimplifiedChinese: "菜单超时",
                TraditionalChinese: "功能表逾時",
                English: "Menu Time-out",
                Español: "Tiempo de espera del menú",
                French: "Délai d'expiration du menu",
                Italian: "Timeout menu",
                Japanese: "メニューのタイムアウト",
                Nederlands: "Menu Time-out",
                BrazilianPortuguese: "Tempo limite do menu",
                Russian: "Тайм-аут меню"
            },
            unitText: this.unitText
        }
    ]
};