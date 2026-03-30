import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes, ResetNodes, OnNodes, OffNodes, ExitNodes } from '../../_utilities';
import SpeedrunTimerNodes from './_speedrun-timer-nodes';
import CountdownTimerNodes from './_countdown-timer-nodes';
import StartStopNodes from './_start-stop-nodes';
import RestTimerNodes from './_reset-timer-nodes';
import MessageNodes from './_message-nodes';
import ColorNodes from '../_color/color-nodes';
import LocationNodes from '../_location/location-nodes';
const DefaultNodesEnum = new DefaultNodes();
const BackNodesEnum = new BackNodes();
const OnNodesEnum = new OnNodes();
const OffNodesEnum = new OffNodes();
const ResetNodesEnum = new ResetNodes();
const ExitNodesEnum = new ExitNodes();
const SpeedrunTimerNodesEnum = new SpeedrunTimerNodes();
const CountdownTimerNodesEnum = new CountdownTimerNodes();
const StartStopNodesEnum = new StartStopNodes();
const ResetTimerNodesEnum = new RestTimerNodes();
const MessageNodesEnum = new MessageNodes();
const ColorNodesEnum = new ColorNodes();
const LocationNodesEnum = new LocationNodes();

export default class MessageTimersNodes extends DefaultNodes implements Nodes {
    key = "MessageTimers";
    selected = OffNodesEnum.selected;
    result = OffNodesEnum.result;
    displayValue = true;
    size = 12;
    mode = ModeType.button;
    language = {
        German: "Nachricht-Zeitgeber",
        SimplifiedChinese: "消息定时器",
        TraditionalChinese: "消息定時器",
        English: "Message Timers",
        Español: "Temporizadores de mensajes",
        French: "Messages minuteurs",
        Italian: "Timer dei messaggi",
        Japanese: "メッセージタイマー",
        Nederlands: "Bericht-timers",
        BrazilianPortuguese: "Temporizadores de mensagem",
        Russian: "Таймеры с сообщениями"
    };
    nodes = [
        {
            ...JSON.parse(JSON.stringify(OffNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(SpeedrunTimerNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(CountdownTimerNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(StartStopNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(ResetTimerNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(MessageNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(ColorNodesEnum)),
            parents: this.key,
        },
        {
            ...JSON.parse(JSON.stringify(LocationNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(ResetNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(ExitNodesEnum)),
            parents: this.key,
        }
    ];
};