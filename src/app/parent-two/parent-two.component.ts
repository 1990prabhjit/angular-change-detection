import { Component, DoCheck } from '@angular/core';
import { ParentTwoChildOneComponent } from "../parent-two-child-one/parent-two-child-one.component";
import { ParentTwoChildTwoComponent } from "../parent-two-child-two/parent-two-child-two.component";

@Component({
  selector: 'app-parent-two',
  imports: [ParentTwoChildOneComponent, ParentTwoChildTwoComponent],
  templateUrl: './parent-two.component.html',
  styleUrl: './parent-two.component.scss'
})
export class ParentTwoComponent implements DoCheck{

  ngDoCheck(): void {
    console.log('Change Detection Happed in P-2');
  }
  justClicked($event: Event) {

  }
}
