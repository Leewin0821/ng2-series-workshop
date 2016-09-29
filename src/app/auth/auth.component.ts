import { Component, OnInit } from '@angular/core';
import {link} from 'fs'

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

    constructor() { }

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
}