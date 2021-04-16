import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewEncapsulation
} from "@angular/core";

@Component({
  selector: "app-custom-modal",
  templateUrl: "./custom-modal.component.html",
  styleUrls: ["./custom-modal.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class CustomModalComponent implements OnInit {
  @Input() id: string;
  private element: any;

  constructor(private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    // ensure id attribute exists
    if (!this.id) {
      console.error("modal must have an id");
      return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener("click", el => {
      if (el.target.className === "custom-modal") {
        this.close();
      }
    });
  }

  // remove self from modal service when component is destroyed
  ngOnDestroy(): void {
    this.element.remove();
  }

  // open modal
  open(): void {
    this.element.style.display = "block";
    document.body.classList.add("custom-modal-open");
  }

  // close modal
  close(): void {
    this.element.style.display = "none";
    document.body.classList.remove("custom-modal-open");
  }
}
