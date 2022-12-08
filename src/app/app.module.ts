import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Forms
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//Routing
import { AppRoutingModule } from './app-routing.module';

//Pipes
import { CheckedCompletePipe } from './pages/list/checked-complete.pipe';

// Components
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { TodoComponent } from './components/todo/todo.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListComponent } from './pages/list/list.component';
import { CreateComponent } from './pages/create/create.component';
import { UpdateComponent } from './pages/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ButtonComponent,
    TextFieldComponent,
    DashboardComponent,
    TodoComponent,
    CheckedCompletePipe,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
