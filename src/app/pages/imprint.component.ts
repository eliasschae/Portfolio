import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss'],
  standalone: true
})
export class ImprintComponent {
  text: { [key: string]: string } = {};

  constructor(private router: Router, private translationService: TranslationService) {
    this.translationService.text$.subscribe(text => {
      this.text = text;
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}