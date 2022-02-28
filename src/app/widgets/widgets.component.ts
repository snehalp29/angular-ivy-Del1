import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Widget } from '../app-interfaces';
import { WidgetsService } from './widgets.service';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css'],
})
export class WidgetsComponent implements OnInit {
  widgets$: Observable<Widget[]>;

  selectedWidget$: Widget;

  constructor(private widgetService: WidgetsService) {}

  ngOnInit() {
    debugger;
    this.loadWidgets();
  }

  loadWidgets() {
    this.widgets$ = this.widgetService.findAll();
  }

  saveWidget(widget: Widget) {
    console.log('saveWidget', widget);
    if (widget.id) {
      this.updateWidget(widget);
    } else {
      this.createWidget(widget);
    }
  }

  reset() {
    this.loadWidgets();
    this.selectWidget(null);
  }

  resetForm() {
    this.selectWidget(null);
  }

  selectWidget(widget: Widget) {
    this.widgetService.findOne(widget?.id);
  }

  createWidget(widget: Widget) {
    this.widgetService.create(widget);
  }

  updateWidget(widget: Widget) {
    this.widgetService.update(widget, widget.id);
  }

  deleteWidget(widget: Widget) {
    //  this.widgetService.delete(widget);
  }

  onSelected(widget: Widget) {
    this.selectedWidget$ = widget;
  }
}
