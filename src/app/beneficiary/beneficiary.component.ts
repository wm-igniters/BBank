
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-beneficiary',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, SideNavComponent],
  templateUrl: './beneficiary.component.html',
  styleUrls: ['./beneficiary.component.css']
})
export class BeneficiaryComponent {
  userName: string = 'Brett Smith';
  lastLogin: string = '04/06/2021, 05:48:25 PM';

  beneficiaries = [
    {
      name: 'Samantha Tran (Sam)',
      phone: '+1 335 246 3546',
      email: 'john.doe@gmail.com',
      defaultAcc: 'XXXX XX 99',
      avatar: '👩'
    },
    {
      name: 'John Doe (John)',
      phone: '+1 335 246 3546',
      email: 'john.doe@gmail.com',
      defaultAcc: 'XXXX XX 99',
      avatar: '🏢'
    },
    {
      name: 'John Doe (John)',
      phone: '+1 335 246 3546',
      email: 'john.doe@gmail.com',
      defaultAcc: 'XXXX XX 99',
      avatar: '👨'
    },
    {
      name: 'John Doe (John)',
      phone: '+1 335 246 3546',
      email: 'john.doe@gmail.com',
      defaultAcc: 'XXXX XX 99',
      avatar: '🏢'
    },
    {
      name: 'Samantha Tran (Sam)',
      phone: '+1 335 246 3546',
      email: 'john.doe@gmail.com',
      defaultAcc: 'XXXX XX 99',
      avatar: '👩'
    },
    {
      name: 'John Doe (John)',
      phone: '+1 335 246 3546',
      email: 'john.doe@gmail.com',
      defaultAcc: 'XXXX XX 99',
      avatar: '👨'
    }
  ];
}
