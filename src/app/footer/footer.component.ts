import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true, 
  imports: [CommonModule] 
})
export class FooterComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      if (params.has('imprint')) {
        this.isImprintVisible = true;
      }
    });
  }

  isImprintVisible = false;

  openImprint(event?: Event): void {
    event?.preventDefault();
    this.isImprintVisible = true;

    this.router.navigate([], {
      queryParams: { imprint: '', privacyPolicy: null }, 
      queryParamsHandling: 'merge',
    });
  }

  closeImprint(): void {
    this.isImprintVisible = false;
    this.router.navigate([], {
      queryParams: { imprint: null },
      queryParamsHandling: 'merge',
    });
  }

  closeOnOutsideClick(event: Event): void {
    if (event.target === event.currentTarget) {
      this.closeImprint();
    }
  }
}