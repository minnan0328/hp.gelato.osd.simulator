import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../../_utilities';
const DefaultNodesEnum = new DefaultNodes();

export default class CountdownTimerNodes extends DefaultNodes implements Nodes {
    key = "CountdownTimer";
    displayValue = true;
    selected = "Countdown Timer";
    result = "Countdown Timer";
    mode = ModeType.radio;
    timeUnit = "minutes";
    language = {
        German: "Countdown",
        SimplifiedChinese: "倒计时计时器",
        TraditionalChinese: "倒數計時器",
        English: "Countdown Timer",
        Español: "Temporizador de cuenta atrás",
        French: "Compte à rebours",
        Italian: "Timer conto alla rovescia",
        Japanese: "カウントダウン タイマー",
        Nederlands: "Afteltimer",
        BrazilianPortuguese: "Temporizador decrescente",
        Russian: "Таймер обратного отсчета"
    }
    nodes = [
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "CountdownTimerSet",
            selected: 20,
            result: 20,
            rangeMin: 1,
            rangeMax: 120,
            step: 5,
            parents: this.key,
            mode: ModeType.verticalRange,
            timeUnit: this.timeUnit,
            language: this.language
        }
    ]
};