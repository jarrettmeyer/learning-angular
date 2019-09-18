import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { IndexComponent } from "./index/index.component";
import { MenuComponent } from "./menu/menu.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RedirectTargetComponent } from "./redirect-target/redirect-target.component";
import { Sub1Component } from "./sub1/sub1.component";
import { Sub2Component } from "./sub2/sub2.component";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MenuComponent,
    NotFoundComponent,
    RedirectTargetComponent,
    Sub1Component,
    Sub2Component
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
