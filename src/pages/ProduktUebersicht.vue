<template>
        <base-layout ProbeApp="LexMea - Product Catalog" footer= "© 2020 LexMea">
            <ion-list>
                <ion-item v-for="produkt in produkte" 
                 :key="produkt.id"
                 :router-link ="`/produkte/${produkt.id}`">

                    <ion-thumbnail slot="start">
                    <ion-img :src="produkt.image" :alt="produkt.title"></ion-img>
                    </ion-thumbnail>

                    <ion-label>
                    {{ produkt.title }}
                    </ion-label>

                </ion-item>
            </ion-list>
        </base-layout>
</template>


<script>

import { 
    IonList,
    IonItem,
    IonImg,
    IonLabel,
    IonThumbnail} from "@ionic/vue";

export default {
    components: {
        IonList,
        IonItem,
        IonImg,
        IonLabel,
        IonThumbnail
    },
    computed: {
        produkte() {
            return this.$store.getters.produkte;
        }
    }
}

</script>
<style >
ion-toolbar {
    --background: var(--ion-color-primary);
}
ion-content {
    --background: var(--ion-color-primary-contrast);
}
ion-list {
    --background: var(--ion-color-tertiary);
}

</style>