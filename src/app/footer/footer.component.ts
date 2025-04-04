import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true, 
  imports: [CommonModule] 
})
export class FooterComponent {
  isImprintVisible = false;

  openImprint(): void {
    this.isImprintVisible = true;
  }

  closeImprint(): void {
    this.isImprintVisible = false;
  }

  closeOnOutsideClick(event: Event): void {
    if (event.target === event.currentTarget) {
      this.closeImprint();
    }
  }
}