import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  signupForm: FormGroup;
  submitted: boolean = false;
  allUser: Object;
  constructor(private router: Router,  private _commonService : CommonService) { }

  ngOnInit(): void {
    // this.getLatestUser();
    this.signupForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }
  get firstName() { return this.signupForm.get('firstName'); }
  get lastName() { return this.signupForm.get('lastName'); }
  get email() { return this.signupForm.get('email'); }
  get password() { return this.signupForm.get('password'); }
  
  onSubmit(){
    this.submitted= true;
    if(this.signupForm.valid){
      console.log("I am clicked");
      this.router.navigate(['../home']);
      console.log("I am logged in");
      // localStorage.setItem('user', true);
    }
  }
  addUser(fromObj){
    // this._commonService.createUser(fromObj).subscribe((response)=>{
    //     console.log("User has been added", fromObj);
    //     this.getLatestUser();
    // }) 
  }
  getLatestUser(){
    // this._commonService.getAllUser().subscribe((response)=>{
    //   this.allUser = response;
    // })
  }
  editUser(){}
  deleteUser(user){
    // this._commonService.deleteUser(user).subscribe(()=>{
    //   this.getLatestUser();
    // })
  }
}
