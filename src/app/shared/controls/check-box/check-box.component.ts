import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss']
})
export class CheckBoxComponent implements OnInit {

  @Input("label")
  label : string = "";

  @Output("checked")
  private checkedEmitter : EventEmitter<boolean> = new EventEmitter<boolean>();

  checked : boolean = false;

  constructor() { }

  ngOnInit(): void {}

  onCheckBoxClicked() {
    this.checked = !this.checked;
    this.checkedEmitter.emit(this.checked);
  }

}
