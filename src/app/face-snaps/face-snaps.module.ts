import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { ReactiveFormsModule } from '@angular/forms';

import { FaceSnapListComponent } from '../core/face-snap-list/face-snap-list.component';
import { NewFaceSnapComponent } from '../new-face-snap/new-face-snap.component';
import { SingleFaceSnapComponent } from '../single-face-snap/single-face-snap.component';
import { FaceSnapComponent } from './component/face-snap.component';
import { FaceSnapRoutingModule } from './face-snaps-routing.module';




@NgModule({
  declarations: [
    FaceSnapComponent,
    FaceSnapListComponent,
    NewFaceSnapComponent,
    SingleFaceSnapComponent


  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FaceSnapRoutingModule



  ],
  exports: [
    FaceSnapComponent,
    FaceSnapListComponent,
    NewFaceSnapComponent,
    SingleFaceSnapComponent

  ]
})
export class FaceSnapsModule { }
