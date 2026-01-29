import { Component, OnInit, inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Header } from './shared/header';
import { Footer } from './shared/footer';
import { SeoService } from './services/seo';

declare const AOS: any;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit, AfterViewInit {
  private seoService = inject(SeoService);
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);

  ngOnInit(): void {
    this.seoService.setDefaultStructuredData();
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initAOS();

      // Refresh AOS and scroll to top on route changes
      this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
        // Scroll to top immediately
        window.scrollTo(0, 0);

        // Wait for Angular to fully render the new component
        setTimeout(() => {
          if (typeof AOS !== 'undefined') {
            AOS.refreshHard();
          }
        }, 150);
      });
    }
  }

  private initAOS(): void {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 300,
        once: false,
        offset: 50,
        easing: 'ease-out',
        delay: 0,
        mirror: false,
      });
    }
  }
}
