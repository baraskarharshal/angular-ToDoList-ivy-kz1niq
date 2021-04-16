import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { TodolistPageComponent } from "./todolist-page/todolist-page.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoListItemComponent } from "./todo-list-item/todo-list-item.component";
import { CustomModalComponent } from "./custom-modal/custom-modal.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    TodolistPageComponent,
    TodoListComponent,
    TodoListItemComponent,
    CustomModalComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
