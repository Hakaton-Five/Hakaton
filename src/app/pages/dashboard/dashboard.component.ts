import {Component} from '@angular/core';
import {USERS} from "../../core/mock/users";
import {MemberCardComponent} from "../../shared/components/member-card/member-card.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MemberCardComponent,
    FormsModule,
    CommonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {

  protected readonly users = USERS;
}
