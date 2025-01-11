import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterModule } from '@angular/router';
import { ROUTES } from '../../core/constants/routes';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SidebarModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menuItems = [
    { name: 'Dashboard', icon: 'pi pi-th-large', route: ROUTES.Dashboard },
    { name: 'Planning', icon: 'pi pi-book', route: ROUTES.Planning },
    { name: 'Folder', icon: 'pi pi-star', route: ROUTES.Folder },
    { name: 'Chat', icon: 'pi pi-heart', route: ROUTES.Chat },
    { name: 'Project', icon: 'pi pi-heart', route: ROUTES.Project }
  ];

  activeItem: string = '';
}
