import { CommonModule, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-left',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './left.component.html',
  styleUrl: './left.component.css'
})
export class LeftComponent {
  @Input() info: any;


  tecnologies = ["TypeScript", "NestJS", "PostgreSQL", "Github", "Git", "Angular", "JavaScript", "HTML", "CSS", "Node", "React", "mongoDB", "Express", "Docker",]

}
