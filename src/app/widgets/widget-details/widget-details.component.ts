import { Component, Input, OnInit } from '@angular/core';
import { Widget } from '../../app-interfaces';

@Component({
  selector: 'app-widget-details',
  templateUrl: './widget-details.component.html',
  styleUrls: ['./widget-details.component.css'],
})
export class WidgetDetailsComponent implements OnInit {
  currentWidget: Widget;
  originalTitle: string;

  @Input() set widget(val: Widget) {
    this.currentWidget = { ...val };
  }

  constructor() {}

  ngOnInit() {}
}
