import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteResult } from './note-result';

describe('NoteResult', () => {
  let component: NoteResult;
  let fixture: ComponentFixture<NoteResult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteResult]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteResult);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
