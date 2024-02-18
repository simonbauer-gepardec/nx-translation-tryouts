import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiWidgetsComponent } from '@webeku/ui-widgets';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'webeku-widgets-feature-widgets',
  standalone: true,
  imports: [CommonModule, UiWidgetsComponent, TranslocoPipe],
  templateUrl: './feature-widgets.component.html',
  styleUrl: './feature-widgets.component.scss',
})
export class FeatureWidgetsComponent implements OnInit {
  translocoService = inject(TranslocoService);

  readonly deTranslations = {
    widget: {
      hello: 'Hallo widget',
    },
  };

  readonly enTranslations = {
    widget: {
      hello: 'hello widget',
    },
  };

  ngOnInit(): void {
    this.translocoService.setTranslation(this.deTranslations, 'de', {
      merge: true,
    });

    this.translocoService.setTranslation(this.enTranslations, 'en', {
      merge: true,
    });
  }
}
