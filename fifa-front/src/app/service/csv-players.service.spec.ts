import { TestBed } from '@angular/core/testing';

import { CsvPlayersService } from './csv-players.service';

describe('CsvPlayersService', () => {
  let service: CsvPlayersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CsvPlayersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
