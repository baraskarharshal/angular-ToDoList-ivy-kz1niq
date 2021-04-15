import { Component, OnInit, ViewChild } from "@angular/core";
import { CustomModalService } from "../custom-modal.service";
import { TodoListComponent } from "../todo-list/todo-list.component";

@Component({
  selector: "app-todolist-page",
  templateUrl: "./todolist-page.component.html",
  styleUrls: ["./todolist-page.component.css"]
})
export class TodolistPageComponent implements OnInit {
  @ViewChild(TodoListComponent, { static: true }) toDoList: TodoListComponent;
  title: string;
  description: string;

  constructor(private modalService: CustomModalService) {}

  ngOnInit() {}

  onClickAddItem() {
    this.title = "";
    this.description = "";
    this.openModal("add-modal");
  }

  addItem() {
    this.toDoList.list.push({
      id: this.getUniqueId(),
      title: this.title,
      description: this.description,
      date: new Date()
    });

    this.closeModal("add-modal");
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  getUniqueId() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
