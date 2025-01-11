import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/header/header.component';
import { MemberCardComponent } from './shared/components/member-card/member-card.component';
import { USERS } from './core/mock/users';
import {SidebarComponent} from "./shared/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule,
    MemberCardComponent,
    HeaderComponent,
    SidebarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Hakaton';
  public checked = true;

  public inputValue = 'Qwerty';
  public users = USERS;
}
