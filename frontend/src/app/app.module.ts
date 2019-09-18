import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { IndexComponent } from "./index/index.component";
import { MenuComponent } from "./menu/menu.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RedirectTargetComponent } from "./redirect-target/redirect-target.component";
import { Sub1Module } from "./sub1/sub1.module";
import { Sub2Module } from "./sub2/sub2.module";
import { FancyHeaderModule } from "./fancy-header/fancy-header.module";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MenuComponent,
    NotFoundComponent,
    RedirectTargetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Sub1Module,
    Sub2Module,
    FancyHeaderModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
