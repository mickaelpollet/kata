import { Injectable } from '@angular/core';

// Keycloak Library Import
import { KeycloakInstance } from 'keycloak-js';

// Environnment Variables Import
import { environment } from '../../environments/environment';

// Service Import
import { UserService } from "./user.service";

declare var Keycloak: any;

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  public userIdentity: KeycloakInstance = {} as KeycloakInstance;

  constructor(private userService: UserService) { }

  async init() {

    console.log('Security initialization...');

    this.userIdentity = new Keycloak({
      url: environment.KeycloakConfig.url,
      realm: environment.KeycloakConfig.realm,
      clientId: environment.KeycloakConfig.clientId
    });

    await this.userIdentity.init({
      //onLoad: 'login-required',           // L'utilisateur s'authentifie immédiatmeent
      onLoad: 'check-sso',                  // L'utilisateur n'a pas besoin d'être authentifié initialement
      //promiseType: 'native'
      checkLoginIframe: false,
    });

    // User instanciation
    await this.userService.init(this.userIdentity);
  }
}
