import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionExamenesComponent } from './inscripcion-examenes.component';

describe('InscripcionExamenesComponent', () => {
  let component: InscripcionExamenesComponent;
  let fixture: ComponentFixture<InscripcionExamenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscripcionExamenesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscripcionExamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
