import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms"; // Import CommonModule for ngFor

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Include CommonModule here
  templateUrl: './user.component.html',
})
export class UserComponent {
  filterStatus: string = '';
  selectedSkills: string[] = [];
  filteredUsers: any[] = [];

  availableSkills: string[] = ['Angular', 'React', 'TypeScript', 'JavaScript', 'Node', 'Python', 'Django'];

  users = [
    { name: 'John', skills: ['Angular', 'TypeScript'], status: 'active' },
    { name: 'Jane', skills: ['React', 'JavaScript', 'Node'], status: 'bench' },
    { name: 'Mike', skills: ['Python', 'Django'], status: 'active' },
    { name: 'Sara', skills: ['Angular', 'React', 'JavaScript'], status: 'active' },
  ];

  onSkillsSelectionChanged(skill: string): void {
    const index = this.selectedSkills.indexOf(skill);
    if (index === -1) {
      this.selectedSkills.push(skill);
    } else {
      this.selectedSkills.splice(index, 1);
    }
    this.filterUsers();
  }

  filterUsers(): void {
    this.filteredUsers = this.users
      .filter(user => {
        const matchesStatus = !this.filterStatus || user.status === this.filterStatus;
        const matchesSkills = this.getMatchingSkills(user.skills) > 0;
        return matchesStatus && matchesSkills;
      })
      .sort((a, b) => this.getMatchingSkills(b.skills) - this.getMatchingSkills(a.skills));
  }

  getMatchingSkills(userSkills: string[]): number {
    console.log('Hulk')
    return userSkills.filter(skill => this.selectedSkills.includes(skill)).length;
  }
}
