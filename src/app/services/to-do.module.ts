import {NgModule} from '@angular/core';
import {toDoService} from './to-do.service';
@NgModule({})

export class ToDoModule {
  static forRoot(){
    return {
      ngModule: ToDoModule,
      providers: [toDoService]
    }
  }
}