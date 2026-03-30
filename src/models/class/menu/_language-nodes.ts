// 功能表 > 語言

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes, NextPageButtonsNodes, PreviousPageButtonsNodes } from '../_utilities';

const DefaultNodesEnum = new DefaultNodes();
const BackNodesEnum = new BackNodes();
const PreviousPageButtonsNodesEnum = new PreviousPageButtonsNodes();
const NextPageButtonsNodesEnum = new NextPageButtonsNodes();

export default class LanguageNodes extends DefaultNodes implements Nodes {
    key = "Language";
    selected = "English";
    result = "English";
    displayValue = true;
    size = 11;
    mode = ModeType.button;
    language = {
        German: "Sprache",
        SimplifiedChinese: "语言",
        TraditionalChinese: "語言",
        English: "Language",
        Español: "Idioma",
        French: "Langue",
        Italian: "Lingua",
        Japanese: "言語",
        Nederlands: "Taal",
        BrazilianPortuguese: "Idioma",
        Russian: "Язык"
    };
    nodes = [
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "German",
            selected: "German",
            result: "German",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "Deutsch",
                SimplifiedChinese: "Deutsch",
                TraditionalChinese: "Deutsch",
                English: "Deutsch",
                Español: "Deutsch",
                French: "Deutsch",
                Italian: "Deutsch",
                Japanese: "Deutsch",
                Nederlands: "Deutsch",
                BrazilianPortuguese: "Deutsch",
                Russian: "Deutsch"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "SimplifiedChinese",
            selected: "SimplifiedChinese",
            result: "SimplifiedChinese",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "简体中文",
                SimplifiedChinese: "简体中文",
                TraditionalChinese: "简体中文",
                English: "简体中文",
                Español: "简体中文",
                French: "简体中文",
                Italian: "简体中文",
                Japanese: "简体中文",
                Nederlands: "简体中文",
                BrazilianPortuguese: "简体中文",
                Russian: "简体中文"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "TraditionalChinese",
            selected: "TraditionalChinese",
            result: "TraditionalChinese",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "繁體中文",
                SimplifiedChinese: "繁體中文",
                TraditionalChinese: "繁體中文",
                English: "繁體中文",
                Español: "繁體中文",
                French: "繁體中文",
                Italian: "繁體中文",
                Japanese: "繁體中文",
                Nederlands: "繁體中文",
                BrazilianPortuguese: "繁體中文",
                Russian: "繁體中文"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "English",
            selected: "English",
            result: "English",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "English",
                SimplifiedChinese: "English",
                TraditionalChinese: "English",
                English: "English",
                Español: "English",
                French: "English",
                Italian: "English",
                Japanese: "English",
                Nederlands: "English",
                BrazilianPortuguese: "English",
                Russian: "English"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "Español",
            selected: "Español",
            result: "Español",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "Español",
                SimplifiedChinese: "Español",
                TraditionalChinese: "Español",
                English: "Español",
                Español: "Español",
                French: "Español",
                Italian: "Español",
                Japanese: "Español",
                Nederlands: "Español",
                BrazilianPortuguese: "Español",
                Russian: "Español"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "French",
            selected: "French",
            result: "French",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "Français",
                SimplifiedChinese: "Français",
                TraditionalChinese: "Français",
                English: "Français",
                Español: "Français",
                French: "Français",
                Italian: "Français",
                Japanese: "Français",
                Nederlands: "Français",
                BrazilianPortuguese: "Français",
                Russian: "Français"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "Italian",
            selected: "Italian",
            result: "Italian",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "Italiano",
                SimplifiedChinese: "Italiano",
                TraditionalChinese: "Italiano",
                English: "Italiano",
                Español: "Italiano",
                French: "Italiano",
                Italian: "Italiano",
                Japanese: "Italiano",
                Nederlands: "Italiano",
                BrazilianPortuguese: "Italiano",
                Russian: "Italiano"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "Japanese",
            selected: "Japanese",
            result: "Japanese",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "日本語",
                SimplifiedChinese: "日本語",
                TraditionalChinese: "日本語",
                English: "日本語",
                Español: "日本語",
                French: "日本語",
                Italian: "日本語",
                Japanese: "日本語",
                Nederlands: "日本語",
                BrazilianPortuguese: "日本語",
                Russian: "日本語"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "Nederlands",
            selected: "Nederlands",
            result: "Nederlands",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "Nederlands",
                SimplifiedChinese: "Nederlands",
                TraditionalChinese: "Nederlands",
                English: "Nederlands",
                Español: "Nederlands",
                French: "Nederlands",
                Italian: "Nederlands",
                Japanese: "Nederlands",
                Nederlands: "Nederlands",
                BrazilianPortuguese: "Nederlands",
                Russian: "Nederlands"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "BrazilianPortuguese",
            selected: "BrazilianPortuguese",
            result: "BrazilianPortuguese",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "Português",
                SimplifiedChinese: "Português",
                TraditionalChinese: "Português",
                English: "Português",
                Español: "Português",
                French: "Português",
                Italian: "Português",
                Japanese: "Português",
                Nederlands: "Português",
                BrazilianPortuguese: "Português",
                Russian: "Português"
            }
        },
        {
            // 下一頁
            ...JSON.parse(JSON.stringify(NextPageButtonsNodesEnum)),
            parents: this.key,
        },
        {
            // 上一頁
            ...JSON.parse(JSON.stringify(PreviousPageButtonsNodesEnum)),
            parents: this.key,
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "Russian",
            selected: "Russian",
            result: "Russian",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "Pусский",
                SimplifiedChinese: "Pусский",
                TraditionalChinese: "Pусский",
                English: "Pусский",
                Español: "Pусский",
                French: "Pусский",
                Italian: "Pусский",
                Japanese: "Pусский",
                Nederlands: "Pусский",
                BrazilianPortuguese: "Pусский",
                Russian: "Pусский"
            }
        },
        // 上一步
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key
        }
    ]
};