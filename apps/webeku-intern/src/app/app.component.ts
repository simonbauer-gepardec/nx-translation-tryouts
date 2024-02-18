import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FeatureDashboardComponent } from '@webeku/feature-dashboard';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    FeatureDashboardComponent,
    TranslocoPipe,
  ],
  selector: 'webeku-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  translocoService = inject(TranslocoService);
  switchLanguage(lang: string) {
    if (this.translocoService.getAvailableLangs().find((l) => l === lang)) {
      this.translocoService.setActiveLang(lang);
    }
    console.log('switched to', lang);
  }

  title = 'webeku-intern';
}
