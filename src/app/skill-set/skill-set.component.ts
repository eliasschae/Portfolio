import { Component, ElementRef } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {
  isHovering = false;
  public text: { [key: string]: string } = {};
  
  constructor(private translationService: TranslationService, private elRef: ElementRef) {
    this.translationService.text$.subscribe((text) => {
      this.text = text;
    });
  }
  
  switchLanguage(language: 'en' | 'de') {
    this.translationService.switchLanguage(language);
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

  scrollTo(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
