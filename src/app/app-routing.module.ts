import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryScreenComponent } from './components/inventory-screen/inventory-screen.component';

const routes: Routes = [
  {path: "inventory", component: InventoryScreenComponent},
  {path: "", redirectTo: "/inventory", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
