import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CatalogComponent,
    DeliveryComponent,
    ContactsComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
