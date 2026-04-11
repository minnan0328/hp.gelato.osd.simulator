import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes } from '../../_utilities';
const DefaultNodesEnum = new DefaultNodes();
const BackNodesEnum = new BackNodes();

export default class MessageNodes extends DefaultNodes implements Nodes {
    key = "Message";
    selected = "Your Gaming Timer has Expired !";
    result = "Your Gaming Timer has Expired !";
    assignItemDisplay = false;
    displayValue = true;
    disabled = true;
    size = 5;
    mode = ModeType.button;
    language = {
        German: "Nachricht",
        SimplifiedChinese: "消息",
        TraditionalChinese: "訊息",
        English: "Message",
        Español: "Mensaje",
        French: "Message",
        Italian: "Messaggio",
        Japanese: "メッセージ",
        Nederlands: "Bericht",
        BrazilianPortuguese: "Mensagem",
        Russian: "Сообщение"
    };
    nodes = [
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "YourGamingTimerhasExpired",
            selected: "Your Gaming Timer has Expired !",
            result: "Your Gaming Timer has Expired !",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "Dein Spieltimer ist abgelaufen!",
                SimplifiedChinese: "您的游戏计时器已过期！",
                TraditionalChinese: "您的遊戲計時器已過期！",
                English: "Your Gaming Timer has Expired!",
                Español: "¡Tu temporizador ha expirado!",
                French: "Votre minuteur de jeu a expiré!",
                Italian: "Il tuo timer di gioco è scaduto!",
                Japanese: "あなたのゲームタイマーは期限切れです！",
                Nederlands: "Je gaming-timer is verlopen!",
                BrazilianPortuguese: "O seu temporizador de jogo expirou!",
                Russian: "Время таймера игры истекло!"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "PleaseStopPlayingtheGame",
            selected: "Please Stop Playing the Game !",
            result: "Please Stop Playing the Game !",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "Beenden Sie bitte das Spiel!",
                SimplifiedChinese: "请停止玩游戏！",
                TraditionalChinese: "請停止玩遊戲！",
                English: "Please Stop Playing the Game!",
                Español: "Deje de jugar al juego",
                French: "Veuillez arrêtez de jouer !",
                Italian: "Sei pregato di smettere di giocare!",
                Japanese: "ゲームのプレイを停止してください！",
                Nederlands: "Beëindig deze game!",
                BrazilianPortuguese: "Pare de jogar o jogo!",
                Russian: "Пожалуйста, выйдите из игры."
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "PleaseTakeABreak",
            selected: "Please Take a Break !",
            result: "Please Take a Break !",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "Machen Sie bitte eine Pause!",
                SimplifiedChinese: "请休息一下！",
                TraditionalChinese: "請休息一下！",
                English: "Please Take a Break!",
                Español: "Realice un descanso",
                French: "Veuillez prendre une pause !",
                Italian: "Sei pregato di fare una pausa!",
                Japanese: "休憩してください！",
                Nederlands: "Neem even pauze!",
                BrazilianPortuguese: "Faça uma pausa!",
                Russian: "Сделайте перерыв."
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "PleaseShutdowntheComputer",
            selected: "Please Shutdown the Computer !",
            result: "Please Shutdown the Computer !",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "Bitte den Computer ausschalten!",
                SimplifiedChinese: "请关闭计算机！",
                TraditionalChinese: "請將電腦關機！",
                English: "Please Shutdown the Computer!",
                Español: "Apague el equipo",
                French: "Veuillez éteindre l'ordinateur !",
                Italian: "Sei pregato di spegnere il computer!",
                Japanese: "コンピューターをシャットダウンしてください！",
                Nederlands: "Sluit de computer af!",
                BrazilianPortuguese: "Desligue o computador!",
                Russian: "Выключите компьютер."
            }
        },
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key
        }
    ];
}