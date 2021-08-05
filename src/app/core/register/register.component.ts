import { Component, OnInit } from '@angular/core';
import {translate} from "@rxweb/translate";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @translate({ translationName: "register" })
  register: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSignUpOffer() {}
}
