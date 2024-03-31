import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodycomponentComponent } from './bodycomponent.component';

describe('BodycomponentComponent', () => {
  let component: BodycomponentComponent;
  let fixture: ComponentFixture<BodycomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodycomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
