import { Component } from '@angular/core';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})

export class WidgetsComponent {
    selectedWidget;
    widgets = [
        {
            'id': 1,
            'img': 'assets/img/number-1.png',
            'name': 'Widget 1',
            'description': 'This is a description',
            'featured': true
        },
        {
            'id': 2,
            'img': 'assets/img/number-2-blue-icon.png',
            'name': 'Widget 2',
            'description': 'This is a description!',
            'featured': false
        },
        {
            'id': 3,
            'img': 'assets/img/number-3-icon.png',
            'name': 'Widget 3',
            'description': 'This is a lovely widget',
            'featured': false
        }];


    selectWidget(widget) {
      this.selectedWidget = widget;
    }

}


// widgets.component.ts
