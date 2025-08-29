import { Component, signal } from '@angular/core';
import { CustomSwitchComponent } from './components/custom-switch/custom-switch.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.css'],
  imports: [CustomSwitchComponent]
})
export class App {
  protected readonly title = signal('totvsTest');

  
  protected readonly switchState = signal(false);

  
  protected readonly isDisabled = signal(false);
}
