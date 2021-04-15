import { Component, OnInit } from "@angular/core";
import { ToDoItem } from "../todo-item";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit {
  list: ToDoItem[] = [];

  constructor() {}

  ngOnInit() {}

  onEditItem(item: ToDoItem) {
    this.list.forEach(itm => {
      if (itm.id === item.id) {
        itm.title = item.title;
        itm.description = item.description;
      }
    });
  }

  onDeleteItem(item: ToDoItem) {
    this.list = this.list.filter(itm => itm.id !== item.id);
  }
}
