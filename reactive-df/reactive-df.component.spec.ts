import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveDfComponent } from './reactive-df.component';

describe('ReactiveDfComponent', () => {
  let component: ReactiveDfComponent;
  let fixture: ComponentFixture<ReactiveDfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveDfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveDfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
