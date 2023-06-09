import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatcherrorComponent } from './catcherror.component';

describe('CatcherrorComponent', () => {
  let component: CatcherrorComponent;
  let fixture: ComponentFixture<CatcherrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatcherrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatcherrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
