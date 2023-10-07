import { Component } from '@angular/core';

@Component({
  selector: "if-shell-navbar-subCategories",
  templateUrl: "./navbar-subCategories.component.html",
  styleUrls: ["./navbar-subCategories.component.scss"],
})
export class NavbarSubcategoriesComponent {
  
  public selectedOption = 'pre-match'; 

  constructor() {}

  public handleOptionToggle(option: string) {
    if (this.selectedOption !== option) {
      this.selectedOption = option; // Alterna para a opção selecionada
    }
  }
}
