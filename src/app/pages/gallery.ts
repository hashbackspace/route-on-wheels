import { Component, OnInit, inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../services/seo';

declare const AOS: any;

@Component({
  selector: 'app-gallery',
  imports: [CommonModule, RouterLink],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery implements OnInit, AfterViewInit {
  private seoService = inject(SeoService);
  private platformId = inject(PLATFORM_ID);

  images = [
    {
      src: 'https://www.routeonwheels.com/assets/images/go.JPG',
      alt: 'Gallery Image',
      category: 'photos',
    },
    {
      src: 'https://www.routeonwheels.com/assets/images/go1.JPG',
      alt: 'Gallery Image',
      category: 'photos',
    },
    {
      src: 'https://www.routeonwheels.com/assets/images/go2.JPG',
      alt: 'Gallery Image',
      category: 'photos',
    },
    {
      src: 'https://www.routeonwheels.com/assets/images/go3.JPG',
      alt: 'Gallery Image',
      category: 'photos',
    },
    {
      src: 'https://www.routeonwheels.com/assets/images/GO11.JPG',
      alt: 'Gallery Image',
      category: 'photos',
    },
    {
      src: 'https://www.routeonwheels.com/assets/images/go5.JPG',
      alt: 'Gallery Image',
      category: 'photos',
    },
    {
      src: 'https://www.routeonwheels.com/assets/images/go6.JPG',
      alt: 'Gallery Image',
      category: 'photos',
    },
    {
      src: 'https://www.routeonwheels.com/assets/images/go7.JPG',
      alt: 'Gallery Image',
      category: 'photos',
    },
    {
      src: 'https://www.routeonwheels.com/assets/images/go8.JPG',
      alt: 'Gallery Image',
      category: 'photos',
    },
    {
      src: 'https://www.routeonwheels.com/assets/images/go9.JPG',
      alt: 'Gallery Image',
      category: 'photos',
    },
    {
      src: 'https://www.routeonwheels.com/assets/images/go10.JPG',
      alt: 'Gallery Image',
      category: 'photos',
    },
    {
      src: 'https://www.routeonwheels.com/assets/images/GO99.JPG',
      alt: 'Gallery Image',
      category: 'photos',
    },
    {
      src: 'https://www.routeonwheels.com/assets/images/GO12.JPG',
      alt: 'Gallery Image',
      category: 'photos',
    },
    {
      src: 'https://www.routeonwheels.com/assets/images/GO13.JPG',
      alt: 'Gallery Image',
      category: 'photos',
    },
    {
      src: 'https://www.routeonwheels.com/assets/images/GO14.JPG',
      alt: 'Gallery Image',
      category: 'photos',
    },
    {
      src: 'https://www.routeonwheels.com/assets/images/GO15.JPG',
      alt: 'Gallery Image',
      category: 'photos',
    },
    {
      src: 'https://www.routeonwheels.com/assets/images/GO16.JPG',
      alt: 'Gallery Image',
      category: 'photos',
    },
    {
      src: 'https://www.routeonwheels.com/assets/images/GO17.JPG',
      alt: 'Gallery Image',
      category: 'photos',
    },
    {
      src: 'https://www.routeonwheels.com/assets/images/GO20.JPG',
      alt: 'Gallery Image',
      category: 'photos',
    },
    {
      src: 'https://www.routeonwheels.com/assets/images/GO21.JPG',
      alt: 'Gallery Image',
      category: 'photos',
    },
    {
      src: 'https://www.routeonwheels.com/assets/images/GO22.JPG',
      alt: 'Gallery Image',
      category: 'photos',
    },
    {
      src: 'https://www.routeonwheels.com/assets/images/GO23.JPG',
      alt: 'Gallery Image',
      category: 'photos',
    },
    {
      src: 'https://www.routeonwheels.com/assets/images/GO24.JPG',
      alt: 'Gallery Image',
      category: 'photos',
    },
    {
      src: 'https://www.routeonwheels.com/assets/images/GO19.JPG',
      alt: 'Gallery Image',
      category: 'photos',
    },
  ];

  videos = [
    { src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Video 1' },
    { src: 'https://www.youtube.com/embed/Scxs7L0vhZ4', title: 'Video 2' },
  ];

  ngOnInit(): void {
    this.seoService.updateSeoTags({
      title: 'Photo Gallery | Route On Wheels',
      description:
        'Explore our travel photo gallery showcasing beautiful destinations across India. Mountains, temples, villages, and spiritual sites.',
      keywords: 'travel gallery, India photos, travel photography, tour images',
      ogUrl: 'https://routeonwheels.com/gallery',
      canonicalUrl: 'https://routeonwheels.com/gallery',
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
