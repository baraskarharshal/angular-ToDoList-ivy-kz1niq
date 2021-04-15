import { Component, OnInit } from "@angular/core";
import { CustomModalService } from "../custom-modal.service";

@Component({
  selector: "app-todolist-page",
  templateUrl: "./todolist-page.component.html",
  styleUrls: ["./todolist-page.component.css"]
})
export class TodolistPageComponent implements OnInit {
  constructor(private modalService: CustomModalService) {}

  ngOnInit() {}

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
