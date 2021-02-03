<template>
  
  <base-layout pageTitle="Welcome" pageDefaultBackLink="/home">
    <ion-card>
      
      <img :src="data.image" />
        <ion-card-header>
          
          <ion-card-title>{{data.name}}</ion-card-title>
          <ion-card-subtitle>{{data.email}}</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
                  Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.
        </ion-card-content>
    </ion-card>
  </base-layout>
</template>

<script>
import {
  IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, 
} from "@ionic/vue";
export default {
  name: "Explorer",
  components: {
    // IonPage,
    // IonHeader,
    // IonToolbar,
    // IonTitle,
    // IonContent,
    // IonAvatar,
    IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, 
  },
  methods: {
    logout() {
      this.$router.push("/login");
      // var gapi = window.gapi;
      //  gapi.auth2.getAuthInstance().disconnect();
      //  this.googleUserProfile = undefined;
    }
  },
  computed: {
    data() {
      return this.$store.state.userProfile
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}
.logout {
  margin-right: 20px;
}
</style>