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
    value: 'n',
    color: 'white'
  },
  {
    title: 't1',
    value: 'n1',
    color: 'white'
  },
  {
    title: 't2',
    value: 'n2',
    color: 'white'
  }]

  checkCard(note, i) {
    this.notes.splice(i, 1)
  }

  addNote(note) {
    this.notes.push(note);
  }
}
