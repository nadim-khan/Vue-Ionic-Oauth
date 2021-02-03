<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
          <ion-fab-button slot="start">
            <ion-back-button :default-href="pageDefaultBackLink" >

            </ion-back-button>
          </ion-fab-button>
          
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
  IonButton,IonFabButton
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
    IonButton,
    IonFabButton
  },
  methods:{
      logout() {
          this.$store.commit('userLogged',{});
          this.$router.push('/login');
      }
  }
};
</script>