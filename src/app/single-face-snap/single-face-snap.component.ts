import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap-services';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {


  faceSnap$!: Observable<FaceSnap>
  constructor(private faceSnapService: FaceSnapService, private route: ActivatedRoute) { }

  title!: string;
  description!: string;
  buttonTexte!: string
  createdDate!: Date;
  snaps!: number;
  urlImage!: string


  ngOnInit(): void {

    this.buttonTexte = "Oh Snap"

    //nous avons besoin de recuperer l id en number mais l id est une chaine de carecatere nous allond donc utliser le typecast
    const faceSnapId = +this.route.snapshot.params['id']

    this.faceSnap$ = this.faceSnapService.getFaceSnapById(faceSnapId)


  }
  onAddSnap(faceSnapId: number) {

    if (this.buttonTexte === "Oh Snap") {
      this.faceSnapService.snapFaceSnapById(faceSnapId, "snap");
      this.buttonTexte = "oups déja snap"

    } else {
      this.faceSnapService.snapFaceSnapById(faceSnapId, "unSnap")
      this.buttonTexte = "Oh Snap"
    }


  }


}
