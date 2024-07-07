import { Component } from '@angular/core';
import { LanguageService } from '../service/language.service';
import { EventService } from '../service/event.service';
import { FormContactComponent } from './components/form-contact/form-contact.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormContactComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  info: any;
  constructor(private languageService: LanguageService, private eventService: EventService) {
    this.info = this.languageService.getInfo();
    this.eventService.languageChanged.subscribe(() => {
      this.info = this.languageService.getInfo();
    });
  }
}
