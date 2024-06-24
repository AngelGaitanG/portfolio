import { Injectable } from '@angular/core';
import { INFO } from '../info';
import { EventService } from './event.service';


@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage = 'spanish'

  constructor(private eventService: EventService){}

  getInfo(){
    return this.currentLanguage === 'spanish' ? INFO.spanish : INFO.english
  }

  toggleLanguage(){
    this.currentLanguage = this.currentLanguage === 'spanish' ? 'english' : 'spanish';
    this.eventService.emitLanguageChanged();
  }
}
