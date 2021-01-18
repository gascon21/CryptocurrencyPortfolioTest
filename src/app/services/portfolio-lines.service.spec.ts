import { TestBed } from '@angular/core/testing';

import { PortfolioLinesService } from './portfolio-lines.service';

describe('PortfolioLinesService', () => {
  let service: PortfolioLinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioLinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
