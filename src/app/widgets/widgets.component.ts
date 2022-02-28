import { Component, OnInit } from '@angular/core';
import { Widget } from '../app-interfaces';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css'],
})
export class WidgetsComponent implements OnInit {
  widgets$: Widget[] = [
    {
      id: '1',
      title: 'title_1',
      description: 'desc_1',
      email: 'email_1@p.com',
    },
    {
      id: '2',
      title: 'title_2',
      description: 'desc_2',
      email: 'email_1@p.com',
    },
    {
      id: '3',
      title: 'title_3',
      description: 'desc_3',
      email: 'email_1@p.com',
    },
  ];

  selectedWidget$: Widget;

  constructor() {}

  ngOnInit() {}

  onSelected(widget: Widget) {
    this.selectedWidget$ = widget;
  }
}
