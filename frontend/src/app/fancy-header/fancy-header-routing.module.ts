import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./index/index.component";
import { FancyHeaderComponent } from "./fancy-header.component";

const routes: Routes = [
  {
    path: "",
    component: FancyHeaderComponent,
    children: [{ path: "", component: IndexComponent, pathMatch: "full" }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FancyHeaderRoutingModule {}
