import {Component} from "@angular/core";
import {NoteCard} from './note-card';
import {NoteCreator} from './note-creator'

@Component({
  selector: 'notes',
  template: require('./notes.html'),
  styles: [require('./notes.css')],
  directives: [NoteCard, NoteCreator]
})

export class Notes{
  notes = [{
    title: 't',
    value: 'n'
  },
  {
    title: 't1',
    value: 'n1'
  },
  {
    title: 't2',
    value: 'n2'
  }]

  checkCard(note, i) {
    this.notes.splice(i, 1)
  }

  addNote(note) {
    this.notes.push(note);
  }
}
