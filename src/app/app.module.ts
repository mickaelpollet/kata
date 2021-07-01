import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Specifics modules
import { MaterialModule } from './modules/material/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { CountdownModule } from 'ngx-countdown';

// Security
import { SecurityService } from './services/security.service';
import { RequestInterceptorService } from './services/request-interceptor.service';
import { ErrorComponent } from './components/error/error.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { HomeComponent } from './components/home/home.component';
import { PublicComponent } from './components/public/public.component';
import { PrivateComponent } from './components/private/private.component';
import { UserComponent } from './components/user/user.component';
import { TokenInformationsComponent } from './components/token-informations/token-informations.component';
import { TokenTechnicalsInformationsComponent } from './components/token-technicals-informations/token-technicals-informations.component';
import { TokenUserInformationsComponent } from './components/token-user-informations/token-user-informations.component';
import { UserAuthenticationLevelComponent } from './components/user-authentication-level/user-authentication-level.component';
import { UserSessionTimerComponent } from './components/user-session-timer/user-session-timer.component';
import { AdminComponent } from './components/admin/admin.component';

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
    PrivateComponent,
    UserComponent,
    TokenInformationsComponent,
    TokenTechnicalsInformationsComponent,
    TokenUserInformationsComponent,
    UserAuthenticationLevelComponent,
    UserSessionTimerComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CountdownModule
  ],
  providers: [
    { provide: APP_INITIALIZER, deps: [ SecurityService ], useFactory: kcFactory, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
