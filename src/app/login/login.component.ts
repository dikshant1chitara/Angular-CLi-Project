import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private router: Router) {}

  login(): void {
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const user = existingUsers.find((u: any) => u.username === this.username && u.password === this.password);

    if (user) {
      // Perform any additional login logic if needed

      this.router.navigate(['/dashboard']); // Redirect to dashboard or any other page
    } else {
      console.log('Invalid username or password');
    }
  }
}
