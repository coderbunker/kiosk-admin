import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassphraseDialogComponent } from './passphrase-dialog.component';

describe('PassphraseDialogComponent', () => {
  let component: PassphraseDialogComponent;
  let fixture: ComponentFixture<PassphraseDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassphraseDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassphraseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
