import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarGestores } from './listar-gestores';

describe('ListarGestores', () => {
  let component: ListarGestores;
  let fixture: ComponentFixture<ListarGestores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarGestores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarGestores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
