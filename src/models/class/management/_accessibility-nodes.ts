// 管理 > 無障礙

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes, OnNodes, OffNodes } from '../_utilities';

const BackNodesEnum = new BackNodes();
const OnNodesEnum = new OnNodes();
const OffNodesEnum = new OffNodes();

export default class AccessibilityNodes extends DefaultNodes implements Nodes {
    // On = Auto-switch to English language and will turn on/off TTS (if included), High Contrast and Menu Size 2x.
    // Off = Returns to previous selected language.
    // Press/hold button 1 (or joystick 5 - CENTER) 4s to toggle
    key = "Accessibility";
    selected = OffNodesEnum.selected;
    result = OffNodesEnum.result;
    displayValue = true;
    size = 3;
    mode = ModeType.button;
    language = {
        German: "Barrierefreiheit",
        SimplifiedChinese: "辅助功能",
        TraditionalChinese: "協助工具",
        English: "Accessibility",
        Español: "Accesibilidad",
        French: "Accessibilité",
        Italian: "Accessibilità",
        Japanese: "ユーザー サポート",
        Nederlands: "Toegankelijkheid",
        BrazilianPortuguese: "Acessibilidade",
        Russian: "Спец. Возможности"
    };
    nodes = [
        {
            ...JSON.parse(JSON.stringify(OnNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(OffNodesEnum)),
            parents: this.key
        },
        // 上一步
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key
        }
    ]
};