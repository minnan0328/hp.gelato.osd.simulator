import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import Color from '../color/color';
import { DefaultNodes, ExitNodes } from '../_utilities';

const DefaultNodesEnum = new DefaultNodes();
const ColorEnum = new Color();
const ExitNodesEnum = new ExitNodes();

export default class Information extends DefaultNodes implements Nodes {
    key = "Information";
    size = 7;
    mode = ModeType.info;
    language = {
        German: "Information",
        SimplifiedChinese: "信息",
        TraditionalChinese: "資訊",
        English: "Information",
        Español: "Información",
        French: "Informations",
        Italian: "Informazioni",
        Japanese: "情報",
        Nederlands: "Informatie",
        BrazilianPortuguese: "Informação",
        Russian: "Информация"
    };
    nodes = [
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "CurrentMode",
            selected: "1920x1080 120Hz",
            result: "1920x1080 120Hz",
            displayValue: true,
            parents: this.key,
            mode: ModeType.info,
            language: {
                German: "Aktueller Modus",
                SimplifiedChinese: "当前模式",
                TraditionalChinese: "目前模式",
                English: "Current Mode",
                Español: "Modo actual",
                French: "Mode actuel",
                Italian: "Modalità corrente",
                Japanese: "現在のモード",
                Nederlands: "Huidige modus",
                BrazilianPortuguese: "Modo atual",
                Russian: "Текущий режим"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "OptimalMode",
            selected: "1920x1080 180Hz",
            result: "1920x1080 180Hz",
            displayValue: true,
            parents: this.key,
            mode: ModeType.info,
            language: {
                German: "Optimaler Modus",
                SimplifiedChinese: "最佳模式",
                TraditionalChinese: "最佳模式",
                English: "Optimal Mode",
                Español: "Modo óptimo",
                French: "Mode optimal",
                Italian: "Modalità ottimale",
                Japanese: "最適なモード",
                Nederlands: "Optimale modus",
                BrazilianPortuguese: "Modo ótimo",
                Russian: "Оптимальный"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "ColorSetting",
            selected: ColorEnum.selected,
            result: ColorEnum.result,
            displayValue: true,
            parents: this.key,
            mode: ModeType.info,
            language: {
                German: "Farbeinstellung",
                SimplifiedChinese: "颜色设置",
                TraditionalChinese: "色彩設定",
                English: "Color Setting",
                Español: "Configuración de color",
                French: "Réglage couleur",
                Italian: "Impostazioni colore",
                Japanese: "カラー設定",
                Nederlands: "Kleurinstelling",
                BrazilianPortuguese: "Definição de cor",
                Russian: "Настройка цвета"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "DisplayMode",
            selected: "Normal",
            result: "Normal",
            displayValue: true,
            parents: this.key,
            mode: ModeType.info,
            language: {
                German: "Display-Modus",
                SimplifiedChinese: "显示模式",
                TraditionalChinese: "顯示器模式",
                English: "Display Mode",
                Español: "Modo de visualización",
                French: "Mode d’affichage",
                Italian: "Modalità display",
                Japanese: "ディスプレイ モード",
                Nederlands: "Weergavemodus",
                BrazilianPortuguese: "Modo de visualização",
                Russian: "Режим отображения"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "FWPackageVersion",
            selected: "0.0.4.0",
            result: "0.0.4.0",
            displayValue: true,
            parents: this.key,
            mode: ModeType.info,
            language: {
                German: "Firmwarepaketversion",
                SimplifiedChinese: "固件包版本",
                TraditionalChinese: "韌體套件版本",
                English: "FW Package Version",
                Español: "Versión del paquete de FW",
                French: "Version de package du FW",
                Italian: "Versione del pacchetto FW",
                Japanese: "FWパッケージのバージョン",
                Nederlands: "Versie van firmwarepakket",
                BrazilianPortuguese: "Versão do pacote de firmware",
                Russian: "Версия пакета микропрограммы"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "HWRevision",
            selected: "C2IM0040",
            result: "C2IM0040",
            displayValue: true,
            parents: this.key,
            mode: ModeType.info,
            language: {
                German: "Hardwarerevision",
                SimplifiedChinese: "硬件修订版本号",
                TraditionalChinese: "硬體修訂編號",
                English: "HW Revision",
                Español: "Revisión de hardware",
                French: "Révision du matériel",
                Italian: "Revisione hardware",
                Japanese: "HWのリビジョン",
                Nederlands: "Revisie van hardware",
                BrazilianPortuguese: "Revisão de hardware",
                Russian: "Версия оборудования"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "SerialNumber",
            selected: "CN48520001",
            result: "CN48520001",
            displayValue: true,
            parents: this.key,
            mode: ModeType.info,
            language: {
                German: "Seriennummer",
                SimplifiedChinese: "序列号",
                TraditionalChinese: "序列號碼",
                English: "Serial Number",
                Español: "Número de serie",
                French: "N° de série",
                Italian: "N. di serie",
                Japanese: "シリアル番号",
                Nederlands: "Serienummer",
                BrazilianPortuguese: "Número de Série",
                Russian: "Серийный номер"
            }
        },
        {
            ...JSON.parse(JSON.stringify(ExitNodesEnum)),
            parents: this.key,
        }
    ];
}