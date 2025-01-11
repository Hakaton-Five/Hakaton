import { Component } from '@angular/core';
import { MemberCardComponent } from '../../shared/components/member-card/member-card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { USERS } from '../../core/mock/users';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MemberCardComponent, FormsModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  public users = USERS;
}
