import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialTableComponent } from './credential-table.component';

describe('CredentialTableComponent', () => {
  let component: CredentialTableComponent;
  let fixture: ComponentFixture<CredentialTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredentialTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredentialTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
