
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
  
  cardDetails = {
    cardType: '',
    cardName: '',
    incomeSource: '',
    monthlyIncome: '',
    employmentStatus: '',
    purpose: ''
  };

  billingAddress = {
    street: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  };

  constructor(private router: Router) {}

  isCardDetailsValid(): boolean {
    return this.cardDetails.cardType && 
           this.cardDetails.cardName && 
           this.cardDetails.incomeSource && 
           this.cardDetails.monthlyIncome && 
           this.cardDetails.employmentStatus && 
           this.cardDetails.purpose;
  }

  isBillingAddressValid(): boolean {
    return this.billingAddress.street && 
           this.billingAddress.city && 
           this.billingAddress.state && 
           this.billingAddress.zipCode && 
           this.billingAddress.country;
  }

  nextStep() {
    if (this.currentStep === 1 && !this.isCardDetailsValid()) {
      alert('Please fill in all required card details');
      return;
    }
    if (this.currentStep === 2 && !this.isBillingAddressValid()) {
      alert('Please fill in all required billing address fields');
      return;
    }
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
