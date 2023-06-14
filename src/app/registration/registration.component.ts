import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  username!: string;
  password!: string;

  constructor(private router: Router) { }

  register(): void {
    const existingCredentials = JSON.parse(localStorage.getItem('credentials') || '[]');
    const userExists = existingCredentials.some((cred: any) => cred.username === this.username);

    if (userExists) {
      console.log('Username already exists');
    } else {
      const newCredentials = { username: this.username, password: this.password };
      existingCredentials.push(newCredentials);
      localStorage.setItem('credentials', JSON.stringify(existingCredentials));
      this.router.navigate(['/login']); // Redirect to login page after successful registration
    }
  }
}
