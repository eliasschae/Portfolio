import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

type Language = 'en' | 'de';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit, OnDestroy {
  text: { [key: string]: string } = {};
  private translationSubscription?: Subscription;

  constructor(private translationService: TranslationService,private router: Router) {}

  ngOnInit() {
    window.scrollTo(0, 0); // Scrollt ganz nach oben
    this.translationSubscription = this.translationService.text$.subscribe((text) => {
      this.text = text;
    });
  }

  ngOnDestroy(): void {
    this.translationSubscription?.unsubscribe();
  }

  goBack() {
  this.router.navigate(['/']);
  }
}