import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarDepartamentos } from './criar-departamentos';

describe('CriarDepartamentos', () => {
  let component: CriarDepartamentos;
  let fixture: ComponentFixture<CriarDepartamentos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarDepartamentos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarDepartamentos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
