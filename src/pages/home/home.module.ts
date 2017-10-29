import { NgModule } from '@angular/core';
import { IonicModule,IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

import { StarRatingModule } from '../../components/star-rating/star-rating.module'

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicModule,
    IonicPageModule.forChild(HomePage),
    StarRatingModule
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {}