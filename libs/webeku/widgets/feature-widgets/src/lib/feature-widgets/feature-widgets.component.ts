import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiWidgetsComponent } from '@webeku/ui-widgets';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'webeku-widgets-feature-widgets',
  standalone: true,
  imports: [CommonModule, UiWidgetsComponent, TranslateModule],
  templateUrl: './feature-widgets.component.html',
  styleUrl: './feature-widgets.component.scss',
})
export class FeatureWidgetsComponent implements OnInit {
  translate = inject(TranslateService);

  ngOnInit(): void {
    this.translate.setTranslation(
      'de',
      {
        widgets: {
          hello: 'Hallo Widgets',
        },
      },
      true
    );

    this.translate.setTranslation(
      'en',
      {
        widgets: {
          hello: 'hello widgets',
        },
      },
      true
    );
  }
}
