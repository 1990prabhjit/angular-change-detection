import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-parent-two-child-one',
  imports: [],
  templateUrl: './parent-two-child-one.component.html',
  styleUrl: './parent-two-child-one.component.scss'
})
export class ParentTwoChildOneComponent implements DoCheck{

  ngDoCheck(): void {
    console.log('Change Detection Happed in P-2-C-1');
  }
  justClicked($event: Event) {

  }
}
