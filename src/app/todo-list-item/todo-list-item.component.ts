import { Component, Input, OnInit } from "@angular/core";
import { ToDoItem } from "../todo-item";

@Component({
  selector: "app-todo-list-item",
  templateUrl: "./todo-list-item.component.html",
  styleUrls: ["./todo-list-item.component.css"]
})
export class TodoListItemComponent implements OnInit {
  @Input() item: ToDoItem;

  constructor() {}

  ngOnInit() {}
}
