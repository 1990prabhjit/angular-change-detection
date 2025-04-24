import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-parent-two-child-two',
  imports: [],
  templateUrl: './parent-two-child-two.component.html',
  styleUrl: './parent-two-child-two.component.scss'
})
export class ParentTwoChildTwoComponent implements DoCheck{
  ngDoCheck(): void {
    console.log('Change Detection Happed in P-2-C-2');
  }
  justClicked($event: Event) {
    
  }
}
