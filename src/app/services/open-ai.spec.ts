import { TestBed } from '@angular/core/testing';

import { OpenAiService } from './open-ai.service';

describe('OpenAi', () => {
  let service: OpenAiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenAiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});