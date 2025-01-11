import {Component} from '@angular/core';
import {USERS} from "../../core/mock/users";
import {MemberCardComponent} from "../../shared/components/member-card/member-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MemberCardComponent,
    CommonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  protected readonly users = USERS;
  public inputValue = 'Qwerty';
}
