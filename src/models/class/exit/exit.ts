import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, ExitNodes } from '../_utilities';
const ExitNodesEnum = new ExitNodes();

export default class Exit extends DefaultNodes implements Nodes {
    key = JSON.parse(JSON.stringify(ExitNodesEnum.key));
    mode = ModeType.exit;
    language = JSON.parse(JSON.stringify(ExitNodesEnum.language))
    nodes = []
};