import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../../_utilities';
const DefaultNodesEnum = new DefaultNodes();

export default class SpeedrunTimerNodes extends DefaultNodes implements Nodes {
    key = "SpeedrunTimer";
    displayValue = true;
    selected = "Speedrun Timer";
    result = "Speedrun Timer";
    timeUnit = "seconds";
    mode = ModeType.radio;
    language = {
        German: "Speedrun Timer",
        SimplifiedChinese: "竞速计时器",
        TraditionalChinese: "競速計時器",
        English: "Speedrun Timer",
        Español: "Temporizador de speedrun",
        French: "Minuterie de speedrun",
        Italian: "Timer velocità di esecuzione",
        Japanese: "スピードランタイマー",
        Nederlands: "Speedrun-timer",
        BrazilianPortuguese: "Temporizador de speedrun",
        Russian: "Таймер скоростн. прохождения"
    }
};