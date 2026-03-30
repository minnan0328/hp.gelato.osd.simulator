import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, ResetNodes, BackNodes } from '../_utilities';
import SharpnessNodes from './_sharpness-nodes';
import ImageScalingNodes from './_image-scaling-nodes';
import BrightnessNodes from './_brightness-nodes';
import ContrastNodes from './_contrast-nodes';
import DynamicContrastNodes from './_dynamic-contrast-nodes';
import VideoLevelNodes from './_video-level-nodes';
const ResetNodesEnum = new ResetNodes(); 
const BackNodesEnum = new BackNodes();

const SharpnessNodesEnum = new SharpnessNodes();
const ImageScalingNodesEnum = new ImageScalingNodes();
const BrightnessNodesEnum = new BrightnessNodes();
const ContrastNodesEnum = new ContrastNodes();
const DynamicContrastNodesEnum = new DynamicContrastNodes();
const VideoLevelNodesEnum = new VideoLevelNodes();

export default class Image extends DefaultNodes implements Nodes {
    key = "Image";
    size = 8;
    mode = ModeType.button;
    language = {
        German: "Bild",
        SimplifiedChinese: "图像",
        TraditionalChinese: "影像",
        English: "Image",
        Español: "Imagen",
        French: "Image",
        Italian: "Immagine",
        Japanese: "イメージ",
        Nederlands: "Beeld",
        BrazilianPortuguese: "Imagem",
        Russian: "Изображение"
    };
    nodes = [
        // 亮度
        {
            ...JSON.parse(JSON.stringify(BrightnessNodesEnum)),
            parents: this.key
        },
        // 對比
        {
            ...JSON.parse(JSON.stringify(ContrastNodesEnum)),
            parents: this.key
        },
        // 動態對比
        {
            ...JSON.parse(JSON.stringify(DynamicContrastNodesEnum)),
            parents: this.key
        },
        // 視訊等級
        {
            ...JSON.parse(JSON.stringify(VideoLevelNodesEnum)),
            parents: this.key
        },
        // 銳利度
        {
            ...JSON.parse(JSON.stringify(SharpnessNodesEnum)),
            parents: this.key
        },
        // 影像縮放
        {
            ...JSON.parse(JSON.stringify(ImageScalingNodesEnum)),
            parents: this.key
        },
        // 重置
        {
            ...JSON.parse(JSON.stringify(ResetNodesEnum)),
            parents: this.key,
            mergeGrid: true 
        },
        // 上一步
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key,
            mergeGrid: true 
        }
    ];
};