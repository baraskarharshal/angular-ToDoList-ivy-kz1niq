import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CustomModalService } from "../custom-modal.service";
import { ToDoItem } from "../todo-item";

@Component({
  selector: "app-todo-list-item",
  templateUrl: "./todo-list-item.component.html",
  styleUrls: ["./todo-list-item.component.css"]
})
export class TodoListItemComponent implements OnInit {
  @Input() item: ToDoItem;
  @Output() edit: EventEmitter<ToDoItem> = new EventEmitter();
  @Output() delete: EventEmitter<ToDoItem> = new EventEmitter();

  title: string;
  description: string;

  constructor(private modalService: CustomModalService) {}

  ngOnInit() {}

  updateItem() {
    this.item.title = this.title;
    this.item.description = this.description;
    this.edit.emit(this.item);
    this.closeModal("edit-modal");
  }
  onDeleteItem() {
    this.delete.emit(this.item);
  }

  onEditItem() {
    this.title = this.item.title;
    this.description = this.item.description;
    console.log(this.item);
    setTimeout(() => {
      this.openModal("edit-modal");
    }, 100);
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
