import { Component, Input, OnInit } from "@angular/core";
import { Subscription, tap } from "rxjs";
import { ToogleService } from "../../../../services/tootleService.service";
import { ToogleAction } from "../../../../utils/dispach/actions/toogleAction";
import { ComponentEvent } from "../../../../utils/dispach/component.event";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: "if-shell-navbar-auth",
  templateUrl: "./navbar-auth.component.html",
  styleUrls: ["./navbar-auth.component.scss"],
})
export class NavbarAuthComponent implements OnInit {
  @Input() public collapset = false;
  @Input() public screenWidth = 0;
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

  public getHeadClass(): string {
    let styleClass = '';
    console.log(this.screenWidth);
    console.log(this.collapset);
    if (this.collapset && this.screenWidth > 768) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      styleClass = 'head-trimmed';
    } else {
      console.log('navbar 1');
      styleClass = 'head-md-screen';
    }

    return styleClass;
  }
}
