import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteListComponent } from './note-list.component';

describe('NoteList', () => {
  let component: NoteListComponent;
  let fixture: ComponentFixture<NoteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
