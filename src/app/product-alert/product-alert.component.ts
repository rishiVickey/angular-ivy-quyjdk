import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-alert",
  templateUrl: "./product-alert.component.html",
  styleUrls: ["./product-alert.component.css"]
})
export class ProductAlertComponent implements OnInit {
  @Input() products;
  @Output() notifyme: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  notify() {
    this.notifyme.emit();
  }
}
