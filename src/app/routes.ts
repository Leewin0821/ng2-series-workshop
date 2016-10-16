import {RouterConfig} from "@angular/router";
import {Home} from "./shared/components/home";
import {About} from "./shared/components/about";
import {AuthComponent} from "./shared/components/auth/auth.component";
import {MainComponent} from "./main/main.components";
import {AuthService} from "./shared/services/auth.service";

export const router: RouterConfig = [
    {
        path: '',
        component: MainComponent,
        canActivate: [AuthService],
        children: [
            {
                path: '',
                component: Home
            }, {
                path: 'about',
                component: About,
            }
        ]
    }, {
        path: 'auth',
        component: AuthComponent
    }, {
        path: '**',
        redirectTo: ''
    }
];
