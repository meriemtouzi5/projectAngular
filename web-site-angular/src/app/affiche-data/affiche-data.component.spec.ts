import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheDataComponent } from './affiche-data.component';

describe('AfficheDataComponent', () => {
  let component: AfficheDataComponent;
  let fixture: ComponentFixture<AfficheDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
