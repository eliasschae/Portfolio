import { Component, HostListener, ElementRef } from '@angular/core';
import { TranslationService } from '../services/translation.service'; // Import Service

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public currentLanguageImage = 'assets/IMG/Property 1=Default.png';
  private englishImage = 'assets/IMG/Property 1=Default.png';
  private germanImage = 'assets/IMG/Property 1=Deutsch.png';
  public isEnglish = true;
  public text: { [key: string]: string } = {};
  public isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor(private translationService: TranslationService, private elRef: ElementRef) {
    this.translationService.text$.subscribe((text) => {
      this.text = text;
    });
  
    this.translationService.language$.subscribe((lang) => {
      this.isEnglish = lang === 'en';
      this.currentLanguageImage = this.isEnglish ? this.englishImage : this.germanImage;
    });
  }  

  toggleLanguage() {
    this.isEnglish = !this.isEnglish;
    const newLang = this.isEnglish ? 'en' : 'de';
    this.currentLanguageImage = this.isEnglish ? this.englishImage : this.germanImage;
    this.translationService.switchLanguage(newLang);
  }

  scrollTo(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  @HostListener('document:click', ['$event'])
    clickout(event: Event) {
        if (!this.elRef.nativeElement.contains(event.target) && this.isMenuOpen) {
            this.isMenuOpen = false;
        }
    }
}