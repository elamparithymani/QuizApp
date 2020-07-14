import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomecompComponent } from './welcomecomp.component';

describe('WelcomecompComponent', () => {
  let component: WelcomecompComponent;
  let fixture: ComponentFixture<WelcomecompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomecompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
