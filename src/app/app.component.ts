import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'musiva-web';

  onCheckBoxChecked(checked : boolean) {
    console.log(checked)
  }
}
