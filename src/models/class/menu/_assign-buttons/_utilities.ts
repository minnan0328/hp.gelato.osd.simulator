// 功能表 > 指定鍵 > 1~3 共用

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '@/models/class/_utilities';
import BrightnessNodes from '@/models/class/image/_brightness-nodes';
import ColorNodes from '@/models/class/color/color';
import MessageTimersNodes from '@/models/class/gaming/_message-timers/message-timers-nodes';
import RefreshRateNodes from '@/models/class/gaming/_refresh-rate-nodes';
import CrosshairNodes from '@/models/class/gaming/_crosshair/crosshair-nodes';

const BrightnessNodesEnum = new BrightnessNodes();
const ColorNodesEnum = new ColorNodes();
const MessageTimersNodesEnum = new MessageTimersNodes();
const RefreshRateNodesEnum = new RefreshRateNodes();
const CrosshairNodesEnum = new CrosshairNodes();

export class AssignBrightnessNodes extends DefaultNodes implements Nodes {
    key = "AssignBrightness";
    selected = "Brightness";
    result = "Brightness";
    mode = ModeType.radio;
    language = BrightnessNodesEnum.language;
};

export class AssignColorNodes extends DefaultNodes implements Nodes {
    key = "AssignColor";
    selected = "Color";
    result = "Color";
    mode = ModeType.radio;
    language = ColorNodesEnum.language;
};

export class AssignDisplayInformationNodes extends DefaultNodes implements Nodes {
    key = "AssignDisplayInformation";
    selected = "Display Information";
    result = "Display Information";
    mode = ModeType.radio;
    language = {
        German: "Display-Information",
        SimplifiedChinese: "显示信息",
        TraditionalChinese: "顯示資訊",
        English: "Display Information",
        Español: "Información de pantalla",
        French: "Afficher Informations",
        Italian: "Visualizza Informazioni",
        Japanese: "ディスプレイ情報",
        Nederlands: "Informatie weergeven",
        BrazilianPortuguese: "Informações do monitor",
        Russian: "Информация"
    };
};

export class AssignNextActiveInputNodes extends DefaultNodes implements Nodes {
    key = "AssignNextActiveInput";
    selected = "Next Active Input";
    result = "Next Active Input";
    mode = ModeType.radio;
    language = {
        German: "Nächster aktiver Eingang",
        SimplifiedChinese: "下一个有效输入",
        TraditionalChinese: "下一個使用中的輸入",
        English: "Next Active Input",
        Español: "Siguiente entrada activa",
        French: "Prochaine entrée active",
        Italian: "Ingresso attivo successivo",
        Japanese: "次のアクティブな入力",
        Nederlands: "Volgende actieve ingang",
        BrazilianPortuguese: "Entr. ativa seguinte",
        Russian: "След. активный вход"
    };
};

export class AssignMessageTimersNodes extends DefaultNodes implements Nodes {
    key = "AssignMessageTimers";
    selected = "Message Timers";
    result = "Message Timers";
    mode = ModeType.radio;
    language = MessageTimersNodesEnum.language;
};

export class AssignRefreshRateNodes extends DefaultNodes implements Nodes {
    key = "AssignRefreshRate";
    selected = "Refresh Rate";
    result = "Refresh Rate";
    mode = ModeType.radio;
    language = RefreshRateNodesEnum.language;
};

export class AssignCrosshairNodes extends DefaultNodes implements Nodes {
    key = "AssignCrosshair";
    selected = "Crosshair";
    result = "Crosshair";
    mode = ModeType.radio;
    language = CrosshairNodesEnum.language;
};
export class AssignEmptyNodes extends DefaultNodes implements Nodes {
    key = "AssignEmpty(NoFunction)";
    selected = "Empty (No Function)";
    result = "Empty (No Function)";
    mode = ModeType.radio;
    language = {
        German: "Leer (keine Funktion)",
        SimplifiedChinese: "空（不具备任何功能）",
        TraditionalChinese: "無定義（沒有功能）",
        English: "Empty (No Function)",
        Español: "Vacía (sin función)",
        French: "Vide (sans fonction)",
        Italian: "Vuoto (inutile)",
        Japanese: "空き（機能なし）",
        Nederlands: "Leeg (geen functie)",
        BrazilianPortuguese: "Vazio (sem função)",
        Russian: "Пусто (функция не назначена)"
    };
};