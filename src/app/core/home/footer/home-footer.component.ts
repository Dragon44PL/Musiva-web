import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.scss']
})
export class HomeFooterComponent implements OnInit {

  @Input("translation")
  footer: any;

  constructor() { }

  ngOnInit(): void {
  }

}
