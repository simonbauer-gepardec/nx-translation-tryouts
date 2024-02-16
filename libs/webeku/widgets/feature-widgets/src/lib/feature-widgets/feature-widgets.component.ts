import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiWidgetsComponent } from '@webeku/ui-widgets';

@Component({
  selector: 'webeku-widgets-feature-widgets',
  standalone: true,
  imports: [CommonModule, UiWidgetsComponent],
  templateUrl: './feature-widgets.component.html',
  styleUrl: './feature-widgets.component.scss',
})
export class FeatureWidgetsComponent {}
