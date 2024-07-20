import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegisterComponent } from './register/register.component';
import { CompteComponent } from './compte/compte.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: AuthenticationComponent},
  {path: 'compte', component: CompteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

