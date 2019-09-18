import { Component, OnInit } from "@angular/core";
import { CommunicatorService } from "../communicator.service";

@Component({
  selector: "app-comp2",
  templateUrl: "./comp2.component.html",
  styleUrls: ["./comp2.component.scss"]
})
export class Comp2Component implements OnInit {
  private _communicator: CommunicatorService;

  constructor(communicator: CommunicatorService) {
    this._communicator = communicator;
  }

  get clickCount(): number {
    return this._communicator.clickCount;
  }

  ngOnInit() {}
}
