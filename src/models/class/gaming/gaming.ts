import { ModeType } from "@/types";
import type { Nodes } from "@/types";
import { DefaultNodes, ResetNodes, BackNodes } from '../_utilities';
import AndFreeSyncNode from './_amd-free-sync-nodes';
import ResponseTimeNodes from './_response-rime-nodes';
import RefreshRateNodes from './_refresh-rate-nodes';
import CrosshairNodes from './_crosshair/crosshair-nodes';
import MessageTimersNodes from './_message-timers/message-timers-nodes';
import MultiMonitorAlignNodes from './_multi-monitor-align-nodes';

const ResetNodesEnum = new ResetNodes(); 
const BackNodesEnum = new BackNodes();
const AndFreeSyncNodeEnum = new AndFreeSyncNode();
const ResponseTimeNodesEnum = new ResponseTimeNodes();
const RefreshRateNodesEnum = new RefreshRateNodes();
const CrosshairNodesEnum = new CrosshairNodes();
const MessageTimersNodesEnum = new MessageTimersNodes();
const MultiMonitorAlignNodesEnum = new MultiMonitorAlignNodes();

export default class Gaming extends DefaultNodes implements Nodes {
    key = "Gaming";
    selected = null;
    result = null;
    displayValue = true;
    size = 8;
    mode = ModeType.button;
    language = {
        German: "Spiele",
        SimplifiedChinese: "游戏",
        TraditionalChinese: "遊戲",
        English: "Gaming",
        Español: "Juegos",
        French: "Jeux",
        Italian: "Giochi",
        Japanese: "ゲーム",
        Nederlands: "Gaming",
        BrazilianPortuguese: "Jogos",
        Russian: "Игры"
    };
    nodes = [
        {
            ...JSON.parse(JSON.stringify(AndFreeSyncNodeEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(ResponseTimeNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(RefreshRateNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(CrosshairNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(MessageTimersNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(MultiMonitorAlignNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(ResetNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key
        }
    ];
}