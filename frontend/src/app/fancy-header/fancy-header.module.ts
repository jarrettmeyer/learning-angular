import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FancyHeaderComponent } from "./fancy-header.component";
import { FancyHeaderRoutingModule } from "./fancy-header-routing.module";
import { HeaderComponent } from "./header/header.component";
import { IndexComponent } from "./index/index.component";

@NgModule({
  declarations: [FancyHeaderComponent, HeaderComponent, IndexComponent],
  imports: [CommonModule, FancyHeaderRoutingModule],
  bootstrap: [FancyHeaderComponent]
})
export class FancyHeaderModule {}
