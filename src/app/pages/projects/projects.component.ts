import { Component } from '@angular/core';
import {UserComponent} from "../../user/user.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    UserComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
