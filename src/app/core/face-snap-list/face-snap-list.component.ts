import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subject, take, takeUntil, tap } from 'rxjs';
import { FaceSnap } from 'src/app/core/models/face-snap.model';
import { FaceSnapService } from 'src/app/core/services/face-snap-services';


@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnap!: FaceSnap[]
  faceSnap$!: Observable<FaceSnap[]>
  // private destroy$!: Subject<boolean>
  //grace a angular on injecte un service grace au constructeur afin d avoir les donnee a recuperer pour ,notre composant
  constructor(private faceSnapService: FaceSnapService) { }

  ngOnInit(): void {
    // this.destroy$ = new Subject<boolean>();
    // this.faceSnap = this.faceSnapService.getAllFaceSnaps()

    //ici en dessous le test de destruction
    // interval(1000).pipe(
    //   takeUntil(this.destroy$),
    //   tap(value => console.warn("coucou" + value))
    // ).subscribe()

    this.faceSnap$ = this.faceSnapService.getAllFaceSnaps()

  }
  // ngOnDestroy() {
  //   //Called once, before the instance is destroyed.
  //   //Add 'implements OnDestroy' to the class.
  //   this.destroy$.next(true)
  // }

}



