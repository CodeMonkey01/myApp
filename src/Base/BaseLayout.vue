<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button :default-href="pageDefaultBackLink"></ion-back-button>
                </ion-buttons>
                <ion-title>{{ ProbeApp }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <slot />
        </ion-content>
        <ion-footer>
            <p style="">{{ footer }}</p>
        </ion-footer>
    </ion-page>
</template>


<script>
import { 
    IonPage,
    IonHeader,
    IonTitle, 
    IonContent, 
    IonToolbar, 
    IonFooter,
    IonBackButton,
    IonButtons} from "@ionic/vue";

export default {
    props: [
        "ProbeApp",
        "footer", 
        "pageDefaultBackLink" ]
    ,
    components: {
        IonPage,
        IonHeader,
        IonTitle,
        IonContent,
        IonToolbar,
        IonFooter,
        IonBackButton,
        IonButtons
    }
}
</script>