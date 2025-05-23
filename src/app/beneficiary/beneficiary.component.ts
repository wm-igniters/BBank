
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { HeaderComponent } from '../header/header.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-beneficiary',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, SideNavComponent],
  templateUrl: './beneficiary.component.html',
  styleUrls: ['./beneficiary.component.css']
})
export class BeneficiaryComponent implements OnInit {
  userName: string = 'Brett Smith';
  lastLogin: string = '04/06/2021, 05:48:25 PM';
  beneficiaries: any[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.loadBeneficiaries();
  }

  loadBeneficiaries() {
    this.authService.getBeneficiaries().subscribe({
      next: (data) => {
        this.beneficiaries = Array.isArray(data) ? data : [data];
      },
      error: (error) => {
        console.error('Error fetching beneficiaries:', error);
      }
    });
  }
}
