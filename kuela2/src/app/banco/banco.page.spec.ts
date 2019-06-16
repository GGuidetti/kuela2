import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoPage } from './banco.page';

describe('BancoPage', () => {
  let component: BancoPage;
  let fixture: ComponentFixture<BancoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BancoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BancoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
