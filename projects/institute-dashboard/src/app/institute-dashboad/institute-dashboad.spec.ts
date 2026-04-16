import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteDashboad } from './institute-dashboad';

describe('InstituteDashboad', () => {
  let component: InstituteDashboad;
  let fixture: ComponentFixture<InstituteDashboad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstituteDashboad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstituteDashboad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
