import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MemberCardComponent } from './shared/components/member-card/member-card.component';
import {SidebarComponent} from "./shared/sidebar/sidebar.component";
import {PagesWrapperComponent} from "./shared/pages-wrapper/pages-wrapper.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    MemberCardComponent,
    SidebarComponent,
    PagesWrapperComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Hakaton';
  public checked = true;

}
