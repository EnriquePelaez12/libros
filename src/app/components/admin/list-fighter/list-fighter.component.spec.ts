import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFighterComponent } from './list-fighter.component';

describe('ListFighterComponent', () => {
  let component: ListFighterComponent;
  let fixture: ComponentFixture<ListFighterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFighterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
