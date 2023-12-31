import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdComponent } from './std.component';

describe('StdComponent', () => {
  let component: StdComponent;
  let fixture: ComponentFixture<StdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
