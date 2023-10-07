import { Component } from '@angular/core';

import { ToogleService } from '../../../services/tootleService.service';
import { ToogleAction } from '../../../utils/dispach/actions/toogleAction';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'if-shell-layout-auth',
  template: `
    <if-shell-navbar-categories>
    </if-shell-navbar-categories>
    <if-shell-navbar-subCategories>
    </if-shell-navbar-subCategories>

    <if-shell-body>
    </if-shell-body>
  `,
  styles: [
  ]
})
export class LayoutAuthComponent {
  
  public isSideNavCollapsed = false;
  public screenWidth = 0;
  
  constructor(private toogleService: ToogleService) {}
  
  public onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
    this.dispatch(this.screenWidth);
  }

  public dispatch(screenWidth: number): void {
    this.toogleService.dispatchAction({action: ToogleAction.TOOGLE, data: screenWidth});
  }
}
