import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedDetailsComponent } from './breed-details.component';

describe('BreedDetailsComponent', () => {
  let component: BreedDetailsComponent;
  let fixture: ComponentFixture<BreedDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreedDetailsComponent]
    });
    fixture = TestBed.createComponent(BreedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
