import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Sub2RoutingModule } from "./sub2-routing.module";
import { IndexComponent } from "./index/index.component";

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, Sub2RoutingModule]
})
export class Sub2Module {}
