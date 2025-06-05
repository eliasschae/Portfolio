import { Component } from '@angular/core';
import { RouterModule, Router, NavigationEnd, Event as RouterEvent, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NgIf } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterModule,
    NgIf,
    HeaderComponent,
    HeroComponent,
    AboutMeComponent,
    SkillSetComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent
  ],
})
export class AppComponent {
  isHomeRoute = true;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(
        filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        this.isHomeRoute = event.urlAfterRedirects.split('?')[0] === '/';

          const scrollTarget = this.route.snapshot.queryParamMap.get('scrollTo');
        if (scrollTarget) {
          setTimeout(() => {
           const el = document.getElementById(scrollTarget);
          if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  
          // Entferne den ?scrollTo aus der URL
          window.history.replaceState({}, '', '/');
          }
        }, 100);
      }
    });
  }
}