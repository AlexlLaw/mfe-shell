import { Component, Input, OnInit } from '@angular/core';

import { Subscription, tap } from 'rxjs';

import { ToogleService } from '../../../../services/tootleService.service';
import { ToogleAction } from '../../../../utils/dispach/actions/toogleAction';
import { ComponentEvent } from '../../../../utils/dispach/component.event';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'if-shell-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit  {
  
  @Input() collapsed = false;
  screenWidth = 1365;
  changeLog: string[] = [];

  private subscription: Subscription = new Subscription();

  constructor(private toogleService: ToogleService) { }

  ngOnInit(): void {
    this.subscription.add(this.toogleService.onEvent()
      .pipe(
        tap((event: any) => {
          this.childCOmponentActionReducer(event);
        })
      )
      .subscribe());
  }

  public childCOmponentActionReducer(event:ComponentEvent<ToogleAction, any>): void {
    switch(event.action) {
    case ToogleAction.TOOGLE:
      this.screenWidth = event.data;
    }
  }

  public getBodyClass(): string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }
}
