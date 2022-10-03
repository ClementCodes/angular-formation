import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, switchMap } from "rxjs";
import { FaceSnap } from "../models/face-snap.model";
import { NewFaceSnapComponent } from "../new-face-snap/new-face-snap.component";

//ici la partie inhjectable au niveau du root et dit quel'lle doit etre injecté au niveau racine de l application
@Injectable({

    providedIn: 'root'
})
export class FaceSnapService {


    constructor(private http: HttpClient) { }



    // faceSnaps: FaceSnap[] = [
    //     {
    //         id: 1,
    //         title: "brindille tu es belle",
    //         description: "c'est ici que tout commence",
    //         createdDate: new Date(),
    //         url: "http://www.blog-parents.fr/maman-nougatine/wp-content/uploads/sites/8/2018/12/IMG_9872.jpg",
    //         snaps: 144,
    //         location: "Bordeaux"
    //     },
    //     {
    //         id: 2,
    //         title: "espace trop lointain",
    //         description: "commence",
    //         createdDate: new Date(),
    //         url: "https://media.istockphoto.com/photos/bamboo-forest-in-japan-picture-id1129053212?k=20&m=1129053212&s=612x612&w=0&h=rATLyt0W14kn2X48fw_oDWItl_O3alo1WtCeo6pdRaQ=",
    //         snaps: 8,
    //         location: "Paris"
    //     }
    //     , {
    //         id: 3,
    //         title: "foret verdoyante",
    //         description: "Tout va bien",
    //         createdDate: new Date(),
    //         url: "https://media.istockphoto.com/photos/vintage-photo-of-lavender-field-picture-id647197172?k=20&m=647197172&s=170667a&w=0&h=ucR22t4ir5tTnWo_RZzw53dtWqQ-DmmW0SCWWaZ-Qlg=",
    //         snaps: 140
    //     }, {
    //         id: 4,
    //         title: "foret",
    //         description: "Tout va bien",
    //         createdDate: new Date(),
    //         url: "https://media.istockphoto.com/photos/vintage-photo-of-lavender-field-picture-id647197172?k=20&m=647197172&s=170667a&w=0&h=ucR22t4ir5tTnWo_RZzw53dtWqQ-DmmW0SCWWaZ-Qlg=",
    //         snaps: 0
    //     }

    // ]
    getAllFaceSnaps(): Observable<FaceSnap[]> {

        return this.http.get<FaceSnap[]>("http://localhost:3000/facesnaps")
    }

    getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {

        return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`)
    }


    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unSnap'): Observable<FaceSnap> {

        return this.getFaceSnapById(faceSnapId).pipe(


            map(faceSnap => ({
                ...faceSnap,
                snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)

            })),
            switchMap(updateFaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`, updateFaceSnap))
        )
    }

    // addFaceSnap(formValue: { title: string, description: string, url: string, location?: string }): void {


    //     const faceSnap: FaceSnap = {
    //         ...formValue,
    //         createdDate: new Date(),
    //         snaps: 0,
    //         id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
    //     }

    //     this.faceSnaps.push(faceSnap)
    // }
}


