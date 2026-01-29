import { Component, OnInit, inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../services/seo';

declare const AOS: any;

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements OnInit, AfterViewInit {
  private seoService = inject(SeoService);
  private platformId = inject(PLATFORM_ID);

  values = [
    {
      icon: 'fas fa-leaf',
      title: 'Sustainability',
      description:
        'We prioritize eco-conscious travel that respects and preserves the natural environment for future generations.',
    },
    {
      icon: 'fas fa-hands-helping',
      title: 'Community',
      description:
        'Supporting local communities and engaging with authentic cultural experiences that benefit everyone.',
    },
    {
      icon: 'fas fa-heart',
      title: 'Authenticity',
      description:
        'Creating genuine connections and experiences that go beyond typical tourist attractions.',
    },
    {
      icon: 'fas fa-compass',
      title: 'Adventure',
      description:
        'Embracing the spirit of exploration while maintaining safety and comfort on every journey.',
    },
  ];

  ngOnInit(): void {
    this.seoService.updateSeoTags({
      title: 'About Us | Route On Wheels',
      description:
        "Learn about Route On Wheels - A community dedicated to sustainable travel, exploring India's rich cultural heritage through meaningful journeys.",
      keywords:
        'about Route On Wheels, sustainable travel India, eco-tourism, Vivek Rauthan, travel agency',
      ogUrl: 'https://routeonwheels.com/about',
      canonicalUrl: 'https://routeonwheels.com/about',
    });
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        if (typeof AOS !== 'undefined') {
          AOS.refreshHard();
        }
      }, 100);
    }
  }
}
