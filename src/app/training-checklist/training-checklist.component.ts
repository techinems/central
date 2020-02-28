import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'central-training-checklist',
  templateUrl: './training-checklist.component.html',
  styleUrls: ['./training-checklist.component.scss']
})
export class TrainingChecklistComponent implements OnInit {
  public checklistItems: any[];

  constructor() { }

  ngOnInit() {
    this.checklistItems = [
      // {}
    ]
  }

}
