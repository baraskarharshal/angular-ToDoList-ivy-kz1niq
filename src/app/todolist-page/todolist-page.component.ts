import { Component, OnInit, ViewChild } from "@angular/core";
import { CustomModalComponent } from "../custom-modal/custom-modal.component";
import { TodoListComponent } from "../todo-list/todo-list.component";

@Component({
  selector: "app-todolist-page",
  templateUrl: "./todolist-page.component.html",
  styleUrls: ["./todolist-page.component.css"]
})
export class TodolistPageComponent implements OnInit {
  @ViewChild(TodoListComponent, { static: false }) toDoList: TodoListComponent;
  @ViewChild(CustomModalComponent, { static: false })
  addModal: CustomModalComponent;
  title: string;
  description: string;

  constructor() {}

  ngOnInit() {}

  onClickAddItem() {
    this.title = "";
    this.description = "";
    this.addModal.open();
  }

  addItem() {
    this.toDoList.list.push({
      id: this.getUniqueId(),
      title: this.title,
      description: this.description,
      date: new Date()
    });

    this.addModal.close();
  }

  getUniqueId() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
