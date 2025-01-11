import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.scss',
})
export class MemberCardComponent {
  @Input() name: string = '';
  @Input() surname: string = '';
  @Input() image: string = '';
  @Input() step: number = 1;
  @Input() id: number = 0;

  public handleSkills(id: number): void {
    console.log(`Skills: ${id}`);
  }

  public handleCareer(id: number): void {
    console.log(`Career: ${id}`);
  }
}
