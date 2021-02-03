<template>
  <ion-page>
    <ion-content class="ion-padding">
      <img
        class="logo"
        src="https://www.flaticon.com/premium-icon/icons/svg/2118/2118693.svg"
      />
      <form>
        <ion-list>
          <ion-item>
            <ion-label>Email</ion-label>
            <ion-input type="email" v-model="email"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>Password</ion-label>
            <ion-input type="password" v-model="password"></ion-input>
          </ion-item>
        </ion-list>
      </form>

        <ion-button expand="block" :routerLink="{ name: 'profile' }" >Log in</ion-button>
        <ion-button color="light" expand="block">
          Create an account
        </ion-button>


        <div class="oauth-btns">
          or signin with
        <ion-button expand="block" @click="googleAuth"><ion-icon slot="start" :icon="logoGoogle" />Google</ion-button>
        </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon
} from "@ionic/vue";
import { logoGoogle } from "ionicons/icons";
export default {
  name: "Login",
  components: {
    IonPage,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonIcon
  },
  data() {
    return {
      email: null,
      password: null,
      googleUserProfile: undefined
    };
  },
  setup() {
    return {
      logoGoogle
    }
  },
  methods: {
    login() {
      console.log(this.user);
    },
    googleAuth() {
      const gapi = window.gapi;
      const clientId ="48827868058-o04bk3bsa0t5e0nt03ja8lbp459s6kmi.apps.googleusercontent.com";
      const apiKey ="L_3oLc6MKyXLxm5gPl1HOmQ7";
      const discoveryDocs =["https://www.googleapis.com/discovery/v1/apis/oauth2/v2/rest"];
      const scope ="https://www.googleapis.com/auth/userinfo.profile";
      gapi.load("client:auth2", () => {
        gapi.client.init({
          apiKey,
          clientId,
          discoveryDocs,
          scope,
        }).then(() => {
          if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
            this.googleUserProfile = gapi.auth2.getAuthInstance().currentUser.get();
            this.loginApiCall(this.googleUserProfile);
            console.log("logged in...");
            const profile = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
            const currentUser = {
              id:profile.getId(),
              name:profile.getName(),
              givenName:profile.getGivenName(),
              familyName:profile.getFamilyName(),
              image:profile.getImageUrl(),
              email:profile.getEmail()
            }
            this.$store.commit('userLogged', currentUser)
          } else {
            gapi.auth2.getAuthInstance().signIn().then(() => {
            this.googleUserProfile = gapi.auth2.getAuthInstance().currentUser.get();
            this.loginApiCall(this.googleUserProfile);
            console.log("NOT logged in...");
            }).catch(err => {
              alert(`Google auth error: ${err}`);
            });
          }
        })
        .catch((err) => {
          alert(err);
        })
      });
    },
    loginApiCall(data) {
      // API call to handle googleUserProfile data
      // then redirect to home/profile page
      console.log("googleUserProfile", data);
      this.$router.push("/profile");
    }
  },
};
</script>

<style scoped>
.logo {
  display: block;
  margin: 24px auto;
  max-height: 96px;
}
ion-button {
  margin: 10px;
}
.oauth-btns {
  margin: 40px;
  text-align: center;
}
</style>