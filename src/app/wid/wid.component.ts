import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../service/language.service';
import { EventService } from '../service/event.service';

@Component({
  selector: 'app-wid',
  standalone: true,
  imports: [NgFor],
  templateUrl: './wid.component.html',
  styleUrl: './wid.component.css'
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
