import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {CatalogComponent} from "./pages/catalog/catalog.component";
// import {DeliveryComponent} from "./pages/delivery/delivery.component";
// import {ContactsComponent} from "./pages/contacts/contacts.component";
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";
import {CartComponent} from "./components/cart/cart.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'catalog', component: CatalogComponent },
  // { path: 'delivery', component: DeliveryComponent },
  // { path: 'contacts', component: ContactsComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: '' } // Redirect any unknown path to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
