/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';


import { LoginComponent } from './login/login.component';
import { RestAPIInterceptor } from './core_auth/interceptor/rest.api.Interceptor';
import { PagesModule } from './pages/pages.module';
import { ToursModule } from '../app/pages/tours/tours.module';
import { FileTypeValidatorDirective } from './directives/file-type-validator.directive';
import { BadgeModule } from './pages/badge/badge.module';

@NgModule({
  declarations: [AppComponent, LoginComponent, FileTypeValidatorDirective],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    PagesModule,
    ToursModule,
    BadgeModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: RestAPIInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {
}
