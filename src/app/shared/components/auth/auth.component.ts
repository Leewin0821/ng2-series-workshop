import { Component, OnInit } from '@angular/core';
import {link} from 'fs'
import {AuthService} from '../../../shared/services/auth.service'
import {Router} from '@angular/router'
import {router} from '../../../../app/routes'

const linkTexts = {
    signIn : `Don't have an account?`,
    signUp: 'Already have an account?'
}

@Component({
    template: require('./auth.component.html'),
    styles: [require('./auth.component.css')]
})
export class AuthComponent implements OnInit {
    user: {
        email: string,
        password: string
    }

    mode: 'signIn' | 'signUp'
    linkText: string

    constructor(
        private authService: AuthService,
        private router: Router) { }

    ngOnInit() {
        this.user = {
            email: '',
            password: ''
        }
        this.mode = 'signIn'
        this.linkText = linkTexts.signIn
    }

    changeMode(): void {
        if (this.mode === 'signIn') {
            this.mode = 'signUp'
            this.linkText = linkTexts.signUp
        } else {
            this.mode = 'signIn'
            this.linkText = linkTexts.signIn
        }
    }

    authenticate(): void {
        this.authService.authenticated(this.mode, this.user).subscribe(
            () => this.router.navigate([`/`])
        )
    }
}