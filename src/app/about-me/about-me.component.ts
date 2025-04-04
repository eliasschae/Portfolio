import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements AfterViewInit {
  public text: { [key: string]: string } = {};

  constructor(private translationService: TranslationService, private elRef: ElementRef) {
    this.translationService.text$.subscribe((text) => {
      this.text = text;
    });
  }

  ngAfterViewInit(): void {
    const elements = this.elRef.nativeElement.querySelectorAll('.hidden-left, .hidden-right');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    elements.forEach((el: Element) => observer.observe(el));
  }

  switchLanguage(language: 'en' | 'de') {
    this.translationService.switchLanguage(language);
  }
}