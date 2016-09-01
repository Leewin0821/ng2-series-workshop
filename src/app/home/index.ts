import {Component} from "@angular/core";
import {Appbar} from "./app-bar"
import {Notes} from "./notes"

@Component({
  selector: 'home',
  template: require('./home.html'),
  directives: [Appbar, Notes]
})
export class Home{}
