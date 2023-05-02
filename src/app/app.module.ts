import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Add this import
import { ReactiveFormsModule } from '@angular/forms'; // Add this import

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { MenuAdminComponent } from './backOffice/menu-admin/menu-admin.component';
import { NavbarAdminComponent } from './backOffice/navbar-admin/navbar-admin.component';
import { FooterAdminComponent } from './backOffice/footer-admin/footer-admin.component';
import { NavbarUserComponent } from './frontOffice/navbar-user/navbar-user.component';
import { BannerUserComponent } from './frontOffice/banner-user/banner-user.component';
import { FooterUserComponent } from './frontOffice/footer-user/footer-user.component';
import { RegisterBuyerAdminComponent } from './backOffice/register-buyer-admin/register-buyer-admin.component';
import {HttpClientModule} from "@angular/common/http";
import { RegisterVendorAdminComponent } from './backOffice/register-vendor-admin/register-vendor-admin.component';
import { RegisterProviderAdminComponent } from './backOffice/register-provider-admin/register-provider-admin.component';
import { RegisterLivreurAdminComponent } from './backOffice/register-livreur-admin/register-livreur-admin.component';
import { RegisterBuyerUserComponent } from './frontOffice/register-buyer-user/register-buyer-user.component';
import { RegisterLivreurUserComponent } from './frontOffice/register-livreur-user/register-livreur-user.component';
import { RegisterProviderUserComponent } from './frontOffice/register-provider-user/register-provider-user.component';
import {SendCodeUserComponent} from "./frontOffice/send-code-user/send-code-user.component";
import {RegisterVendorUserComponent} from "./frontOffice/register-vendor-user/register-vendor-user.component";
import { HomeUserComponent } from './frontOffice/home-user/home-user.component';
import { RegisterUserComponent } from './frontOffice/register-user/register-user.component';
import { PreloaderUserComponent } from './frontOffice/preloader-user/preloader-user.component';
import { AuthenticationUserComponent } from './frontOffice/authentication-user/authentication-user.component';
import { UploadLogoUserComponent } from './frontOffice/upload-logo-user/upload-logo-user.component';
import { HomeBuyerUserComponent } from './frontOffice/home-buyer-user/home-buyer-user.component';
import { HomeLivreurUserComponent } from './frontOffice/home-livreur-user/home-livreur-user.component';
import { HomeProviderUserComponent } from './frontOffice/home-provider-user/home-provider-user.component';
import { HomeVendorUserComponent } from './frontOffice/home-vendor-user/home-vendor-user.component';
import { ShowAdminComponent } from './backOffice/show-admin/show-admin.component';
import { DashboardAdminComponent } from './backOffice/dashboard-admin/dashboard-admin.component';
import { DetailsAdminComponent } from './backOffice/details-admin/details-admin.component';
import {PromotionUserComponent} from "./frontOffice/promotion-user/promotion-user.component";
import {PromotionAdminComponent} from "./backOffice/promotion-admin/promotion-admin.component";




import { NgbTooltipModule, NgbDropdownModule, NgbAccordionModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';


// Calendar package
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
// Flat Picker
import { FlatpickrModule } from 'angularx-flatpickr';
// Simplebar
import { SimplebarAngularModule } from 'simplebar-angular';
// Ck Editer
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
// Counter
import { CountToModule } from 'angular-count-to';
// Apex Chart Package
import { NgApexchartsModule } from 'ng-apexcharts';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import {CommonModule} from "@angular/common";
import {ChatComponent} from "./frontOffice/chat/chat.component";
import { LightboxModule} from "ngx-lightbox";
import {CreatePromotionComponent} from "./backOffice/promotion-admin/create-promotion/create-promotion.component";
import { RegiserAdminComponent } from './backoffice/regiser-admin/regiser-admin.component';
import { ForgotPwdUserComponent } from './frontOffice/forgot-pwd-user/forgot-pwd-user.component';
import { QrcodeUserComponent } from './frontOffice/qrcode-user/qrcode-user.component';
import { SendMailUserComponent } from './frontOffice/send-mail-user/send-mail-user.component';
import { UnsubscribeUserComponent } from './frontOffice/unsubscribe-user/unsubscribe-user.component';
import {Show2AdminComponent} from "./backOffice/show2-admin/show2-admin.component";
import {SendMailAdminComponent} from "./backOffice/send-mail-admin/send-mail-admin.component";
import {NgxPaginationModule} from "ngx-pagination";
import {PromotionlistComponent} from "./backOffice/promotion-admin/promotionlist/promotionlist.component";
import { ProduitListComponent } from './backOffice/produit-admin/produit-list/produit-list.component';
import { CatalogueAdminComponent } from './backOffice/catalogue-admin/catalogue-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    AllTemplateAdminComponent,
    AllTemplateUserComponent,
    MenuAdminComponent,
    NavbarAdminComponent,
    FooterAdminComponent,
    NavbarUserComponent,
    BannerUserComponent,
    FooterUserComponent,
    RegisterBuyerAdminComponent,
    RegisterVendorAdminComponent,
    RegisterProviderAdminComponent,
    RegisterLivreurAdminComponent,
    RegisterBuyerUserComponent,
    RegisterLivreurUserComponent,
    RegisterProviderUserComponent,
    RegisterVendorUserComponent,
    SendCodeUserComponent,
    HomeUserComponent,
    RegisterUserComponent,
    PreloaderUserComponent,
    AuthenticationUserComponent,
    UploadLogoUserComponent,
    HomeBuyerUserComponent,
    HomeLivreurUserComponent,
    HomeProviderUserComponent,
    HomeVendorUserComponent,
    ShowAdminComponent,
    DashboardAdminComponent,
    DetailsAdminComponent,
    PromotionUserComponent,
    PromotionAdminComponent,
    ChatComponent,
    PromotionAdminComponent,
    CreatePromotionComponent,
    RegiserAdminComponent,
    Show2AdminComponent,
    SendMailAdminComponent,
    ForgotPwdUserComponent,
    QrcodeUserComponent,
    SendMailUserComponent,
    UnsubscribeUserComponent,
    PromotionlistComponent,
    ProduitListComponent,
    CatalogueAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    ReactiveFormsModule,
    NgbTooltipModule,
    NgbDropdownModule,
    NgbAccordionModule,
    NgbProgressbarModule,
    FeatherModule.pick(allIcons),
    FlatpickrModule.forRoot(),
    SimplebarAngularModule,
    CKEditorModule,
    CountToModule,
    NgApexchartsModule,
    LeafletModule,
    LightboxModule,
    NgxPaginationModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
