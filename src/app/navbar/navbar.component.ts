import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SandwichMenuComponent } from './components/sandwich-menu/sandwich-menu.component';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, SandwichMenuComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() info: any
  isMenuOpen: boolean = false;

  toggleMenu():void {
    this.isMenuOpen = !this.isMenuOpen
  }


}
