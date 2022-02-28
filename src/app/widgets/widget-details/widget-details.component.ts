import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Output() saved = new EventEmitter<Widget>();
  @Output() canceled = new EventEmitter();

  constructor() {}

  SubmitWidget(widget: Widget) {
    // console.log('SubmitWidget', widget);
    this.saved.emit(widget);
  }
  ngOnInit() {}
}
