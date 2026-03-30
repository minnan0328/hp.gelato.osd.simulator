import { useMenuStore } from '@/stores/index';
import type { Nodes } from '@/types';
export * from './_to-display-language-text';
export * from './_time-format';

export function isEnableNode(nodes: Nodes): boolean {
    const menuStore = useMenuStore();
    return nodes.only?.includes(menuStore.$state.input.selected) ? true : false;
};

export function getIconSrc (icon: string) {
    return new URL(`/src/assets/icons/${icon}`, import.meta.url).href;
};

export function toLowerCaseFirstChar(str: string): string {
    return `${str.charAt(0).toLowerCase()}${str.slice(1)}`;
}

export const removeAndLowercase = (str: string, replaceText: string): string => {
    // 移除指定的子字符串
    const removedString = str.replace(replaceText, '').trim();
    // 轉小寫
    return removedString.toLowerCase();
};