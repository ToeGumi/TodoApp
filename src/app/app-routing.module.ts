import { NgModule } from '@angular/core';

// Routing
import { RouterModule, Routes } from '@angular/router';

// Components
import { ListComponent } from './pages/list/list.component';
import { CreateComponent } from './pages/create/create.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'create', component: CreateComponent }
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
