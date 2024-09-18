import { Routes } from '@angular/router';
import {ElementsListComponent} from "./features/elements/elements-list/elements-list.component";



export const routes: Routes = [
  {
    path: 'elements',
    component: ElementsListComponent
  },
  {
    path: '**',
    redirectTo: 'elements'
  }
];


