import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryScreenComponent } from './components/inventory-screen/inventory-screen.component';
import { InventoryTooltipComponent } from './components/inventory-tooltip/inventory-tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryScreenComponent,
    InventoryTooltipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
