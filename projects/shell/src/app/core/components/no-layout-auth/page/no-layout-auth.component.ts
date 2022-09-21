import { Component } from "@angular/core";

@Component({
  selector: "if-shell-no-layout-auth",
  template: `
    <div>
      <router-outlet></router-outlet> 
    </div> 
      `,
  styles: [
    `
      @import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@600&display=swap");

      /* You can add global styles to this file, and also import other style files */
      div {
        margin: 0;
        font-family: "Noto Sans", sans-serif;
      }

      .error-input {
        border: 2px solid #f3170b;
      }

      .required::after {
        content: " * ";
        font-size: 1em;
        color: #b20a00 !important;
      }
    `,
  ],
})
export class NoLayoutAuthComponent {}
