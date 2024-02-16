import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureWidgetsComponent } from './feature-widgets.component';

describe('FeatureWidgetsComponent', () => {
  let component: FeatureWidgetsComponent;
  let fixture: ComponentFixture<FeatureWidgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureWidgetsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
