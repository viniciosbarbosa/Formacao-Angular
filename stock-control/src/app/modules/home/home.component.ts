import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  loginCard = true
  loginForm = this.formBuilder.group({
    email:['' , Validators.required],
    password:['' , Validators.required]
  })

  signUpForm = this.formBuilder.group({
    name:['' , Validators.required],
    email:['' , Validators.required],
    password:['' , Validators.required]
  })

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    console.log(!this.loginForm.valid)
  }

  onSubmitSignUpForm():void{
    console.log("dados do form de login" , this.signUpForm.value)
  }

  onSubmitLoginForm():void{
    console.log("dados do form de login" , this.loginForm.value)
  }





}
