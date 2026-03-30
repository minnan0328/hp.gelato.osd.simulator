import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes } from '../_utilities';

const DefaultNodesEnum = new DefaultNodes();
const BackNodesEnum = new BackNodes();

export default class MenuRotationNodes extends DefaultNodes implements Nodes {
    key = "MenuRotation";
    selected = "Landscape (0°)";
    result = "Landscape (0°)";
    displayValue = true;
    size = 5;
    mode = ModeType.button;
    language = {
        German: "Menürotation",
        SimplifiedChinese: "菜单旋转",
        TraditionalChinese: "功能表旋轉",
        English: "Menu Rotation",
        Español: "Rotación del menú",
        French: "Rotation du menu",
        Italian: "Rotazione menu",
        Japanese: "メニューの回転",
        Nederlands: "Menu Rotatie",
        BrazilianPortuguese: "Rotação do menu",
        Russian: "Поворот меню"
    };
    nodes = [
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "Landscape(0°)",
            selected: "Landscape (0°)",
            result: "Landscape (0°)",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "Querformat (0°)",
                SimplifiedChinese: "横向 (0°)",
                TraditionalChinese: "橫向 (0°)",
                English: "Landscape (0°)",
                Español: "Horizontal (0°)",
                French: "Paysage (0°)",
                Italian: "Orizzontale (0°)",
                Japanese: "横長（0度）",
                Nederlands: "Liggend (0°)",
                BrazilianPortuguese: "Horizontal (0°)",
                Russian: "Альбомная (0°)"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "Portrait(90°)",
            selected: "Portrait (90°)",
            result: "Portrait (90°)",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "Hochformat (90°)",
                SimplifiedChinese: "纵向 (90°)",
                TraditionalChinese: "直向 (90°)",
                English: "Portrait (90°)",
                Español: "Vertical (90°)",
                French: "Portrait (90°)",
                Italian: "Verticale (90°)",
                Japanese: "縦長（90度）",
                Nederlands: "Staand (90°)",
                BrazilianPortuguese: "Vertical (90°)",
                Russian: "Книжная (90°)"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "LandscapeFlipped(180°)",
            selected: "Landscape Flipped (180°)",
            result: "Landscape Flipped (180°)",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "Querformat gekippt (180°)",
                SimplifiedChinese: "横向翻转 (180°)",
                TraditionalChinese: "橫向翻轉 (180°)",
                English: "Landscape Flipped (180°)",
                Español: "Horizontal volteada (180°)",
                French: "Paysage inversé (180°)",
                Italian: "Orizzontale capovolto (180°)",
                Japanese: "横長反転（180度）",
                Nederlands: "Liggend gespiegeld (180°)",
                BrazilianPortuguese: "Horizontal virada (180°)",
                Russian: "Альбомная перевернутая (180°)"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "PortraitFlipped(270°)",
            selected: "Portrait Flipped (270°)",
            result: "Portrait Flipped (270°)",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "Hochformat gekippt (270°)",
                SimplifiedChinese: "纵向翻转 (270°)",
                TraditionalChinese: "直向翻轉 (270°)",
                English: "Portrait Flipped (270°)",
                Español: "Vertical volteada (270°)",
                French: "Portrait inversé (270°)",
                Italian: "Verticale capovolto (270°)",
                Japanese: "縦長反転（270度）",
                Nederlands: "Staand gespiegeld (270°)",
                BrazilianPortuguese: "Vertical virada (270°)",
                Russian: "Книжная перевернутая (270°)"
            }
        },
        // 上一步
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key
        },
    ]
};