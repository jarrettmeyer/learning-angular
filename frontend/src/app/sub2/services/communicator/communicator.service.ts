import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CommunicatorService {
  private _clickCount: number = 0;

  constructor() {}

  get clickCount(): number {
    return this._clickCount;
  }

  increment(): void {
    this._clickCount += 1;
  }

  reset(): void {
    this._clickCount = 0;
  }
}
