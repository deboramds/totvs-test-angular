import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-switch',
  standalone: true,
  templateUrl: './custom-switch.component.html',
  styleUrls: ['./custom-switch.component.css']
})
export class CustomSwitchComponent {
  @Input() value = false;
  @Input() disabled = false;
  @Output() valueChange = new EventEmitter<boolean>();

  toggle() {
    if (!this.disabled) {
      this.value = !this.value;
      this.valueChange.emit(this.value);
    }
  }
}
