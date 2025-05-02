
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userName: string = 'Brett Smith';
  lastLogin: string = '04/06/2021, 05:48:25 PM';
  accounts = [
    { type: 'Euro Current Account', number: 'XXXX-8559', balance: '400', currency: '€' },
    { type: 'Savings Account', number: 'XXXX-8559', balance: '204.50', currency: '£' }
  ];
  transactions = [
    { type: 'Payment', to: 'Uber', amount: '-376€', time: '05:25 PM', debitedFrom: 'Personal Card' },
    { type: 'Received From', from: 'Ralph Scott', amount: '+450 €', time: '2 hours ago', creditedTo: 'Savings Account' },
    { type: 'Salary Deposit', amount: '+5000€', time: '10 Hours ago', debitedFrom: 'Personal Card' }
  ];
}
