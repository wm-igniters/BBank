import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplyCardComponent } from './apply-card/apply-card.component';
import { CardsComponent } from './cards/cards.component';
import { RegisterTypeComponent } from './register-type/register-type.component';
import { IndividualRegisterComponent } from './individual-register/individual-register.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterTypeComponent },
  { path: 'register/individual', component: IndividualRegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'cards/:id', component: CardDetailsComponent },
  { path: 'apply-card', component: ApplyCardComponent },
];
