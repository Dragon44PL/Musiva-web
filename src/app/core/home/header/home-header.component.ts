import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

  @Input("translation")
  header: any;

  constructor() { }

  ngOnInit(): void {
  }

}
