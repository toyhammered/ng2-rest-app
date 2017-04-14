import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { FeaturedItemComponent } from './items/featured-item/featured-item.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {path: '',      redirectTo: '/widgets', pathMatch: 'full' },
  {path: 'items', component: ItemsComponent, children: [
    {path: 'featured/:id', component: FeaturedItemComponent}
  ]},
  {path: 'widgets', component: WidgetsComponent },
  {path: 'review', component: ReviewComponent },
  {path: '**',     redirectTo: '/widgets', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Ng2RestAppRoutingModule { }
