import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FeatureDashboardComponent } from '@webeku/feature-dashboard';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, FeatureDashboardComponent],
  selector: 'webeku-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  switchLanguage(lang: string) {

  }

  title = 'webeku-intern';
}
