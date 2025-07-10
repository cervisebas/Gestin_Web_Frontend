import { ComponentFixture, TestBed } from '@angular/core/testing';
import { profileComponent } from './profile.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('profileComponent', () => {
  let component: profileComponent;
  let fixture: ComponentFixture<profileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [profileComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(profileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});