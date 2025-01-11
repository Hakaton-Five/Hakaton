import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './shared/components/input-text/input-text.component';
import { HeaderComponent } from './shared/header/header.component';
import { MemberCardComponent } from './shared/components/member-card/member-card.component';
import { USERS } from './core/mock/users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule,
    MemberCardComponent,
    HeaderComponent,
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
