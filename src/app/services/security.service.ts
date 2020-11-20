import { Injectable } from '@angular/core';

// Keycloak Library Import
import { KeycloakInstance } from 'keycloak-js';
import { throwError } from 'rxjs';

// Environnment Variables Import
import { environment } from '../../environments/environment';

declare var Keycloak: any;

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  public userIdentity: KeycloakInstance;

  constructor() { }

  async init() {

    console.log('Security initialization...');

    this.userIdentity = new Keycloak({
        url:      environment.KeycloakConfig.url,
        realm:    environment.KeycloakConfig.realm,
        clientId: environment.KeycloakConfig.clientId
    });

    await this.userIdentity.init({
      //onLoad: 'login-required',
      onLoad: 'check-sso',
      //promiseType: 'native'
      checkLoginIframe: false,
    });

    console.log(this.userIdentity);
  }

  // Login method
  login() {
    this.userIdentity.login();
  }

  // Logout method
  logout() {
    this.userIdentity.logout();
  }

  // Account managment method
  accountManagement() {
    this.userIdentity.accountManagement();
  }

  hasRole(userRole: string, portability: string = 'all') {

    if (this.userIdentity.authenticated) {

      let foundRole: Boolean = false;

      switch (portability) {
        case 'realm':
          if (this.userIdentity.hasRealmRole(userRole)) { foundRole = true; }
          break;

        case 'ressource':
          if (this.userIdentity.hasResourceRole(userRole)) { foundRole = true; }
          break;
      
        default:
          if (this.userIdentity.hasRealmRole(userRole) || this.userIdentity.hasResourceRole(userRole)) { foundRole = true; }
          break;
      }

      return foundRole;
    } else {
      return false;
    }
  }

  hasAttribute(userAttribute: string) {
    if (this.userIdentity.authenticated) {
      if (this.userIdentity.tokenParsed.hasOwnProperty(userAttribute)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  hasGroup(userGroup: string) {
    if (this.userIdentity.authenticated) {
      let userGroups: any;
      userGroups = this.userIdentity.tokenParsed['userGroups'];

      if (userGroups.includes('/' + userGroup)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  getAttribute(userAttribute: string) {
    if (this.userIdentity.authenticated) {
      if (this.hasAttribute(userAttribute)) {
        let current_user: any = this.userIdentity.tokenParsed;
        return current_user[userAttribute];
      } else {
        throwError("No existing attribute");
      }
    } else {
      return false;
    }
  }
}