import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      // validator: MustMatch('password', 'confirmPassword')
    });
  }
  // get f() { return this.loginForm.controls; }
 
  get userName() { return this.loginForm.get('userName'); }
  get password() { return this.loginForm.get('password'); }
  onSubmit(){
    this.submitted= true;
    if(this.loginForm.valid){
      this.router.navigate(['/home']);
      console.log("I am logged in");
      // localStorage.setItem('user', true);
    }
  }
}
