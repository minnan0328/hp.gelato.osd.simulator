// 功能表 > 功能表透明度

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../_utilities';
const DefaultNodesEnum = new DefaultNodes();

export default class MenuTransparencyNodes extends DefaultNodes implements Nodes {
    key = "MenuTransparency";
    selected = 0;
    result = 0;
    displayValue = true;
    size = 1;
    mode = ModeType.button;
    language = {
        German: "Menütransparenz",
        SimplifiedChinese: "菜单透明度",
        TraditionalChinese: "功能表透明度",
        English: "Menu Transparency",
        Español: "Transparencia del menú",
        French: "Transparence du menu",
        Italian: "Trasparenza menu",
        Japanese: "メニューの透明度",
        Nederlands: "Menu Transparantie",
        BrazilianPortuguese: "Transparência do menu",
        Russian: "Прозрачность меню"
    };
    nodes = [
        {
            // Range (0 - 10) with 0 = Off, no transparency
            // Y (FD=0=Off)
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "MenuTransparencyNodes",
            selected: this.selected,
            result: this.result,
            parents: this.key,
            mode: ModeType.verticalRange,
            rangeMin: 0,
            rangeMax: 10,
            language: {
                German: "Menütransparenz",
                SimplifiedChinese: "菜单透明度",
                TraditionalChinese: "功能表透明度",
                English: "Menu Transparency",
                Español: "Transparencia del menú",
                French: "Transparence du menu",
                Italian: "Trasparenza menu",
                Japanese: "メニューの透明度",
                Nederlands: "Menu Transparantie",
                BrazilianPortuguese: "Transparência do menu",
                Russian: "Прозрачность меню"
            }
        }
    ]
};