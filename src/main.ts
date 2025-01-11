import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config'; // Import your appConfig
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  ...appConfig, // Spread appConfig to include its settings
  providers: [
    ...appConfig.providers, // Spread any existing providers from appConfig
    importProvidersFrom(BrowserAnimationsModule) // Add BrowserAnimationsModule
  ]
}).catch(err => console.error(err));
