import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./index/index.component";
import { Viz1Component } from "./viz1/viz1.component";

const routes: Routes = [
  { path: "", component: IndexComponent, pathMatch: "full" },
  { path: "viz1", component: Viz1Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sub1RoutingModule {}
