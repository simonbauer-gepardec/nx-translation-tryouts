import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureWidgetsComponent } from '@webeku/widgets';

@Component({
  selector: 'webeku-feature-dashboard-feature-dashboard',
  standalone: true,
  imports: [CommonModule, FeatureWidgetsComponent],
  templateUrl: './feature-dashboard.component.html',
  styleUrl: './feature-dashboard.component.scss',
})
export class FeatureDashboardComponent {}
