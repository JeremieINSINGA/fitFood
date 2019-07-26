import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Platform } from '@ionic/angular';
import { UsersService } from './users.service';
import { User } from '../models/User.model';
import { Facebook } from '@ionic-native/facebook/ngx';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  providerFb: firebase.auth.FacebookAuthProvider;

  constructor(
    public platform: Platform,
    private fb: Facebook,
    private usersService: UsersService
  ) {
    this.providerFb = new firebase.auth.FacebookAuthProvider();
  }

  signUpUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          (data) => {
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signInUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          (user) => {
            resolve(user);
            console.log('Connecté');
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  facebookCordova() {
    // return new Promise(
    //   (resolve, reject) => {
    //     console.log('okey');
    //     this.fb.login(['email']).then(
    //       (response) => {
    //         console.log('OKAY');
    //         const facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
    //         firebase.auth().signInWithCredential(facebookCredential).then(
    //           (success) => {
    //             console.log('Info Facebook: ' + JSON.stringify(success));
    //             const phone = success.user.phoneNumber ? success.user.phoneNumber : '';
    //             const newUser = new User(success.user.uid, '', '', success.user.email, phone, '', '');
    //             this.usersService.createUser(newUser, success.user.uid);
    //             resolve(success);
    //           },
    //           (error) => {
    //             reject(error);
    //           }
    //         );
    //       },
    //       (error) => {
    //         reject(error);
    //       }
    //     );
    //   }
    // );
    this.fb.login(['email']).then(
      (response) => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
        firebase.auth().signInWithCredential(facebookCredential)
        .then((success) => {
            console.log('Info Facebook: ' + JSON.stringify(success));
        }).catch((error) => {
            console.log('Erreur: ' + JSON.stringify(error));
        });
      }).catch((error) => { console.log(error); });
  }

  facebookWeb() {
    // firebase.auth()
    //   .signInWithPopup(new firebase.auth.FacebookAuthProvider())
    //   .then((success) => {
    //     console.log('Info Facebook: ' + JSON.stringify(success));
    //     const phone = success.user.phoneNumber ? success.user.phoneNumber : '';
    //     const newUser = new User(success.user.uid, '', '', success.user.email, phone, '', '');
    //     this.usersService.createUser(newUser, success.user.uid);
    //   }).catch((error) => {
    //     console.log('Erreur: ' + JSON.stringify(error));
    //   });
      return new Promise (
        (resolve, reject) => {
          firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
            (success) => {
              console.log('Info Facebook: ' + JSON.stringify(success));
              const phone = success.user.phoneNumber ? success.user.phoneNumber : '';
              const newUser = new User(success.user.uid, '', '', success.user.email, phone, '', '');
              this.usersService.createUser(newUser, success.user.uid);
              resolve(success);
            },
            (error) => {
              reject(error);
            }
          );
        }
      );
  }

  signOutUser() {
    firebase.auth().signOut();
    console.log('déconnecté');
  }
}
