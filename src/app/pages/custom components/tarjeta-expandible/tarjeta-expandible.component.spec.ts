import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaExpandibleComponent } from './tarjeta-expandible.component';

describe('TarjetaExpandibleComponent', () => {
  let component: TarjetaExpandibleComponent;
  let fixture: ComponentFixture<TarjetaExpandibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaExpandibleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaExpandibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
