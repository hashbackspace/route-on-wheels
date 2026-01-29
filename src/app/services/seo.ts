import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private meta = inject(Meta);
  private titleService = inject(Title);
  private document = inject(DOCUMENT);
  private platformId = inject(PLATFORM_ID);

  private defaultConfig: SeoConfig = {
    title: 'Route On Wheels | Explore Tours, Destinations & Travel Blogs',
    description:
      'Route On Wheels - Explore sustainable and mindful travel experiences across India. Discover spiritual journeys, eco-conscious tours, and transformative adventures.',
    keywords:
      'travel, India tours, spiritual journeys, eco-tourism, sustainable travel, motorcycle tours, pilgrimage, adventure travel',
    ogType: 'website',
    ogImage: 'https://routeonwheels.com/assets/images/og-image.jpg',
    twitterCard: 'summary_large_image',
  };

  updateSeoTags(config: Partial<SeoConfig>): void {
    const seoConfig = { ...this.defaultConfig, ...config };

    // Update title
    this.titleService.setTitle(seoConfig.title);

    // Update meta tags
    this.updateMetaTag('description', seoConfig.description);

    if (seoConfig.keywords) {
      this.updateMetaTag('keywords', seoConfig.keywords);
    }

    this.updateMetaTag('author', 'Route On Wheels');
    this.updateMetaTag('robots', 'index, follow');

    // Open Graph tags
    this.updateMetaTag('og:type', seoConfig.ogType || 'website', 'property');
    this.updateMetaTag('og:title', seoConfig.ogTitle || seoConfig.title, 'property');
    this.updateMetaTag(
      'og:description',
      seoConfig.ogDescription || seoConfig.description,
      'property',
    );
    this.updateMetaTag('og:url', seoConfig.ogUrl || 'https://routeonwheels.com/', 'property');

    if (seoConfig.ogImage) {
      this.updateMetaTag('og:image', seoConfig.ogImage, 'property');
    }

    // Twitter tags
    this.updateMetaTag('twitter:card', seoConfig.twitterCard || 'summary_large_image');
    this.updateMetaTag('twitter:title', seoConfig.twitterTitle || seoConfig.title);
    this.updateMetaTag(
      'twitter:description',
      seoConfig.twitterDescription || seoConfig.description,
    );

    if (seoConfig.twitterImage || seoConfig.ogImage) {
      this.updateMetaTag('twitter:image', seoConfig.twitterImage || seoConfig.ogImage || '');
    }

    // Canonical URL
    if (seoConfig.canonicalUrl) {
      this.updateCanonicalUrl(seoConfig.canonicalUrl);
    }

    // Structured Data
    if (seoConfig.structuredData) {
      this.updateStructuredData(seoConfig.structuredData);
    }
  }

  private updateMetaTag(
    name: string,
    content: string,
    attribute: 'name' | 'property' = 'name',
  ): void {
    const selector = attribute === 'property' ? `property='${name}'` : `name='${name}'`;

    if (this.meta.getTag(selector)) {
      this.meta.updateTag({ [attribute]: name, content });
    } else {
      this.meta.addTag({ [attribute]: name, content });
    }
  }

  private updateCanonicalUrl(url: string): void {
    if (isPlatformBrowser(this.platformId)) {
      let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');

      if (!link) {
        link = this.document.createElement('link');
        link.setAttribute('rel', 'canonical');
        this.document.head.appendChild(link);
      }

      link.setAttribute('href', url);
    }
  }

  private updateStructuredData(data: object): void {
    if (isPlatformBrowser(this.platformId)) {
      const existingScript = this.document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.remove();
      }

      const script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(data);
      this.document.head.appendChild(script);
    }
  }

  setDefaultStructuredData(): void {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'TravelAgency',
      name: 'Route On Wheels',
      description: 'Sustainable and mindful travel experiences across India',
      url: 'https://routeonwheels.com',
      telephone: '+91-9899175374',
      email: 'routeonwheels@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '5B-69, Kumhar Gali, Mayapuri Ajabpur Kalan',
        addressLocality: 'Dehradun',
        addressRegion: 'Uttarakhand',
        postalCode: '248001',
        addressCountry: 'IN',
      },
      founder: {
        '@type': 'Person',
        name: 'Vivek Rauthan',
      },
      sameAs: [
        'https://www.facebook.com/routeonwheels',
        'https://www.instagram.com/routeonwheels',
        'https://twitter.com/routeonwheels',
      ],
    };

    this.updateStructuredData(structuredData);
  }
}
