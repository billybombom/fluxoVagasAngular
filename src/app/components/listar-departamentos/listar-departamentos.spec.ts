import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDepartamentos } from './listar-departamentos';

describe('ListarDepartamentos', () => {
  let component: ListarDepartamentos;
  let fixture: ComponentFixture<ListarDepartamentos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarDepartamentos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarDepartamentos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
