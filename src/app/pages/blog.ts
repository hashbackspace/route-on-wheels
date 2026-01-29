import { Component, OnInit, inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../services/seo';

declare const AOS: any;

@Component({
  selector: 'app-blog',
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog implements OnInit, AfterViewInit {
  private seoService = inject(SeoService);
  private platformId = inject(PLATFORM_ID);

  blogs = [
    {
      title: 'Kurushetra – The land of the Bhagavad Gita',
      description:
        "For those who seek spirituality and timeless wisdom, the journey begins in Kurukshetra. In today's world, life often feels rushed...",
      image: 'https://control.routeonwheels.com/uploads/blogs/be1664743f6741d746bb877877c57a2d.png',
      date: '19 Jan',
    },
    {
      title: "Bagini Glacier Trek – A Hidden Gem of Uttarakhand's High",
      description:
        "Tucked deep inside the Nanda Devi National Park region, the Bagini Glacier Trek is one of Uttarakhand's most stunning yet...",
      image: 'https://control.routeonwheels.com/uploads/blogs/aa0dd5e653fc708c371e239f741a0e8a.png',
      date: '10 Dec',
    },
    {
      title: 'The Ram Vanvaas Trail: A Spiritual Travel Journey',
      description:
        "Following the Sacred Footsteps Across India's Timeless Landscapes In Indian sacred Sanskrit epic – Ramayana, Lord Shri Ram is considered one...",
      image: 'https://control.routeonwheels.com/uploads/blogs/e16853ee2b42daf35c433a0c197b438f.png',
      date: '10 Dec',
    },
    {
      title: 'Motorbike tour of Uttarakhand – The Land of Mother Ganges',
      description:
        'Embark on an exhilarating motorbike adventure through the vibrant landscapes of Maharashtra! From winding mountain roads to scenic coastal routes...',
      image: 'https://control.routeonwheels.com/uploads/blogs/7c46c0c14cd07c789cbab673a4b2fef8.png',
      date: '15 Sep',
    },
    {
      title: 'Highway to Heaven',
      description:
        "Set out on the ultimate motorbike adventure along the Highway to Heaven, a route that winds through Maharashtra's most spectacular...",
      image: 'https://control.routeonwheels.com/uploads/blogs/f61d12507f7101b8d3bc19d477e279fa.png',
      date: '15 Sep',
    },
    {
      title: 'A ride from city of dream to pearl of the Orient! Motorbike tour!',
      description:
        'Gear up for the ultimate motorbike adventure as you journey from the City of Dreams, Mumbai, to the Pearl of...',
      image: 'https://control.routeonwheels.com/uploads/blogs/d4d4dbee0dfeff84213184470a8acb48.png',
      date: '15 Sep',
    },
    {
      title: 'An Authentic tribal experience of Odisha!!',
      description:
        'Immerse yourself in the vibrant culture and traditions of Odisha with a journey that takes you deep into the heart...',
      image: 'https://control.routeonwheels.com/uploads/blogs/c4e09e3d9ffa8ea72e02fc1fbe38c45e.png',
      date: '15 Sep',
    },
    {
      title: 'aunsari Marriage Harul Dance',
      description:
        "The Harul Dance is an integral part of the Aunsari community's marriage celebrations, a vibrant tradition that brings together music...",
      image: 'https://control.routeonwheels.com/uploads/blogs/6baa3087a6815bffbd8467c994fd7614.png',
      date: '15 Sep',
    },
  ];

  ngOnInit(): void {
    this.seoService.updateSeoTags({
      title: 'Travel Blogs | Route On Wheels',
      description:
        'Read our latest travel blogs and articles about India exploration, spiritual journeys, and adventure travel tips.',
      keywords:
        'travel blog, India travel stories, spiritual journeys blog, adventure travel articles',
      ogUrl: 'https://routeonwheels.com/blog',
      canonicalUrl: 'https://routeonwheels.com/blog',
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
