
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  userName: string = 'Brett Smith';
  lastLogin: string = '04/06/2021, 05:48:25 PM';
  card: any;
  activeTab: string = 'transactions';
  transactions = [
    { type: 'Payment', to: 'Uber', amount: '-376€', time: '05:25 PM', debitedFrom: 'Personal Card', icon: 'fas fa-car' },
    { type: 'Received From', from: 'Ralph Scott', amount: '+450 €', time: '2 hours ago', creditedTo: 'Savings Account', icon: 'fas fa-exchange-alt' },
    { type: 'Salary Deposit', amount: '+5000€', time: '10 Hours ago', debitedFrom: 'Personal Card', icon: 'fas fa-money-bill-wave' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const cardId = this.route.snapshot.params['id'];
    // In a real app, fetch card details using the ID
    this.card = {
      type: 'Personal Card',
      lastFourDigits: '4567',
      holderName: 'Brett Smith',
      expiryDate: '05/2025',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    };
  }
}
