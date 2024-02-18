import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FeatureDashboardComponent } from '@webeku/feature-dashboard';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { take, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    FeatureDashboardComponent,
    TranslateModule,
    AsyncPipe,
  ],
  selector: 'webeku-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'webeku-intern';

  translationLoaded$ = this.translate.use(this.translate.getDefaultLang());
  constructor(private translate: TranslateService) {}

  switchLanguage(lang: string) {
    this.translate
      .use(lang)
      .pipe(tap({ next: () => console.log('switched to', lang) }), take(1))
      .subscribe();
  }
}
