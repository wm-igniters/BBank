
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-individual-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './individual-register.component.html',
  styleUrls: ['./individual-register.component.css']
})
export class IndividualRegisterComponent {
  currentStep = 1;
  
  formData = {
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
    nationality: 'American',
    countryOfResidence: 'USA',
    email: '',
    phone: '',
    streetAddress: '',
    apartmentSuite: '',
    city: '',
    state: '',
    zipCode: ''
  };

  constructor(private router: Router) { }

  nextStep() {
    if (this.currentStep < 2) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit() {
    console.log('Form submitted:', this.formData);
  }

  goToRegister() {
    this.router.navigate(['/login']);
  }
}
