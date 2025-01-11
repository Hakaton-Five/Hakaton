import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-pages-wrapper',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './pages-wrapper.component.html',
  styleUrl: './pages-wrapper.component.scss'
})
export class PagesWrapperComponent {

}
