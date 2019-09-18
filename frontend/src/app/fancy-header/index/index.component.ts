import { Component, OnInit } from "@angular/core";
import { HeaderService } from "../services/header/header.service";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent implements OnInit {
  private _header: HeaderService;

  constructor(header: HeaderService) {
    this._header = header;
  }

  ngOnInit() {
    this._header.title = "Index";
    this._header.background = "solid";
  }
}
