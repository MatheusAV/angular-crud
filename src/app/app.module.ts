import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertService } from './shared/services/alert.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HomeModule } from './pages/home/home.module';

@NgModule({ declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        HomeModule,
        AppRoutingModule], providers: [
        AlertService,
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
