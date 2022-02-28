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
    this.loadData();
  }

  loadData() {
    this.widgets$ = this.widgetService.findAll();
  }

  onSelected(widget: Widget) {
    this.selectedWidget$ = widget;
  }
}
