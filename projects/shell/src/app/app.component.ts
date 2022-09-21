import { Component, ViewEncapsulation } from '@angular/core';



@Component({
  selector: 'ib-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  public title = 'ib-app';
}
