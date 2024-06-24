import { Component } from '@angular/core';
import { LeftComponent } from './components/left/left.component';
import { RightComponent } from './components/right/right.component';

import { LanguageService } from '../service/language.service';
import { EventService } from '../service/event.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [LeftComponent, RightComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  info: any;
  constructor(private languageService: LanguageService, private eventService: EventService) {
    this.info = this.languageService.getInfo();
    this.eventService.languageChanged.subscribe(() => {
      this.info = this.languageService.getInfo();
    });
  }

}
