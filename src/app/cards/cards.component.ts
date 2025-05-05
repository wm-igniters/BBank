
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  userName: string = 'Brett Smith';
  lastLogin: string = '04/06/2021, 05:48:25 PM';
  
  get cards() {
    return [...this.physicalCards, ...this.virtualCards];
  }
  physicalCards = [
    { 
      type: 'Personal Card (Debit)',
      subtext: 'Home Account (GBP)',
      lastFourDigits: '4567',
      holderName: 'Brett Smith',
      expiryDate: '05/2025',
      background: 'linear-gradient(135deg, #FF6B8B 0%, #FF5576 100%)'
    },
    {
      type: 'Personal Card (Debit)',
      subtext: 'Home Account (GBP)',
      lastFourDigits: '4567',
      holderName: 'Brett Smith',
      expiryDate: '05/2025',
      background: 'linear-gradient(135deg, #5AA1FF 0%, #4A96FF 100%)'
    }
  ];

  virtualCards = [
    {
      type: 'Personal Card (Debit)',
      subtext: 'Home Account (GBP)',
      lastFourDigits: '4567',
      holderName: 'Brett Smith',
      expiryDate: '05/2025',
      background: 'linear-gradient(135deg, #FF6B8B 0%, #FF5576 100%)'
    },
    {
      type: 'Personal Card (Debit)',
      subtext: 'Home Account (GBP)',
      lastFourDigits: '4567',
      holderName: 'Brett Smith',
      expiryDate: '05/2025',
      background: 'linear-gradient(135deg, #50D6A0 0%, #3ECF97 100%)'
    }
  ];

  constructor(private router: Router) {}

  navigateToApplyCard() {
    this.router.navigate(['/apply-card']);
  }
}
