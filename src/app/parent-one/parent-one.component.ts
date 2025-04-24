import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';
import { ParentOneChildOneComponent } from "../parent-one-child-one/parent-one-child-one.component";
import { ParentOneChildTwoComponent } from "../parent-one-child-two/parent-one-child-two.component";

@Component({
  selector: 'app-parent-one',
  imports: [ParentOneChildOneComponent, ParentOneChildTwoComponent],
  templateUrl: './parent-one.component.html',
  styleUrl: './parent-one.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentOneComponent implements DoCheck{
  ngDoCheck(): void {
    console.log('Change Detection Happed in P-1');
  }
  
  justClicked($event: Event) {

  }
}
