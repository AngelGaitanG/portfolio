import { Component } from '@angular/core';
import { LanguageService } from '../service/language.service';
import { EventService } from '../service/event.service';
import { NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, NgStyle],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  info: any;
  constructor(private languageService: LanguageService, private eventService: EventService) {
    this.info = this.languageService.getInfo();
    this.eventService.languageChanged.subscribe(() => {
      this.info = this.languageService.getInfo();
    });
  }
}
