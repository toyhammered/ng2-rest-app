import { Component, OnInit } from '@angular/core';
import { WidgetsService, Widget } from '../shared';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})

export class WidgetsComponent implements OnInit {
    widgets: Widget[];
    selectedWidget: Widget;

    constructor(private widgetsService: WidgetsService) {}

    ngOnInit() {
        this.widgets = this.widgetsService.widgets;
    }

    selectWidget(widget) {
      this.selectedWidget = widget;
    }

    deleteWidget(widget) {
      console.log("Widget Deleted", widget);
    }

    saveWidget(widget) {
      console.log("Widget Saved", widget);
    }

    cancel(widget) {
      console.log('AWWWWWW SAD PANDA!', widget);
    }
}