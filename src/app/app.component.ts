import { Component, OnInit } from '@angular/core';
import { filter, interval, map, Observable, take, tap } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  interval$!: Observable<string>


  ngOnInit(): void {
    // on met un dollard sur interval afin de definir que c'est un interval afin de mieux l identifier 
    this.interval$ = interval(1000).pipe(
      take(9),
      filter(value => value % 3 === 0),
      map(value => value % 2 === 0 ?
        ` je suis ${value} et je suis pair` : ` je suis ${value} et je suis impair`),
      tap(text => this.logger(text))
    );

  }
  //--fin de ngOnInit


  logger(text: string) {

    console.log(`Log:${text}`)
  }



}
