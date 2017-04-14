import { Injectable } from "@angular/core"
import { Review } from './review.model'

@Injectable()
export class ReviewService {
    reviewItems: Review[] = [
        { id: 1, title: 'module' },
        { id: 2, title: 'routes' },
        { id: 3, title: 'componentsmodule' },
        { id: 4, title: 'services' }
    ];
}