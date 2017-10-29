import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { StarRatingComponent } from './star-rating';

@NgModule({
  declarations: [
    StarRatingComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    StarRatingComponent
  ]
})
export class StarRatingModule {}