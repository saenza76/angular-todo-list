import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CreateItemFormComponent } from './create-item-form/create-item-form.component';
import { ItemsToDoComponent } from './items-to-do/items-to-do.component';
import { ItemsDoneComponent } from './items-done/items-done.component';
import { ToDoModule } from './services/to-do.module';

@NgModule({
  declarations: [
    AppComponent,
    CreateItemFormComponent,
    ItemsToDoComponent,
    ItemsDoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ToDoModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
