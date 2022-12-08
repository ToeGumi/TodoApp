import { NgModule } from '@angular/core';

// Routing
import { RouterModule, Routes } from '@angular/router';

// Components
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ListComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
