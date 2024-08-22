import { CommonModule, NgFor } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LanguageService } from '../service/language.service';
import { EventService } from '../service/event.service';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-wid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wid.component.html',
  styleUrl: './wid.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WidComponent {
  info: any;
  constructor(private languageService: LanguageService, private eventService: EventService) {
    this.info = this.languageService.getInfo();
    this.eventService.languageChanged.subscribe(() => {
      this.info = this.languageService.getInfo();
    });
  }
}
