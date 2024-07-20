import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';
import { Jwt } from '../model/Jwt';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  loginForm !: FormGroup ;

  constructor(
    private service: ServicesService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  submitForm(): void{
    console.log(this.loginForm.value);
   this.service.login(this.loginForm.value).subscribe(
      (response : Jwt) =>{
        const jwtToken = response.token;
        localStorage.setItem('jwt', jwtToken);
        this.router.navigateByUrl("/compte");
      }
   )
  }
  
}
