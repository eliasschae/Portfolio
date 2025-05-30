import { Component } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  isGitHubHovering = false;
  isLinkedinHovering = false;
  isEmailHovering = false;

  public text: { [key: string]: string } = {};

  constructor(private translationService: TranslationService) {
    this.translationService.text$.subscribe((text) => {
      this.text = text;
    });
  }

  switchLanguage(language: 'en' | 'de') {
    this.translationService.switchLanguage(language);
  }

  scrollTo(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}