import {Component} from "@angular/core";
import {Notes} from "./notes";

@Component({
    template: require('./home.html'),
    directives: [Notes]
})
export class Home {
}
