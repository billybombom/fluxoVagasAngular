import { TestBed } from '@angular/core/testing';

import { ListarDepartamentosService } from './listar-departamentos-service';

describe('ListarDepartamentosService', () => {
  let service: ListarDepartamentosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarDepartamentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
