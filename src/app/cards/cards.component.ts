
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  cards = [
    { 
      type: 'Personal Card',
      lastFourDigits: '4567',
      holderName: 'Brett Smith',
      expiryDate: '05/2025',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      type: 'Business Card',
      lastFourDigits: '8559',
      holderName: 'Brett Smith',
      expiryDate: '05/2025',
      background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)'
    }
  ];

  constructor(private router: Router) {}

  navigateToApplyCard() {
    this.router.navigate(['/apply-card']);
  }
}
