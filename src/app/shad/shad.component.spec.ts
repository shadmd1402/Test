import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadComponent } from './shad.component';

describe('ShadComponent', () => {
  let component: ShadComponent;
  let fixture: ComponentFixture<ShadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
