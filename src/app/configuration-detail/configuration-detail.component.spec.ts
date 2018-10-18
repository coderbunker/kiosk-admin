import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationDetailComponent } from './configuration-detail.component';

describe('ConfigurationDetailComponent', () => {
  let component: ConfigurationDetailComponent;
  let fixture: ComponentFixture<ConfigurationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
