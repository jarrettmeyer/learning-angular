import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HeaderService {
  background: "solid" | "transparent" = "solid";
  title?: string;

  constructor() {}
}
