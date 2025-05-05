import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css'],
})
export class CardDetailsComponent implements OnInit, AfterViewInit {
  @ViewChild('pieChart') pieChartCanvas!: ElementRef;
  chart: any;
  userName: string = 'Brett Smith';
  lastLogin: string = '04/06/2021, 05:48:25 PM';
  card: any;

  ngAfterViewInit() {
    this.createPieChart();
  }

  createPieChart() {
    const ctx = this.pieChartCanvas.nativeElement.getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Shopping', 'Food', 'Travel', 'Entertainment', 'Others'],
        datasets: [{
          data: [30, 25, 20, 15, 10],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'right'
          }
        }
      }
    });
  }
  activeTab: string = 'transactions';
  // transactions = [
  //   { type: 'Payment', to: 'Uber', amount: '-376€', time: '05:25 PM', debitedFrom: 'Personal Card', icon: 'fas fa-car' },
  //   { type: 'Received From', from: 'Ralph Scott', amount: '+450 €', time: '2 hours ago', creditedTo: 'Savings Account', icon: 'fas fa-exchange-alt' },
  //   { type: 'Salary Deposit', amount: '+5000€', time: '10 Hours ago', debitedFrom: 'Personal Card', icon: 'fas fa-money-bill-wave' }
  // ];
  transactions = [
    {
      transactionID: '5000 3456 4523 3212',
      type: 'Payment',
      to: 'Uber',
      amount: '-376€',
      time: '05:25 PM',
      debitedFrom: 'Personal Card',
      icon: 'fas fa-car',
    },
    {
      transactionID: '7090 3486 4563 3201',
      type: 'Received From',
      from: 'Ralph Scott',
      amount: '+450 €',
      time: '2 hours ago',
      creditedTo: 'Savings Account',
      icon: 'fas fa-exchange-alt',
    },
    {
      transactionID: '1030 8446 2013 4109',
      type: 'Salary Deposit',
      amount: '+5000€',
      time: '10 Hours ago',
      debitedFrom: 'Personal Card',
      icon: 'fas fa-money-bill-wave',
    },
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
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    };
  }
}
