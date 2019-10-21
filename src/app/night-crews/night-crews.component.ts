import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'central-night-crews',
  templateUrl: './night-crews.component.html',
  styleUrls: ['./night-crews.component.scss']
})
export class NightCrewsComponent implements OnInit {
  public readonly days: string[] = [
    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
  ]

  constructor() { }

  ngOnInit() {
  }

}
