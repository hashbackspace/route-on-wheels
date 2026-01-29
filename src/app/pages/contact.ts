import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SeoService } from '../services/seo';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit {
  private seoService = inject(SeoService);

  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };

  ngOnInit(): void {
    this.seoService.updateSeoTags({
      title: 'Contact Us | Route On Wheels',
      description:
        'Get in touch with Route On Wheels for tour bookings and inquiries. Located in Dehradun, Uttarakhand. Call +91-9899175374.',
      keywords:
        'contact Route On Wheels, travel booking, India tour inquiry, Dehradun travel agency',
      ogUrl: 'https://routeonwheels.com/contact',
      canonicalUrl: 'https://routeonwheels.com/contact',
    });
  }

  onSubmit(): void {
    console.log('Form submitted:', this.formData);
    // Handle form submission
  }
}
