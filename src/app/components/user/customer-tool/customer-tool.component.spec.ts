import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerToolComponent } from './customer-tool.component';

describe('CustomerToolComponent', () => {
  let component: CustomerToolComponent;
  let fixture: ComponentFixture<CustomerToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
