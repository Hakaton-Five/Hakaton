import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { USERS } from './core/mock/users';
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import {PagesWrapperComponent} from "./shared/pages-wrapper/pages-wrapper.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    SidebarComponent,
    PagesWrapperComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Hakaton';
  public checked = true;
  public users = USERS;
}
