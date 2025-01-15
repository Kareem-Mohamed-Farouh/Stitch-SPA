import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadgatComponent } from './padgat.component';

describe('PadgatComponent', () => {
  let component: PadgatComponent;
  let fixture: ComponentFixture<PadgatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PadgatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadgatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
