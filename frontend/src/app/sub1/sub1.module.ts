import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IndexComponent } from "./index/index.component";
import { Sub1Component } from "./sub1.component";
import { Sub1RoutingModule } from "./sub1-routing.module";
import { Viz1Component } from "./viz1/viz1.component";

@NgModule({
  declarations: [IndexComponent, Sub1Component, Viz1Component],
  imports: [CommonModule, Sub1RoutingModule]
})
export class Sub1Module {}
