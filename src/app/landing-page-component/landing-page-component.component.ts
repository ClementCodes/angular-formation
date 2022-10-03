import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-landing-page-component',
  templateUrl: './landing-page-component.component.html',
  styleUrls: ['./landing-page-component.component.scss']
})
export class LandingPageComponentComponent implements OnInit {



  userEmail: string = ""
  constructor(private router: Router) { }

  ngOnInit(): void {


  }

  onContinue(): void {
    this.router.navigateByUrl('facesnaps')
  }


  OnsubmitForm(form: NgForm) {


    console.log("email" + " " + form.value)
    console.log("email" + " " + this.userEmail)
  }
}
