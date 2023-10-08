import { Component } from '@angular/core';

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
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class LayoutAuthComponent {}
