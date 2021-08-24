import { ProductDetailComponent } from './stores-list/product-detail/product-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QRCodeComponent } from './QR-code/QR-code.component';
import { StoresListComponent } from './stores-list/stores-list.component';

const routes: Routes = [
  { path: '', redirectTo:'/stores' , pathMatch: 'full'},
  { path: 'stores', component: StoresListComponent , children: [
    { path: ':id', component: StoresListComponent },

  ]
 },
 { path: 'QR', component: QRCodeComponent },
 { path: 'product', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
