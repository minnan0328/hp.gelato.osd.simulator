// 影像 > 影像縮放

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes } from '../_utilities';
const DefaultNodesEnum = new DefaultNodes();
const BackNodesEnum = new BackNodes();

export default class ImageScalingNodes extends DefaultNodes implements Nodes {
    key = "ImageScaling";
    selected = "Fill to Screen";
    result = "Fill to Screen";
    displayValue = true;
    size = 3;
    mode = ModeType.button;
    language = {
        German: "Bildskalierung",
        SimplifiedChinese: "图像缩放",
        TraditionalChinese: "影像縮放",
        English: "Image Scaling",
        Español: "Transformando imagen",
        French: "Mise à l'échelle de l'image",
        Italian: "Riduzione in scala immagine",
        Japanese: "イメージのスケーリング中",
        Nederlands: "Afbeelding schalen",
        BrazilianPortuguese: "Dimensionamento da imagem",
        Russian: "Масштаб-ие изображения"
    };
    nodes = [
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "FilltoScreen",
            selected: "Fill to Screen",
            result: "Fill to Screen",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                English: "Fill to Screen",
                BrazilianPortuguese: "Preenchimento da Tela",
                Russian: "Заполнить экран",
                Dutch: "Schermvullend",
                French: "Plein écran",
                German: "Bildschirmfüllend",
                Spanish: "Pantalla Amplia",
                Italian: "Tutto schermo",
                SimplifiedChinese: "填充屏幕",
                TraditionalChinese: "填滿螢幕",
                Japanese: "スクリーンに合わせる"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "FilltoAspectRatio",
            selected: "Fill to Aspect Ratio",
            result: "Fill to Aspect Ratio",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "Entspr. Seitenverhältnis",
                SimplifiedChinese: "填充屏幕高宽比",
                TraditionalChinese: "填滿至自訂比例",
                English: "Fill to Aspect Ratio",
                Español: "Rellenar según proporción",
                French: "Agr. au taux",
                Italian: "Rapporto altezza-larghezza",
                Japanese: "縦横比に合わせる",
                Nederlands: "H/B-verhouding intact",
                BrazilianPortuguese: "Preencher até Rel. de aspecto",
                Russian: "Заполнить форматн. соотношение"
            }
        },
        // 上一步
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key,
        }
    ];
};