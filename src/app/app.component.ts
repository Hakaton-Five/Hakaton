import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { USERS } from './core/mock/users';
import {SidebarComponent} from "./shared/sidebar/sidebar.component";
import {UserComponent} from "./user/user.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule,
    SidebarComponent,
    UserComponent
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
