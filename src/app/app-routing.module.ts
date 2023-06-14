import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserFormComponent } from './user-form/user-form.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'search', component: SearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  {path: 'user-form', component:UserFormComponent},
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'checkout', component: CheckoutComponent },
  { path: '**', redirectTo: '/main' }, // Catch-all route, redirects to 'main' component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
