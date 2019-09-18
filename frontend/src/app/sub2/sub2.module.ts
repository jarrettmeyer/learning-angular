import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Comp1Component } from "./comp1/comp1.component";
import { Comp2Component } from "./comp2/comp2.component";
import { IndexComponent } from "./index/index.component";
import { Sub2RoutingModule } from "./sub2-routing.module";
import { Sub2Component } from "./sub2.component";

@NgModule({
  declarations: [Comp1Component, Comp2Component, IndexComponent, Sub2Component],
  imports: [CommonModule, Sub2RoutingModule],
  providers: []
})
export class Sub2Module {}
