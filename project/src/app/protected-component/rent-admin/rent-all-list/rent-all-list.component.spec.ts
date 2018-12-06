import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentAllListComponent } from './rent-all-list.component';

describe('RentAllListComponent', () => {
  let component: RentAllListComponent;
  let fixture: ComponentFixture<RentAllListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentAllListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentAllListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
