import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AboutComponent } from './about/about.component';
import { WidComponent } from './wid/wid.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path: 'index', component: MainComponent
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'what-i-do', component: WidComponent
    },
    {
        path: 'works', component: WorksComponent
    },
    {
        path: 'works/:projectName', component: WorksComponent
    },
    {
        path: 'contact', component: ContactComponent
    },
    {
        path: '404', component: NotFoundPageComponent
    },
    {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '404',
        pathMatch: 'full'
    }
];
