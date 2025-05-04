
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-type',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register-type.component.html',
  styleUrls: ['./register-type.component.css']
})
export class RegisterTypeComponent {
  constructor(private router: Router) {}

  navigateToRegistration(type: string) {
    if (type === 'individual') {
      this.router.navigate(['/register/individual']);
    } else {
      this.router.navigate(['/register/company']);
    }
  }
}
