// 亮度基本值，依據 color 切換有不同亮度
import type { Nodes, Language } from "@/types";
import { ModeType } from "@/types";

export class DefaultNodes implements Nodes {
    key = "";
    selected!: number | string | string[] | boolean | object |null;
    result!: number | string | string[] | boolean | object | null;
    brightness = 100; // 亮度
    rgb = { r: 255, g: 255, b: 255 }; // RGB 顏色值
    optionColor = ""; // HEX 顏色值
    assignItemDisplay = true; // 顯示在快捷 menu 上面
    assignItemChildrenDisplay = false; // 顯示在快捷 menu 的子選單上面
    menuItemDisplay = true; // 顯示在 menu 上面
    disabled = false; // 是否禁用該選項
    displayValue = false; // 顯示選擇的結果在下一層 menu 上面
    displayState = false; // 顯示選擇的結果在該層 menu 上面
    livePreview = false; // 是否即時預覽
    size = 0;
    page = 1;
    parents = null;
    mode = ModeType.button;
    rangeMin: number | { x: number; y: number } = 0;
    rangeMax: number | { x: number; y: number } = 0;
    step = 1;
    horizontalRangeFocus = false;
    rangeMaxIcon = null
    rangeMinIcon = null;
    only = ["DisplayPort", "HDMI 1", "HDMI 2"];
    mergeGrid = false;
    language: Language = {
        German: "",
        SimplifiedChinese: "",
        TraditionalChinese: "",
        English: "",
        Español: "",
        French: "",
        Italian: "",
        Japanese: "",
        Nederlands: "",
        BrazilianPortuguese: "",
        Russian: ""
    };
    unitText: Language = {
        German: "",
        SimplifiedChinese: "",
        TraditionalChinese: "",
        English: "",
        Español: "",
        French: "",
        Italian: "",
        Japanese: "",
        Nederlands: "",
        BrazilianPortuguese: "",
        Russian: ""
    };
    timeUnit = "";
    useIcon = false;
    svgIcon = null;
    nodes!: Nodes[] | null;
};

export class ResetNodes extends DefaultNodes implements Nodes {
    key = "Reset";
    mode = ModeType.button;
    language = {
        German: "Zurücksetzen",
        SimplifiedChinese: "重置",
        TraditionalChinese: "重置",
        English: "Reset",
        Español: "Restablecer",
        French: "Réinitialiser",
        Italian: "Reset",
        Japanese: "リセット",
        Nederlands: "Opnieuw instellen",
        BrazilianPortuguese: "Redefinir",
        Russian: "Сброс"
    };
};

export class BackNodes extends DefaultNodes implements Nodes {
    key = "Back";
    mode = ModeType.button;
    language = {
        German: "Zurück",
        SimplifiedChinese: "返回",
        TraditionalChinese: "上一步",
        English: "Back",
        Español: "Regresar",
        French: "Retour",
        Italian: "Indietro",
        Japanese: "戻る",
        Nederlands: "Terug",
        BrazilianPortuguese: "Retroceder",
        Russian: "Назад"
    };
};
export class ExitNodes extends DefaultNodes implements Nodes {
    key = "Exit";
    mode = ModeType.button;
    language = {
        German: "Beenden",
        SimplifiedChinese: "退出",
        TraditionalChinese: "退出",
        English: "Exit",
        Español: "Salir",
        French: "Quitter",
        Italian: "Uscita",
        Japanese: "終了",
        Nederlands: "Afsluiten",
        BrazilianPortuguese: "Sair",
        Russian: "Выход"
    };
};

// On enum
export class OnNodes extends DefaultNodes implements Nodes {
    key = "On";
    selected = "On";
    result = "On";
    mode = ModeType.radio;
    language = {
        German: "Ein",
        SimplifiedChinese: "开",
        TraditionalChinese: "開",
        English: "On",
        Español: "Encendido",
        French: "Oui",
        Italian: "Attivato",
        Japanese: "オン",
        Nederlands: "Aan",
        BrazilianPortuguese: "Ativado",
        Russian: "Вкл."
    };
};

// Off enum
export class OffNodes extends DefaultNodes implements Nodes {
    key = "Off";
    selected = "Off";
    result = "Off";
    mode = ModeType.radio;
    language = {
        German: "Aus",
        SimplifiedChinese: "关闭",
        TraditionalChinese: "關",
        English: "Off",
        Español: "Apagado",
        French: "Eteint",
        Italian: "Spento",
        Japanese: "オフ",
        Nederlands: "Uit",
        BrazilianPortuguese: "Desligado",
        Russian: "Выкл."
    };
};

