import { NgModule } from '@angular/core';

// Routing
import { RouterModule, Routes } from '@angular/router';

// Components
import { ListComponent } from './pages/list/list.component';
import { CreateComponent } from './pages/create/create.component';
import { UpdateComponent } from './pages/update/update.component';
import { UpdateGuardService } from './guard/update-guard.service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'create', component: CreateComponent },
  { path: 'update/:id?', component: UpdateComponent, canActivate: [UpdateGuardService] }
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
