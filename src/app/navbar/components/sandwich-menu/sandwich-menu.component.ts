import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sandwich-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sandwich-menu.component.html',
  styleUrl: './sandwich-menu.component.css'
})
export class SandwichMenuComponent {
@Input() info: any
}
