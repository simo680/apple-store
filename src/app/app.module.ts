import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ScrollGoodsComponent } from './components/main-page-components/scroll-goods/scroll-goods.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { WarrantyPageComponent } from './pages/warranty-page/warranty-page.component';
import { RefundPageComponent } from './pages/refund-page/refund-page.component';
import { CreditPageComponent } from './pages/credit-page/credit-page.component';
import { DeliveryPageComponent } from './pages/delivery-page/delivery-page.component';
import { ReviewPageComponent } from './pages/review-page/review-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { FavouritesPageComponent } from './pages/favourites-page/favourites-page.component';
import { AllCatalogPageComponent } from './pages/all-catalog-page/all-catalog-page.component';
import { GadgetItemComponent } from './components/gadget-item/gadget-item.component';
import { CustomCurrencyPipe } from './pipes/custom-currency/custom-currency.component';
import { GadgetListComponent } from './components/gadget-list/gadget-list.component';
import { BasketComponent as ModalBasketComponent } from './modals/basket/basket.component';
import { CallBackComponent as ModalCallbackComponent } from './modals/call-back/call-back.component';
import { ApplicationSendComponent } from './modals/application-send/application-send.component';
import { PriceLowerComponent } from './modals/price-lower/price-lower.component';
import { AdmissionComponent } from './modals/admission/admission.component';
import { ModalWindowComponent } from './UI/modal-window/modal-window.component';
import { BenefitsComponent } from './components/main-page-components/benefits/benefits.component';
import { DistributionComponent } from './components/main-page-components/distribution/distribution.component';
import { NewModelsComponent } from './components/main-page-components/new-models/new-models.component';
import { OneClickComponent } from './modals/one-click/one-click.component';
import { BasketSuccessComponent } from './modals/basket-success/basket-success.component';
import { BasketAddComponent } from './modals/basket-add/basket-add.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    ScrollGoodsComponent,
    NotFoundPageComponent,
    FooterComponent,
    WarrantyPageComponent,
    RefundPageComponent,
    CreditPageComponent,
    DeliveryPageComponent,
    ReviewPageComponent,
    ContactPageComponent,
    FavouritesPageComponent,
    AllCatalogPageComponent,
    BenefitsComponent,
    DistributionComponent,
    GadgetItemComponent,
    CustomCurrencyPipe,
    GadgetListComponent,
    ModalBasketComponent,
    ModalCallbackComponent,
    ApplicationSendComponent,
    PriceLowerComponent,
    AdmissionComponent,
    ModalWindowComponent,
    NewModelsComponent,
    OneClickComponent,
    BasketSuccessComponent,
    BasketAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
