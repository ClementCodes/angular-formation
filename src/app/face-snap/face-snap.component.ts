import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap-services';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;

  constructor(private faceSnapService: FaceSnapService, private router: Router) { }
  title!: string;
  description!: string;
  buttonTexte!: string
  createdDate!: Date;
  snaps!: number;
  urlImage!: string


  ngOnInit(): void {

    this.buttonTexte = "Oh Snap"


  }
  onAddSnap() {

    if (this.buttonTexte === "Oh Snap") {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, "snap");
      this.buttonTexte = "oups déja snap"

    } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, "unSnap")
      this.buttonTexte = "Oh Snap"
    }


  }

  onViewFaceSnap() {


    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }


}
