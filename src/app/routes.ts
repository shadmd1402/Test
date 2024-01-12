import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ShadComponent } from './shad/shad.component';
const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'details/:id/:name',
    component: DetailsComponent,
    title: 'Home details'
  },
  {
    path: 'infoPage'/*:email'*/,
    component: ShadComponent,
    title: 'Info Page'
  }
];

export default routeConfig;
