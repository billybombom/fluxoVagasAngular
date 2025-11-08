import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarGestores } from './criar-gestores';

describe('CriarGestores', () => {
  let component: CriarGestores;
  let fixture: ComponentFixture<CriarGestores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarGestores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarGestores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
