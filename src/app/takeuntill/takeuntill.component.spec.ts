import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeuntillComponent } from './takeuntill.component';

describe('TakeuntillComponent', () => {
  let component: TakeuntillComponent;
  let fixture: ComponentFixture<TakeuntillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeuntillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeuntillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
