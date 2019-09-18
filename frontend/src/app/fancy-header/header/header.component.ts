import { Component, OnInit } from "@angular/core";
import { HeaderService } from "../services/header/header.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  private _header: HeaderService;

  constructor(header: HeaderService) {
    this._header = header;
  }

  get background(): "solid" | "transparent" {
    return this._header.background;
  }

  get title(): string {
    return this._header.title || "";
  }

  ngOnInit() {}
}
