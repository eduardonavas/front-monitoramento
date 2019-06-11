import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDemandasComponent } from './table-demandas.component';

describe('TableDemandasComponent', () => {
  let component: TableDemandasComponent;
  let fixture: ComponentFixture<TableDemandasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDemandasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDemandasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
