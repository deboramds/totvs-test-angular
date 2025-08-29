import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-select',
  standalone: true,
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css']
})
export class CustomSelectComponent {
  @Input() options: string[] = [];
  @Input() selected: string = '';
  @Input() disabled = false;
  @Output() selectedChange = new EventEmitter<string>();

  onChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.selectedChange.emit(value);
  }
}
