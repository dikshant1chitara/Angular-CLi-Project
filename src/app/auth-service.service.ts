import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private credentials: { username: string, password: string }[] = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' }
    // Add more credentials as needed
  ];

  constructor() { }

  login(username: string, password: string): boolean {
    const user = this.credentials.find(cred => cred.username === username && cred.password === password);
    if (user) {
      try {
        localStorage.setItem('currentUser', JSON.stringify({ username }));
        return true;
      } catch (error) {
        console.error('localStorage error:', error);
        return false;
      }
    }
    return false;
  }

  register(username: string, password: string): boolean {
    const userExists = this.credentials.some((cred) => cred.username === username);
    if (userExists) {
      return false;
    }

    this.credentials.push({ username, password });

    try {
      localStorage.setItem('credentials', JSON.stringify(this.credentials));
    } catch (error) {
      console.error('localStorage error:', error);
      return false;
    }

    return true;
  }

  logout(): void {
    try {
      localStorage.removeItem('currentUser');
    } catch (error) {
      console.error('localStorage error:', error);
    }
  }

  isAuthenticated(): boolean {
    try {
      return !!localStorage.getItem('currentUser');
    } catch (error) {
      console.error('localStorage error:', error);
      return false;
    }
  }
}
