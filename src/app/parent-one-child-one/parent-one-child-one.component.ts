import { ChangeDetectorRef, Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-parent-one-child-one',
  imports: [],
  templateUrl: './parent-one-child-one.component.html',
  styleUrl: './parent-one-child-one.component.scss'
})
export class ParentOneChildOneComponent implements DoCheck {
  constructor(private ch: ChangeDetectorRef) {

  }
  ngDoCheck(): void {
    console.log('Change Detection Happed in P-1-C-1');
  }

  justClicked($event: Event) {

  }
}
