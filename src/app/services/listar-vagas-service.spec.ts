import { TestBed } from '@angular/core/testing';

import { ListarVagasService } from './listar-vagas-service';

describe('ListarVagasService', () => {
  let service: ListarVagasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarVagasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
