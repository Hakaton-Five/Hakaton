import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SidebarModule,
    CommonModule // Add CommonModule to imports
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menuItems = [
    { name: 'Dashboard', icon: 'pi pi-th-large' },
    { name: 'List employer', icon: 'pi pi-file' },
    { name: 'Planning', icon: 'pi pi-book' },
    { name: 'Folder', icon: 'pi pi-star' },
    { name: 'Chat', icon: 'pi pi-heart' },
    { name: 'Project', icon: 'pi pi-heart' }
  ];

  activeItem: string = '';

  setActiveItem(name: string) {
    this.activeItem = name;
    console.log('Active item:', name);
  }
}
