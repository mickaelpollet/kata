import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Specifics modules
import { MaterialModule } from './modules/material/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';

// Security
import { SecurityService } from './services/security.service';
import { RequestInterceptorService } from './services/request-interceptor.service';
import { ErrorComponent } from './components/error/error.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { HomeComponent } from './components/home/home.component';
import { PublicComponent } from './components/public/public.component';
import { PrivateComponent } from './components/private/private.component';

// Specific Keycloak Instanciation Function
export function kcFactory(kcInstance: SecurityService) {
    return ()=> kcInstance.init();
}

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    TopMenuComponent,
    HomeComponent,
    PublicComponent,
    PrivateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    { provide: APP_INITIALIZER, deps: [ SecurityService ], useFactory: kcFactory, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
