import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-right',
  standalone: true,
  imports: [NgFor],
  templateUrl: './right.component.html',
  styleUrl: './right.component.css'
})
export class RightComponent {
 @Input() info: any

}
