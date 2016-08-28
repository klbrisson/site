import { Component } from '@angular/core';
import { TimelineComponent, EventService } from './timeline/index'

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [TimelineComponent],
    providers: [EventService]
})

export class AppComponent {
  // [ ] means property binding - C to D
  // ( ) means event binding - D to C
  title = 'Customer App';
  name = 'Ward';
  wardsColor = 'green';

  changeSuitColor() {
    this.wardsColor = this.wardsColor === 'green' ? 'red' : 'green';
  }
}
