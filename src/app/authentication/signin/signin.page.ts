import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  signInForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.initSignInForm();
  }

  initSignInForm() {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSignIn() {
    const email = this.signInForm.get('email').value;
    const password = this.signInForm.get('password').value;
    this.authenticationService.signInUser(email, password).then(
      (user) => {
        // this.router.navigate(['/profile']);
        this.navCtrl.navigateForward('/profile');
      }
    );
  }

}
