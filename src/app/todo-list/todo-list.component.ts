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

  ngOnInit() {
    this.list = [
      {
        title: "Buy Pizza on the way to work.",
        description: "Buy Pizza on the way to work.",
        date: new Date()
      },
      {
        title: "10AM Meeting",
        description: "10AM Meeting",
        date: new Date()
      }
    ];
  }
}
