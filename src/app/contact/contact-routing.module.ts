import { NgModule } from '@angular/core';
import { ContactComponent } from './components/contact.component';

import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent
  },
]


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ContactRouterModule { }
