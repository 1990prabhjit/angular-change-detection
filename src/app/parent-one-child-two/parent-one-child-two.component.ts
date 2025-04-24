import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-parent-one-child-two',
  imports: [],
  templateUrl: './parent-one-child-two.component.html',
  styleUrl: './parent-one-child-two.component.scss'
})
export class ParentOneChildTwoComponent implements DoCheck{

  ngDoCheck(): void {
    console.log('Change Detection Happed in P-1-C-2');
  }
  justClicked($event: Event) {

  }
}
