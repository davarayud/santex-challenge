import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOnePlayerComponent } from './card-player.component';

describe('ShowOnePlayerComponent', () => {
  let component: ShowOnePlayerComponent;
  let fixture: ComponentFixture<ShowOnePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowOnePlayerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowOnePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
