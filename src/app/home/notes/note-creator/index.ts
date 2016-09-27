import {Component, Output, EventEmitter} from "@angular/core";
import {isEmpty} from "lodash";
import {ColorPicker} from "./color-picker";

@Component({
    selector: 'note-creator',
    template: require('./note-creator.html'),
    styles: [require('./note-creator.css')],
    directives: [ColorPicker]
})
export class NoteCreator {
    pickedColor: String = 'white';
    isFocus: boolean = false;
    newNote = {
        title: '',
        value: '',
        color: 'white'
    };

    @Output()
    onCreateNote = new EventEmitter();

    createNote() {
        const {title, value, color} = this.newNote;

        if (isEmpty(title) || isEmpty(value)) {
            return false;
        }

        this.onCreateNote.emit({title, value, color});

        this.newNote = {title: '', value: '', color: 'white'};
        this.pickedColor = 'white';
        return false;
    }

    pickColor(color) {
        this.pickedColor = color;
        this.newNote.color = color;
    }
}
