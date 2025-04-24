import { ChangeDetectionStrategy, Component, DoCheck} from '@angular/core';
import { ParentOneComponent } from './parent-one/parent-one.component';
import { ParentTwoComponent } from './parent-two/parent-two.component';

@Component({
  selector: 'app-root',
  imports: [ParentOneComponent, ParentTwoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'  
})
export class AppComponent implements DoCheck{
  title = 'angular-change-detection';
  count = 0;
  increment() {
    setInterval(() => {
      this.count++;
    }, 1000);
  }

  ngDoCheck(): void {
    console.log('Change Detection Happed');
  }

  justClicked($event: Event) {

  }
}
