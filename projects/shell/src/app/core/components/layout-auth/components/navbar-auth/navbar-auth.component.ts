import { Component, Input } from "@angular/core";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: "if-shell-navbar-auth",
  templateUrl: "./navbar-auth.component.html",
  styleUrls: ["./navbar-auth.component.scss"],
})
export class NavbarAuthComponent {
  @Input() public collapset = false;
  @Input() public screenWidth = 0;

  public getHeadClass(): string {
    let styleClass = "";
    if (this.collapset && this.screenWidth > 768) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      styleClass = 'head-trimmed';
    } else {
      styleClass = 'head-md-screen';
    }

    return styleClass;
  }
}
