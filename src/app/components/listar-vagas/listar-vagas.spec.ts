import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVagas } from './listar-vagas';

describe('ListarVagas', () => {
  let component: ListarVagas;
  let fixture: ComponentFixture<ListarVagas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarVagas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarVagas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
