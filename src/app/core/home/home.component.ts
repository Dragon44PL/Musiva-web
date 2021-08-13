import { Component, OnInit } from '@angular/core';
import {translate} from "@rxweb/translate";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @translate({translationName: "home" })
  home: any

  @translate({ translationName: "home.header" })
  header: any;

  @translate({translationName: "home.footer" })
  footer: any

  constructor() { }

  ngOnInit(): void {
  }

}
