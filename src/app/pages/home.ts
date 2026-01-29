import { Component, OnInit, inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../services/seo';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, AfterViewInit {
  private seoService = inject(SeoService);
  private platformId = inject(PLATFORM_ID);

  tours = [
    {
      title: 'Janusar Bawar Vilage Tour',
      description:
        'Village tour to India takes the tourist up-close to the indigenous cultures that are radiant for so many years. Community…',
      image:
        'https://control.routeonwheels.com/uploads/subcategories/4431a56e1ed01c82c4f40a2cccbe3eb1.png',
      badge: 'Popular',
    },
    {
      title: 'A Road To The Great Rann Of Kutch',
      description:
        'This journey will take you through a motley mix of landscapes. There are the endless miles of scrubland that offer…',
      image:
        'https://control.routeonwheels.com/uploads/subcategories/dbe2f31867375ef103be883acd0d38a5.png',
      badge: 'Trending',
    },
    {
      title: 'A Journery To Seeing The Unseen Of Maharashtra',
      description:
        "Maharashtra is not all about Mumbai & Pune, there is more to offer you which are untouched and unknown… it's…",
      image:
        'https://control.routeonwheels.com/uploads/subcategories/84843b9a12c44c29b1dd6e92327980f2.png',
      badge: null,
    },
    {
      title: 'Telangana & Andhra Pradesh Through Temple Tour',
      description:
        'Andhra Pradesh and Telangana are well known among spiritual travelers for their beautifully fortified temples that epitomize the architectural brilliance…',
      image:
        'https://control.routeonwheels.com/uploads/subcategories/3de2222f6582e3bdaca1df0814d630b5.png',
      badge: 'Spiritual',
    },
    {
      title: 'Adi Kailash By Road',
      description:
        "'Adi Kailash' is considered Lord Shiva's oldest abode. Among the five abodes of Shiva 'Adi Kailash' is situated at a…",
      image:
        'https://control.routeonwheels.com/uploads/subcategories/be9e6a1bce95c3a767dda1b4de28dd29.png',
      badge: 'Sacred',
    },
  ];

  blogs = [
    {
      title: 'Kurushetra – The land of the Bhagavad Gita',
      description:
        'For those who seek spirituality and timeless wisdom, the journey begins in Kurukshetra...',
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
        "Following the Sacred Footsteps Across India's Timeless Landscapes In Indian sacred Sanskrit epic – Ramayana...",
      image: 'https://control.routeonwheels.com/uploads/blogs/e16853ee2b42daf35c433a0c197b438f.png',
      date: '10 Dec',
    },
    {
      title: 'Motorbike tour of Uttarakhand – The Land of Mother Ganges',
      description:
        'Embark on an exhilarating motorbike adventure through the vibrant landscapes of Maharashtra!...',
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
        "The Harul Dance is an integral part of the Aunsari community's marriage celebrations, a vibrant tradition...",
      image: 'https://control.routeonwheels.com/uploads/blogs/6baa3087a6815bffbd8467c994fd7614.png',
      date: '15 Sep',
    },
  ];

  ngOnInit(): void {
    this.seoService.updateSeoTags({
      title: 'Route On Wheels | Explore Tours, Destinations & Travel Blogs',
      description:
        'Route On Wheels - Explore sustainable and mindful travel experiences across India. Discover spiritual journeys, eco-conscious tours, and transformative adventures.',
      ogUrl: 'https://routeonwheels.com/',
      canonicalUrl: 'https://routeonwheels.com/',
    });
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initAnimations();
      this.initCounters();
    }
  }

  private initAnimations(): void {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
        }
      });
    }, observerOptions);

    document.querySelectorAll('[data-aos]').forEach((el) => observer.observe(el));
  }

  private initCounters(): void {
    const counters = document.querySelectorAll('.stat-number[data-count]');

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const countTo = parseInt(target.dataset['count'] || '0', 10);
          let current = 0;
          const increment = countTo / 50;

          const updateCount = () => {
            current += increment;
            if (current < countTo) {
              target.textContent = Math.ceil(current).toString();
              requestAnimationFrame(updateCount);
            } else {
              target.textContent = countTo.toString();
            }
          };

          updateCount();
        }
      });
    };

    const counterObserver = new IntersectionObserver(observerCallback, { threshold: 0.5 });
    counters.forEach((counter) => counterObserver.observe(counter));
  }
}
