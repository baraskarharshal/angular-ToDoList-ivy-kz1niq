import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from "@angular/core";

import { CustomModalComponent } from "../custom-modal/custom-modal.component";
import { ToDoItem } from "../todo-item";

@Component({
  selector: "app-todo-list-item",
  templateUrl: "./todo-list-item.component.html",
  styleUrls: ["./todo-list-item.component.css"]
})
export class TodoListItemComponent implements OnInit {
  @ViewChild(CustomModalComponent, { static: false })
  editModal: CustomModalComponent;
  @Input() item: ToDoItem;
  @Output() edit: EventEmitter<ToDoItem> = new EventEmitter();
  @Output() delete: EventEmitter<ToDoItem> = new EventEmitter();

  title: string;
  description: string;

  constructor() {}

  ngOnInit() {}

  updateItem() {
    this.item.title = this.title;
    this.item.description = this.description;
    this.edit.emit(this.item);
    this.editModal.close();
  }
  onDeleteItem() {
    this.delete.emit(this.item);
  }

  onEditItem() {
    this.title = this.item.title;
    this.description = this.item.description;
    this.editModal.open();
  }
}
