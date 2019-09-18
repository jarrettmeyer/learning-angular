import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./index/index.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RedirectTargetComponent } from "./redirect-target/redirect-target.component";

const routes: Routes = [
  { path: "", component: IndexComponent },
  {
    path: "fancy-header",
    loadChildren: () =>
      import("./fancy-header/fancy-header.module").then(
        (m) => m.FancyHeaderModule
      )
  },
  { path: "redirect", redirectTo: "redirect-target" },
  { path: "redirect-target", component: RedirectTargetComponent },
  {
    path: "sub1",
    loadChildren: () => import("./sub1/sub1.module").then((m) => m.Sub1Module)
  },
  {
    path: "sub2",
    loadChildren: () => import("./sub2/sub2.module").then((m) => m.Sub2Module)
  },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
