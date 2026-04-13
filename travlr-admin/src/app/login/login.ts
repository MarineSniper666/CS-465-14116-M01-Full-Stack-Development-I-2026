import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html'
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    this.authService.login(this.email, this.password)
      .subscribe({
        next: (res) => {
          console.log('Token:', res.token);
          localStorage.setItem('travlr-token', res.token);
          this.router.navigate(['/list']);
        },
        error: (err) => {
          console.error(err);
        }
      });
  }
}