import {Component} from "@angular/core";
import {NoteCard} from './note-card'

@Component({
  selector: 'notes',
  template: require('./notes.html'),
  styles: [require('./notes.css')],
  directives: [NoteCard]
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
}
