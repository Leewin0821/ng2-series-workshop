import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {AuthService} from '../../../../shared/services/auth.service'

@Component({
  selector: 'app-bar',
  directives: [...ROUTER_DIRECTIVES],
  template: require('./app-bar.html'),
  styles: [require('./app-bar.css')]
})
export class AppBar{
  constructor(private authService: AuthService) {}

  onSignOut(): void {
    this.authService.signOut();
  }
}
