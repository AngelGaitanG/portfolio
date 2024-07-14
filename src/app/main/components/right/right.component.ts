import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-right',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './right.component.html',
  styleUrl: './right.component.css'
})
export class RightComponent {
 @Input() info: any

 expandProject(event: Event): void {
  const target = event.currentTarget as HTMLElement;
  const projects = document.querySelectorAll('.project');

  projects.forEach(project => {
    if (project !== target) {
      project.classList.remove('expanded');
    }
  });

  target.classList.toggle('expanded');
}

}
