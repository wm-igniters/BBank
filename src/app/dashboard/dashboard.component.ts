
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userName: string = 'Brett Smith';
  lastLogin: string = '04/06/2021, 05:48:25 PM';
  accounts = [
    { type: 'Euro Current Account', number: 'XXXX-8559', balance: '400', currency: '€', cards: 2 },
    { type: 'Savings Account', number: 'XXXX-8559', balance: '204.50', currency: '£' }
  ];
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
  transactions = [
    { type: 'Payment', to: 'Uber', amount: '-376€', time: '05:25 PM', debitedFrom: 'Personal Card', icon: 'fas fa-car' },
    { type: 'Received From', from: 'Ralph Scott', amount: '+450 €', time: '2 hours ago', creditedTo: 'Savings Account', icon: 'fas fa-exchange-alt' },
    { type: 'Salary Deposit', amount: '+5000€', time: '10 Hours ago', debitedFrom: 'Personal Card', icon: 'fas fa-money-bill-wave' },
    { type: 'Payment To', to: 'Douglas Spencer', amount: '-376€', time: '05:25 PM', debitedFrom: 'Personal Card', icon: 'fas fa-user' },
    { type: 'Payment To', to: 'Jonanthan Russell', amount: '+450 €', time: '5 hours ago', debitedFrom: 'Personal Card', icon: 'fas fa-user' },
    { type: 'Payment To', to: 'Eric Aguilar', amount: '-376€', time: '05:25 PM', debitedFrom: 'Personal Card', icon: 'fas fa-user' },
    { type: 'Payment To', to: 'Andrea Alvaroado', amount: '+5000€', time: '10 Hours ago', debitedFrom: 'Personal Card', icon: 'fas fa-user' }
  ];
}
