import {Component, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'note-creator',
  template: require('./note-creator.html'),
  styles: [require('./note-creator.css')]
})
export class NoteCreator{
  @Output()
  onCreateNote = new EventEmitter();

  newNote = {
    title: '',
    value: ''
  }
  createNote() {
    const {title, value} = this.newNote;
    this.onCreateNote.emit({title, value});
    return false;
  }
}
