// 功能表 > OSD 訊息

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes } from '../../_utilities';
import MonitorStatusNodes from './_monitor-status-nodes';

const DefaultNodesEnum = new DefaultNodes();
const BackNodesEnum = new BackNodes();
const MonitorStatusNodesEnum = new MonitorStatusNodes();

export default class OSDMessagesNodes extends DefaultNodes implements Nodes {
    key = "OSDMessages";
    selected = ["Power-On Logo", "No Input Signal Warning", "Confirm Change Message"];
    result = ["Power-On Logo", "No Input Signal Warning", "Confirm Change Message"];
    size = 5;
    mode = ModeType.button;
    language = {
        German: "OSD-Nachrichten",
        SimplifiedChinese: "OSD 消息",
        TraditionalChinese: "OSD 訊息",
        English: "OSD Messages",
        Español: "Mensajes OSD",
        French: "Messages OSD",
        Italian: "Messaggi OSD",
        Japanese: "OSDメッセージ",
        Nederlands: "Schermweergaveberichten",
        BrazilianPortuguese: "Mensagens OSD",
        Russian: "Сообщения OSD"
    };
    nodes = [
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "PowerOnLogo",
            selected: "Power-On Logo",
            result: "Power-On Logo",
            parents: this.key,
            mode: ModeType.checkBox,
            language: {
                German: "Power-On Logo",
                SimplifiedChinese: "开机徽标",
                TraditionalChinese: "電源開啟標誌",
                English: "Power-On Logo",
                Español: "Logotipo de encendido",
                French: "Logo de mise sous tension",
                Italian: "Logo accensione",
                Japanese: "電源投入時ロゴ",
                Nederlands: "Logo bij inschakelen",
                BrazilianPortuguese: "Logótipo de arranque",
                Russian: "Логотип при включении питания"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "NoInputSignalWarning",
            selected: "No Input Signal Warning",
            result: "No Input Signal Warning",
            parents: this.key,
            mode: ModeType.checkBox,
            language: {
                German: "Keine Eingangssignal-Warnung",
                SimplifiedChinese: "无输入信号警告",
                TraditionalChinese: "「無輸入訊號」警告",
                English: "No Input Signal Warning",
                Español: "Advertencia de falta de señal de entrada",
                French: "Avertissement : Aucun signal d'entrée",
                Italian: "Avviso assenza segnale ingresso",
                Japanese: "警告、入力信号なし",
                Nederlands: "Waarschuwing geen signaal",
                BrazilianPortuguese: "Aviso de sem sinal de entrada",
                Russian: "Предупреждение: нет входного сигнала"
            }
        },
        {
            // Y (FD=On=>checked) EMEA
            // Y (FD=Off=>unchecked) Non-EMEA
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "ConfirmChangeMessage",
            selected: "Confirm Change Message",
            result: "Confirm Change Message",
            parents: this.key,
            mode: ModeType.checkBox,
            language: {
                German: "Änderungsmeldung bestätigen",
                SimplifiedChinese: "确认变更讯息",
                TraditionalChinese: "確認變更訊息",
                English: "Confirm Change Message",
                Español: "Confirmar mensaje de cambio",
                French: "Confirmer le message de modification",
                Italian: "Conferma il messaggio di modifica",
                Japanese: "変更メッセージの確認",
                Nederlands: "Bevestig wijzigingsbericht",
                BrazilianPortuguese: "Confirmar mensagem de alteração",
                Russian: "подтвердить изменение"
            }
        },
        {
            ...JSON.parse(JSON.stringify(MonitorStatusNodesEnum)),
        },
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key
        }
    ]
};