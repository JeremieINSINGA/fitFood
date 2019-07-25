import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  loggedIn: boolean = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyDoQ5urLt5u-4IpITRVOtHnaKpHVuzX8Nw",
      authDomain: "fitfoodapp-9bf99.firebaseapp.com",
      databaseURL: "https://fitfoodapp-9bf99.firebaseio.com",
      projectId: "fitfoodapp-9bf99",
      storageBucket: "",
      messagingSenderId: "126238008554",
      appId: "1:126238008554:web:f7de211a5d126d23"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
        }
      }
    );
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
