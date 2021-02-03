<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
            <ion-back-button :default-href="pageDefaultBackLink" slot="start">

            </ion-back-button>
          
        <ion-title>{{ pageTitle }}</ion-title>
        <ion-button color="danger" slot="end" @click="logout">
                Logout
          </ion-button>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot />
    </ion-content>
    
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonBackButton,
  IonButton
} from "@ionic/vue";
export default {
  props: ["pageTitle", "pageDefaultBackLink"],
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonBackButton,
    IonButton
  },
  methods:{
      logout() {
          this.$store.commit('userLogged',{});
          this.$router.push('/login');
      }
  }
};
</script>