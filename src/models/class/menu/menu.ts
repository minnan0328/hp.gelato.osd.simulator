import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, ResetNodes, BackNodes } from '../_utilities';
import LanguageNodes from './_language-nodes';
import MenuPositionNodes from './_menu-position-nodes';
import MenuTransparencyNodes from './_menu-transparency-nodes';
import MenuTimeoutNodes from './_menu-timeout-nodes';
import MenuRotationNodes from './_menu-rotation';
import OSDMessagesNodes from './_OSD-messages-nodes/OSD-messages-nodes';
import AssignButtonsNodes from './_assign-buttons/assign-buttons-nodes';

let ResetNodesEnum = new ResetNodes(); 
let BackNodesEnum = new BackNodes();
let LanguageNodesEnum = new LanguageNodes();
let MenuPositionNodesEnum = new MenuPositionNodes();
let MenuTransparencyNodesEnum = new MenuTransparencyNodes();
let MenuTimeoutNodesEnum = new MenuTimeoutNodes();
let MenuRotationNodesEnum = new MenuRotationNodes();
let OSDMessagesNodesEnum = new OSDMessagesNodes();
let AssignButtonsNodesEnum = new AssignButtonsNodes();

export default class Menu extends DefaultNodes implements Nodes {
    key = "Menu";
    size = 9;
    mode = ModeType.button;
    language = {
        German: "Menü",
        SimplifiedChinese: "菜单",
        TraditionalChinese: "功能表",
        English: "Menu",
        Español: "Menú",
        French: "Menu",
        Italian: "Menu",
        Japanese: "メニュー",
        Nederlands: "Menu",
        BrazilianPortuguese: "Menu",
        Russian: "Меню"
    };
    nodes = [
        {
            ...JSON.parse(JSON.stringify(LanguageNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(MenuPositionNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(MenuTransparencyNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(MenuTimeoutNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(MenuRotationNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(OSDMessagesNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(AssignButtonsNodesEnum)),
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
};