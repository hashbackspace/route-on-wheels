import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header';
import { Footer } from './shared/footer';
import { SeoService } from './services/seo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.setDefaultStructuredData();
  }
}
