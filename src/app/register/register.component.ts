import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup ;

  constructor(
    private service: ServicesService,
    private fb: FormBuilder
  ) { }


  ngOnInit(): void {
    this.registerForm = this.fb.group({
      prenom: ['',Validators.required],
      nom: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      password: ['',Validators.required],
      confirmPassword: ['', Validators.required],
    }, { Validator: this.passwordValidator});
  }

  passwordValidator(formGroup: FormGroup){
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    if(password != confirmPassword){
      formGroup.get('confirmPassword')?.setErrors({passwordMismatch: true});
    }else{
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }
  
  submitForm() {
    console.log(this.registerForm?.value);
    this.service.register(this.registerForm?.value).subscribe(
      (response)=>{
        console.log(response);
      }
    )
    }
  
}
