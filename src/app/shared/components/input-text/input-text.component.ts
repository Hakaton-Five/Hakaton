import { Component, forwardRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true,
    },
  ],
})
export class InputTextComponent implements ControlValueAccessor {

  @Input()
  public inputTextPlaceholder!: string;

  public inputTextValue: string = '';

  private onChange: (value: string) => void = () => {};

  private onTouched: () => void = () => {};

  public writeValue(value: string): void {
    this.inputTextValue = value || '';
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public onInputChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.inputTextValue = value;
    this.onChange(value);
  }

  public onBlur(): void {
    this.onTouched();
  }

}
