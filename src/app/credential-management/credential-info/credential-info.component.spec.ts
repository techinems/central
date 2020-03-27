import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialInfoComponent } from './credential-info.component';

describe('CredentialInfoComponent', () => {
  let component: CredentialInfoComponent;
  let fixture: ComponentFixture<CredentialInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredentialInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredentialInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
