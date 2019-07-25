import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User } from 'src/app/models/User.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signUpForm: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      passwordConfirm: ['', Validators.required]
    });
  }

  onSignUp() {
    const email = this.signUpForm.get('email').value;
    const password = this.signUpForm.get('password').value;
    const passwordConfirm = this.signUpForm.get('passwordConfirm').value;
    if (password === passwordConfirm) {
      this.authenticationService.signUpUser(email, password).then(
        (data) => {
          console.log(data);
          const userId = data['user'].uid;
          const newUser = new User(userId, '', '', email, '', '', '');
          this.usersService.createUser(newUser, userId).then(
            () => {
              this.router.navigate(['/profile']);
            }
          );
        }
      )
    } else {
      alert('Les mots de passes saisis doivent être identiques');
    }
  }

}
