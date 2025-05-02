
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './apply-card.component.html',
  styleUrls: ['./apply-card.component.css']
})
export class ApplyCardComponent {
  currentStep = 1;
  steps = ['Card Details', 'Billing Address', 'Review'];
  billingAddress = {
    street: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  };

  constructor(private router: Router) {}

  nextStep() {
    if (this.currentStep < this.steps.length) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  cancel() {
    this.router.navigate(['/dashboard']);
  }
}
