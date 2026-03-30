import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../../_utilities';

let DefaultNodesEnum = new DefaultNodes();

export default class PowerConfirmChangeNodes extends DefaultNodes implements Nodes {
    key = "PowerConfirmChange";
    size = 1;
    mode = ModeType.message;
    language = {
        English: "Confirm Change!",
        BrazilianPortuguese: "Confirme a alteração!",
        Russian: "Подтвердите изменение.",
        Nederlands: "Bevestig de wijziging!",
        French: "Confirmez le changement !",
        German: "Bestätigen Sie die Änderung!",
        Español: "Confirme el cambio.",
        Italian: "Confermare la modifica!",
        SimplifiedChinese: "确认更改！",
        TraditionalChinese: "確認變更！",
        Japanese: "変更の確認"
    };
    nodes = [
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "ChangingMessage",
            size: 2,
            page: 1,
            mode: ModeType.message,
            parents: this.key,
            language: {
                German: "Eine Änderung der ausgewählten Menüfunktion kann den Stromverbrauch dieses Monitors erhöhen. Bitte wählen Sie eine der folgenden Optionen aus:",
                SimplifiedChinese: "更改所选菜单功能可能会使此显示器的功耗增加。请选择以下选项之一：",
                TraditionalChinese: "變更所選取的功能表功能可能會提高此顯示器的耗電量。請選取下列其中一個選項：",
                English: "Changing the selected menu function may increase the power consumption of this monitor. Please select one of the following options:",
                Español: "Cambiar la función del menú seleccionada puede aumentar el consumo de energía de este monitor. Seleccione una de las siguientes opciones:",
                French: "Le changement de la fonction de menu sélectionnée peut augmenter la consommation d'énergie de cet écran. Veuillez sélectionner une des options suivantes :",
                Japanese: "選択したメニュー機能を変更すると、このモニターの消費電力が増える場合があります。以下のオプションのどれかを選択してください。",
                Italian: "La modifica della funzione di menu selezionata può causare l'aumento del consumo di energia del monitor. Selezionare una delle seguenti opzioni:",
                Nederlands: "Als u de geselecteerde menufunctie wijzigt, neemt het stroomverbruik van deze monitor mogelijk toe. Selecteer een van de volgende opties:",
                BrazilianPortuguese: "Alterar a função selecionada do menu pode aumentar o consumo de energia deste monitor. Selecione uma das seguintes opções:",
                Russian: "Если изменить значение выбранной функции меню, энергопотребление может вырасти. Выберите один из следующих вариантов:"
            },
            nodes: [
                {
                    ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
                    key: "Confirm",
                    selected: "Confirm",
                    result: "Confirm",
                    mode: ModeType.button,
                    parents: "ChangingMessage",
                    language: {
                        German: "BESTÄTIGEN",
                        SimplifiedChinese: "确认",
                        TraditionalChinese: "確認",
                        English: "CONFIRM",
                        Español: "CONFIRMAR",
                        French: "CONFIRMER",
                        Italian: "CONFERMA",
                        Japanese: "確認",
                        Nederlands: "BEVESTIGEN",
                        BrazilianPortuguese: "CONFIRMAR",
                        Russian: "OK"
                    }
                },
                {
                    ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
                    key: "Cancel",
                    selected: "Cancel",
                    result: "Cancel",
                    mode: ModeType.button,
                    parents: "ChangingMessage",
                    language: {
                        German: "ABBRECHEN",
                        SimplifiedChinese: "取消",
                        TraditionalChinese: "取消",
                        English: "CANCEL",
                        Español: "CANCELAR",
                        French: "ANNULER",
                        Italian: "ANNULLA",
                        Japanese: "キャンセル",
                        Nederlands: "ANNULEREN",
                        BrazilianPortuguese: "CANCELAR",
                        Russian: "ОТМЕНА"
                    }
                }
            ]
        }
    ];
}
