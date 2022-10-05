import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapListComponent } from './core/face-snap-list/face-snap-list.component';
import { LandingPageComponentComponent } from './landing-page/components/landing-page/landing-page-component/landing-page-component.component';




const routes: Routes = [
  { path: 'facesnaps', loadChildren: () => import('./face-snaps/face-snaps.module').then(m => m.FaceSnapsModule) },


  { path: '', component: LandingPageComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
