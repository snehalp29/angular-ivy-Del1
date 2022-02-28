import { Component, OnInit } from '@angular/core';
import { Widget } from '../app-interfaces';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css'],
})
export class WidgetsComponent implements OnInit {
  widgets$: Widget[] = [
    
  ];

  selectedWidget$: Widget;

  constructor() {}

  ngOnInit() {}

  onSelected(widget: Widget) {
    this.selectedWidget$ = widget;
  }
}
