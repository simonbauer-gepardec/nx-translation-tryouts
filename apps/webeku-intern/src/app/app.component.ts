import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FeatureDashboardComponent } from '@webeku/feature-dashboard';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { take, tap } from 'rxjs';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    FeatureDashboardComponent,
    TranslateModule,
  ],
  selector: 'webeku-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'webeku-intern';

  constructor(private translate: TranslateService) {
    translate.setTranslation('de', {
      app: {
        hello: 'Hallo Appikation',
      },
    });

    translate.setTranslation('en', {
      app: {
        hello: 'hello app',
      },
    });
  }

  switchLanguage(lang: string) {
    this.translate
      .use(lang)
      .pipe(tap({ next: () => console.log('switched to', lang) }), take(1))
      .subscribe();
  }
}
