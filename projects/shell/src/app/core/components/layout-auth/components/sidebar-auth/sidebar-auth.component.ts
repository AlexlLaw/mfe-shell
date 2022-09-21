import {
  animate,
  keyframes,
  style,
  transition,
  trigger
} from "@angular/animations";
import {
  Component, EventEmitter, HostListener, OnInit, Output
} from "@angular/core";
import { navbarData } from "./nav-data";

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: "if-shell-sidebar-auth",
  templateUrl: "./sidebar-auth.component.html",
  styleUrls: ["./sidebar-auth.component.scss"],
  animations: [
    trigger("fadeInOut", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("350ms", style({ opacity: 1 })),
      ]),
      transition(":leave", [
        style({ opacity: 1 }),
        animate("350ms", style({ opacity: 0 })),
      ]),
    ]),
    trigger("rotate", [
      transition(":enter", [
        animate(
          "1000ms",
          keyframes([
            style({ transform: "rotate(0deg)", offset: "0" }),
            style({ transform: "rotate(2turn)", offset: "1" }),
          ])
        ),
      ]),
    ]),
  ],
})
export class SidebarAuthComponent implements OnInit {
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() public onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  public collapsed = false;
  public screenWidth = 0;
  public navData = navbarData;

  @HostListener("window:resize", ["$event"])
  public onResize(event: any) {
    console.log('onresize', event);
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({
        collapsed: this.collapsed,
        screenWidth: this.screenWidth,
      });
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  public toggleCollapse(): void {
    this.collapsed = !this.collapsed;

    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }

  public closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }
}
