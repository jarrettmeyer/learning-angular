import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectTargetComponent } from './redirect-target.component';

describe('RedirectTargetComponent', () => {
  let component: RedirectTargetComponent;
  let fixture: ComponentFixture<RedirectTargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectTargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
