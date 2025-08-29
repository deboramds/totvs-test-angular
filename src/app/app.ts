import { Component, signal } from '@angular/core';
import { CustomSwitchComponent } from './components/custom-switch/custom-switch.component';
import { CustomSelectComponent } from './components/custom-select/custom-select.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.css'],
  imports: [CustomSwitchComponent, CustomSelectComponent]
})
export class App {
  protected readonly title = signal('totvsTest');

  
  protected readonly switchState = signal(false);
  protected readonly isDisabled = signal(false);

  
  protected readonly selectedOption = signal('Opção 1');
  protected readonly selectOptions = ['Opção 1', 'Opção 2', 'Opção 3'];
}
