// 影像 > 回應時間

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes, OffNodes } from '../_utilities';
const DefaultNodesEnum = new DefaultNodes();
const BackNodesEnum = new BackNodes();
const OffNodesEnum = new OffNodes();

export default class MprtNodes extends DefaultNodes implements Nodes {
    key = "MPRT";
    selected = OffNodesEnum.selected;
    result = OffNodesEnum.result;
    displayValue = true;
    disabled = true;
    size = 6;
    mode = ModeType.button;
    language = {
        German: "MPRT",
        SimplifiedChinese: "MPRT",
        TraditionalChinese: "MPRT",
        English: "MPRT",
        Español: "MPRT",
        French: "MPRT",
        Italian: "MPRT",
        Japanese: "MPRT",
        Nederlands: "MPRT",
        BrazilianPortuguese: "MPRT",
        Russian: "MPRT"
    };
    nodes = [
        {
            ...JSON.parse(JSON.stringify(OffNodesEnum)),
            parents: this.key,
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "Level1",
            selected: "Level 1",
            result: "Level 1",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "Ebene 1",
                SimplifiedChinese: "1 级",
                TraditionalChinese: "1 級",
                English: "Level 1",
                Español: "Nivel 1",
                French: "Niveau 1",
                Italian: "Livello 1",
                Japanese: "レベル 1",
                Nederlands: "Niveau 1",
                BrazilianPortuguese: "Nível 1",
                Russian: "Уровень 1"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "Level2",
            selected: "Level 2",
            result: "Level 2",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "Ebene 2",
                SimplifiedChinese: "2 级",
                TraditionalChinese: "2 級",
                English: "Level 2",
                Español: "Nivel 2",
                French: "Niveau 2",
                Italian: "Livello 2",
                Japanese: "レベル 2",
                Nederlands: "Niveau 2",
                BrazilianPortuguese: "Nível 2",
                Russian: "Уровень 2"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "Level3",
            selected: "Level 3",
            result: "Level 3",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "Ebene 3",
                SimplifiedChinese: "3 级",
                TraditionalChinese: "3 級",
                English: "Level 3",
                Español: "Nivel 3",
                French: "Niveau 3",
                Italian: "Livello 3",
                Japanese: "レベル 3",
                Nederlands: "Niveau 3",
                BrazilianPortuguese: "Nível 3",
                Russian: "Уровень 3"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "Level4",
            selected: "Level 4",
            result: "Level 4",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "Ebene 4",
                SimplifiedChinese: "4 级",
                TraditionalChinese: "4 級",
                English: "Level 4",
                Español: "Nivel 4",
                French: "Niveau 4",
                Italian: "Livello 4",
                Japanese: "レベル 4",
                Nederlands: "Niveau 4",
                BrazilianPortuguese: "Nível 4",
                Russian: "Уровень 4"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "Level5",
            selected: "Level 5",
            result: "Level 5",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "Ebene 5",
                SimplifiedChinese: "5 级",
                TraditionalChinese: "5 級",
                English: "Level 5",
                Español: "Nivel 5",
                French: "Niveau 5",
                Italian: "Livello 5",
                Japanese: "レベル 5",
                Nederlands: "Niveau 5",
                BrazilianPortuguese: "Nível 5",
                Russian: "Уровень 5"
            }
        },
        // 上一步
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key,
        }
    ];
};