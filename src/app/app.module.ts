import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { ListComponent } from './pages/list/list.component';
import { ButtonComponent } from './components/button/button.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { TodoComponent } from './components/todo/todo.component';
import { CheckedCompletePipe } from './pages/list/checked-complete.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ButtonComponent,
    TextFieldComponent,
    DashboardComponent,
    TodoComponent,
    CheckedCompletePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
