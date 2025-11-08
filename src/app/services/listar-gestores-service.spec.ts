import { TestBed } from '@angular/core/testing';

import { ListarGestoresService } from './listar-gestores-service';

describe('ListarGestoresService', () => {
  let service: ListarGestoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarGestoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
