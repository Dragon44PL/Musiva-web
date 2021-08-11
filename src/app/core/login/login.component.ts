import { Component, OnInit } from '@angular/core';
import {translate} from "@rxweb/translate";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @translate({ translationName: "login" })
  multilingualContent: any;

  constructor() { }

  ngOnInit(): void {}

  onRememberMe($event: boolean) {}
}
