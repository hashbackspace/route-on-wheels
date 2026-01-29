import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../services/seo';

@Component({
  selector: 'app-tours',
  imports: [CommonModule, RouterLink],
  templateUrl: './tours.html',
  styleUrl: './tours.scss',
})
export class Tours implements OnInit {
  private seoService = inject(SeoService);

  lifeChangingTours = [
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

  wisdomSeekerTours = [
    {
      title: 'Janusar Bawar Vilage Tour',
      description: 'Janusar Bawar Vilage Tour',
      image:
        'https://control.routeonwheels.com/uploads/subcategories/4431a56e1ed01c82c4f40a2cccbe3eb1.png',
    },
    {
      title: 'A Road To The Great Rann Of Kutch',
      description: 'The Kutch landscape is unexplored, unmatched and absolutely unbelievable!',
      image:
        'https://control.routeonwheels.com/uploads/subcategories/dbe2f31867375ef103be883acd0d38a5.png',
    },
    {
      title: 'A Journery To Seeing The Unseen Of Maharashtra',
      description: 'Mubai is not the only place here, just so you know...!',
      image:
        'https://control.routeonwheels.com/uploads/subcategories/84843b9a12c44c29b1dd6e92327980f2.png',
    },
  ];

  rsTours = [
    {
      title: 'Adi Kailash By Road',
      description:
        "'Adi Kailash' is considered Lord Shiva's oldest abode. Among the five abodes of Shiva 'Adi Kailash' is situated at a…",
      image:
        'https://control.routeonwheels.com/uploads/subcategories/be9e6a1bce95c3a767dda1b4de28dd29.png',
    },
    {
      title: 'Telangana & Andhra Pradesh Through Temple Tour',
      description:
        'Andhra Pradesh and Telangana are well known among spiritual travelers for their beautifully fortified temples that epitomize the architectural brilliance…',
      image:
        'https://control.routeonwheels.com/uploads/subcategories/3de2222f6582e3bdaca1df0814d630b5.png',
    },
    {
      title: 'A Journery To Seeing The Unseen Of Maharashtra',
      description:
        "Maharashtra is not all about Mumbai & Pune, there is more to offer you which are untouched and unknown… it's…",
      image:
        'https://control.routeonwheels.com/uploads/subcategories/84843b9a12c44c29b1dd6e92327980f2.png',
    },
    {
      title: 'A Road To The Great Rann Of Kutch',
      description:
        'This journey will take you through a motley mix of landscapes. There are the endless miles of scrubland that offer…',
      image:
        'https://control.routeonwheels.com/uploads/subcategories/dbe2f31867375ef103be883acd0d38a5.png',
    },
    {
      title: 'Janusar Bawar Vilage Tour',
      description:
        'Village tour to India takes the tourist up-close to the indigenous cultures that are radiant for so many years. Community…',
      image:
        'https://control.routeonwheels.com/uploads/subcategories/4431a56e1ed01c82c4f40a2cccbe3eb1.png',
    },
  ];

  ngOnInit(): void {
    this.seoService.updateSeoTags({
      title: 'Tours | Route On Wheels',
      description:
        'Explore our life-changing travel experiences across India. Discover spiritual journeys, eco-conscious tours, and transformative adventures.',
      keywords: 'India tours, spiritual tours, eco-tourism, adventure travel, pilgrimage tours',
      ogUrl: 'https://routeonwheels.com/tours',
      canonicalUrl: 'https://routeonwheels.com/tours',
    });
  }
}
