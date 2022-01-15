import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeCaptureComponent } from './poke-capture.component';

describe('PokeCaptureComponent', () => {
  let component: PokeCaptureComponent;
  let fixture: ComponentFixture<PokeCaptureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeCaptureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeCaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