// Low enum
export class LowNodes extends DefaultNodes implements Nodes {
    key = "Low";
    selected = "Low";
    result = "Low";
    mode = ModeType.radio;
    language = {
        German: "Niedrig",
        SimplifiedChinese: "低",
        TraditionalChinese: "低",
        English: "Low",
        Español: "Baja",
        French: "Bas",
        Italian: "Bassa",
        Japanese: "低",
        Nederlands: "Laag",
        BrazilianPortuguese: "Baixo",
        Russian: "Низк."
    };
};

// Medium enum
export class MediumNodes extends DefaultNodes implements Nodes {
    key = "Medium";
    selected = "Medium";
    result = "Medium";
    mode = ModeType.radio;
    language = {
        German: "Mittel",
        SimplifiedChinese: "中",
        TraditionalChinese: "中",
        English: "Medium",
        Español: "Media",
        French: "Moyen",
        Italian: "Media",
        Japanese: "中",
        Nederlands: "Gemiddeld",
        BrazilianPortuguese: "Médio",
        Russian: "Средн."
    };
};

// High enum
export class HighNodes extends DefaultNodes implements Nodes {
    key = "High";
    selected = "High";
    result = "High";
    mode = ModeType.radio;
    language = {
        German: "Hoch",
        SimplifiedChinese: "高",
        TraditionalChinese: "高",
        English: "High",
        Español: "Alta",
        French: "Haut",
        Italian: "Alta",
        Japanese: "高",
        Nederlands: "Hoog",
        BrazilianPortuguese: "Alto",
        Russian: "Высок."
    };
};
// Top enum
export class TopNodes extends DefaultNodes implements Nodes {
    key = "Top";
    selected = "Top";
    result = "Top";
    mode = ModeType.radio;
    language = {
        German: "Oben",
        SimplifiedChinese: "顶部",
        TraditionalChinese: "上",
        English: "Top",
        Español: "Superior",
        French: "Haut",
        Italian: "In alto",
        Japanese: "上",
        Nederlands: "Boven",
        BrazilianPortuguese: "Superior",
        Russian: "Сверху"
    };
};
// Bottom enum
export class BottomNodes extends DefaultNodes implements Nodes {
    key = "Bottom";
    selected = "Bottom";
    result = "Bottom";
    mode = ModeType.radio;
    language = {
        German: "Unten",
        SimplifiedChinese: "底部",
        TraditionalChinese: "下",
        English: "Bottom",
        Español: "Inferior",
        French: "Bas",
        Italian: "In basso",
        Japanese: "下",
        Nederlands: "Onder",
        BrazilianPortuguese: "Inferior",
        Russian: "Снизу"
    
    };
};

export class YesNodes extends DefaultNodes implements Nodes {
    key = "Yes";
    selected = "Yes";
    result = "Yes";
    mode = ModeType.button;
    language = {
        German: "Ja",
        SimplifiedChinese: "是",
        TraditionalChinese: "是",
        English: "Yes",
        Español: "Sí",
        French: "Oui",
        Italian: "Sì",
        Japanese: "はい",
        Nederlands: "Ja",
        BrazilianPortuguese: "Sim",
        Russian: "Да"
    };
};

export class NoNodes extends DefaultNodes implements Nodes {
    key = "No";
    selected = "No";
    result = "No";
    mode = ModeType.button;
    language = {
        German: "Nein",
        SimplifiedChinese: "否",
        TraditionalChinese: "否",
        English: "No",
        Español: "No",
        French: "Non",
        Italian: "No",
        Japanese: "いいえ",
        Nederlands: "Nee",
        BrazilianPortuguese: "Não",
        Russian: "Нет"
    };
};

// page change button
export class PreviousPageButtonsNodes extends DefaultNodes implements Nodes {
    key = "PreviousPageButtons";
    mode = ModeType.paginationButton;
    language = {
        German: "Vorherige Seite",
        SimplifiedChinese: "上一页",
        TraditionalChinese: "上一頁",
        English: "Previous Page",
        Español: "Página anterior",
        French: "Page précédente",
        Italian: "Pagina precedente",
        Japanese: "前のページ",
        Nederlands: "Vorige pagina",
        BrazilianPortuguese: "Página anterior",
        Russian: "Предыдущая страница"
    };
};
// page change button
export class NextPageButtonsNodes extends DefaultNodes implements Nodes {
    key = "NextPageButtons";
    mode = ModeType.paginationButton;
    language = {
        German: "Nächste Seite",
        SimplifiedChinese: "下一页",
        TraditionalChinese: "下一頁",
        English: "Next Page",
        Español: "Página siguiente",
        French: "Page suivante",
        Italian: "Pagina successiva",
        Japanese: "次のページ",
        Nederlands: "Volgende pagina",
        BrazilianPortuguese: "Página seguinte",
        Russian: "Следующая страница"
    };
};