import { Component, OnInit } from '@angular/core';
import {ReviewService, Review } from '../shared';

@Component({
    selector: 'app-review',
    template: `
        <h1>{{title}}</h1>
        <hr>
        <div *ngFor="let item of reviewItems"> 
            {{item.id}}: {{item.title}}
        </div>
    `
})
export class ReviewComponent implements OnInit {
    title = 'Review Time Yo';
    reviewItems: Review[];

    constructor(private reviewService: ReviewService) {}

    ngOnInit() {
        this.reviewItems = this.reviewService.reviewItems;
    }
}