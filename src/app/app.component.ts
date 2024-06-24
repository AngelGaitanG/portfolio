import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { LanguageService } from './service/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  info: any;
  buttonName = 'English';

  constructor(private languageService: LanguageService) {
    this.info = this.languageService.getInfo();
  }

  toggleLanguage() {
    this.languageService.toggleLanguage();
    this.info = this.languageService.getInfo();
    this.buttonName = this.buttonName === 'English' ? 'Español' : 'English';
  }
}
