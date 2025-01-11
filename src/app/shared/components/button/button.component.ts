import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() className: string = '';
  @Input() disabled: boolean = false;
  @Input() id: number = 0; // New Input to handle ID

  @Output() buttonClick = new EventEmitter<number>(); // Emit the ID

  handleClick(): void {
    this.buttonClick.emit(this.id); // Emit the ID when the button is clicked
  }
}
