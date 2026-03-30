<template>
    <div class="modal toast auto-adjustment" v-if="show && message">
        <div class="image">
            <img :src="image" alt="">
        </div>
        <div>
            <p>{{ toLanguageText(message) }}</p>
        </div>
    </div>
</template>
<script lang="ts">

import { ref, type PropType } from 'vue';
import type { Language } from '@/types/index';
import { toLanguageText } from '@/service/_to-display-language-text';

export default {
    name: "Toast",
    setup() {
        const show = ref(false);
        const message = ref<Language | null>(null);
        const image = ref("");

        function open({ message: msg, image: img }: { message: Language, image: string }) {
            message.value = msg;
            image.value = img;
            show.value = true;

            console.log(toLanguageText(message.value));

            setTimeout(() => {
                show.value = false;
                message.value = null;
                image.value = "";
            }, 5000);
        }

        return {
            show,
            message,
            image,
            toLanguageText,
            open
        };
    }
};

</script>