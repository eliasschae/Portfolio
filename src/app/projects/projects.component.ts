import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public text: { [key: string]: string } = {};
  public popupVisible: string | null = null;

  // Liste der Projekte in der Reihenfolge, in der sie angezeigt werden sollen
  private projectOrder: string[] = ['join', 'sharkie', 'DABubble'];

  constructor(private translationService: TranslationService) {
    this.translationService.text$.subscribe((text) => {
      this.text = text;
    });
  }

  openPopup(project: string) {
    this.popupVisible = project;
  }

  closePopup() {
    this.popupVisible = null;
  }

  // Methode, um zum nächsten Projekt zu wechseln
  nextProject(currentProject: string) {
    const currentIndex = this.projectOrder.indexOf(currentProject);
    if (currentIndex !== -1 && currentIndex < this.projectOrder.length - 1) {
      this.popupVisible = this.projectOrder[currentIndex + 1];
    } else {
      this.popupVisible = this.projectOrder[0]; // Zurück zum ersten Projekt, wenn das Ende erreicht ist
    }
  }

  switchLanguage(language: 'en' | 'de') {
    this.translationService.switchLanguage(language);
  }

  getFormattedText(text: string): string {
    return text.replace(/\n/g, '<br>');
  }  
}