import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../_utilities';

const DefaultNodesEnum = new DefaultNodes();
export default class CinemaNodes extends DefaultNodes implements Nodes {
    key = "Cinema";
    selected = "Cinema";
    result = "Cinema";
    brightness = 20;
    rgb = { r: 255, g: 255, b: 255 };
    livePreview = true;
    mode = ModeType.radio;
    size = 6;
    language = {
        German: "Kino",
        SimplifiedChinese: "影院",
        TraditionalChinese: "劇院",
        English: "Cinema",
        Español: "Cine",
        French: "Cinéma",
        Italian: "Cinema",
        Japanese: "シネマ",
        Nederlands: "Bioscoop",
        BrazilianPortuguese: "Cinema",
        Russian: "Кино"
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
            selected: null,
            result: null,
            mode: ModeType.info,
            parents: this.key,
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            selected: null,
            result: null,
            mode: ModeType.info,
            parents: this.key,
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            selected: null,
            result: null,
            mode: ModeType.info,
            parents: this.key,
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            selected: null,
            result: null,
            mode: ModeType.info,
            parents: this.key,
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "CinemaMessage",
            selected: null,
            result: null,
            mode: ModeType.info,
            parents: this.key,
            language: {
                German: "Optimiert für die Wiedergabe von Filmen",
                SimplifiedChinese: "针对影片观看进行了优化",
                TraditionalChinese: "針對影片觀看最佳化",
                English: "Optimized for viewing movies",
                Español: "Optimizado para ver películas",
                French: "Optimisé pour la visualisation de films",
                Italian: "Ottimizzato per la visione di film",
                Japanese: "映画視聴用に最適化",
                Nederlands: "Geoptimaliseerd om films te bekijken",
                BrazilianPortuguese: "Otimizado para ver filmes",
                Russian: "Оптимизация для просмотра фильмов"
            }
        }
    ]
};