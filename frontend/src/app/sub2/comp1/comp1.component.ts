import { Component, OnInit } from "@angular/core";
import { CommunicatorService } from "../services/communicator/communicator.service";

@Component({
  selector: "app-comp1",
  templateUrl: "./comp1.component.html",
  styleUrls: ["./comp1.component.scss"]
})
export class Comp1Component implements OnInit {
  private _communicator: CommunicatorService;

  constructor(communicator: CommunicatorService) {
    this._communicator = communicator;
  }

  get clickCount(): number {
    return this._communicator.clickCount;
  }

  onIncrement(): void {
    this._communicator.increment();
  }

  onReset(): void {
    this._communicator.reset();
  }

  ngOnInit(): void {}
}
