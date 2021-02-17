import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products = [
    { name: "ipone xr", discription: "it is an iphone", price: "750" },
    { name: "ipone xs", discription: "it is also an iphone", price: "950" },
    { name: "ipone mini", discription: "it is an iphone", price: "650" }
  ];

  constructor() {}

  ngOnInit() {}

  shared() {
    window.alert("product has been shared");
  }

  onNotify() {
    window.alert("you will be notified when the product is available");
  }
}
