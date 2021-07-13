import { Injectable } from '@angular/core';
import { Router } from "@angular/router"

// Environnment Variables Import
import { environment } from '../../environments/environment';

// Models import
import { currentUser } from "../models/currentUser.ifc";
import { Group } from '../models/group.model';
import { Role } from '../models/role.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public currentUser: currentUser = {} as currentUser;

  constructor(private router: Router) { }

  init(userIdentity: any) {
    this.currentUser.keycloakUser = userIdentity;

    if (this.isAuthenticated()) {
      this.currentUser.mail = this.currentUser.keycloakUser.tokenParsed.email;
      this.currentUser.lname = this.currentUser.keycloakUser.tokenParsed.family_name;
      this.currentUser.fname = this.currentUser.keycloakUser.tokenParsed.given_name;
      this.currentUser.id = this.currentUser.keycloakUser.subject;

      if (this.currentUser.keycloakUser.tokenParsed !== undefined) {

        let currentUserRoles: Role[] = [];
        let currentUserGroups: Group[] = [];

        // Adding Realm Roles
        for (let currentRole of this.currentUser.keycloakUser.realmAccess.roles) {
          let currentInstanciatedRole = new Role();
          currentInstanciatedRole.name = currentRole;
          currentUserRoles.push(currentInstanciatedRole);
        }
        this.currentUser.roles = currentUserRoles;

        // Adding Groups
        if (this.currentUser.keycloakUser.tokenParsed.hasOwnProperty('userGroups')) {
          for (let currentGroup of this.currentUser.keycloakUser.tokenParsed.userGroups) {
            let currentInstanciatedGroup = new Group;
            currentInstanciatedGroup.name = currentGroup;
            currentUserGroups.push(currentInstanciatedGroup);
          }
          this.currentUser.groups = currentUserGroups;
        }
      }
    }

    console.log(this.currentUser);
  }

  // Check if current user is authenticated from OIDC token
  isAuthenticated() {
    if (typeof this.currentUser.keycloakUser !== 'undefined' && this.currentUser.keycloakUser.authenticated) {
      return true;
    } else {
      return false;
    }
  }

  // Login method
  login() {
    this.currentUser.keycloakUser.login({
      redirectUri: environment.appUrl + '/private',               // Specifies the uri to redirect to after login.
      // prompt                                                   // This parameter allows to slightly customize the login flow on the Keycloak server side. For example enforce displaying the login screen in case of value login. See Parameters Forwarding Section for the details and all the possible values of the prompt parameter.
      // maxAge                                                   // Used just if user is already authenticated. Specifies maximum time since the authentication of user happened. If user is already authenticated for longer time than maxAge, the SSO is ignored and he will need to re-authenticate again.
      // loginHint                                                // Used to pre-fill the username/email field on the login form.
      scope: 'openid profile email',                              // Used to forward the scope parameter to the Keycloak login endpoint. Use a space-delimited list of scopes. Those typically reference Client scopes defined on particular client. Note that the scope openid will be always be added to the list of scopes by the adapter. For example, if you enter the scope options address phone, then the request to Keycloak will contain the scope parameter scope=openid address phone.
      // idpHint                                                  // Used to tell Keycloak to skip showing the login page and automatically redirect to the specified identity provider instead. More info in the Identity Provider documentation.
      // action                                                   // If value is register then user is redirected to registration page, otherwise to login page.
      // locale                                                   // Sets the 'ui_locales' query param in compliance with section 3.1.2.1 of the OIDC 1.0 specification.
      // cordovaOptions                                           // Specifies the arguments that are passed to the Cordova in-app-browser (if applicable). Options hidden and location are not affected by these arguments. All available options are defined at https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-inappbrowser/. Example of use: { zoom: "no", hardwareback: "yes" };
    });
  }

  // Logout method
  logout() {
    this.currentUser.keycloakUser.logout({
      redirectUri: environment.appUrl                             // Specifies the uri to redirect to after logout.
    });
  }

  // Account managment method
  accountManagement() {
    this.currentUser.keycloakUser.accountManagement();
  }

  // Check if user has specific role
  hasRole(userRole: string, portability: string = 'all') {

    if (this.currentUser.keycloakUser.authenticated) {

      let foundRole: Boolean = false;

      switch (portability) {
        case 'realm':
          if (this.hasRealmRole(userRole)) { foundRole = true; }
          break;

        case 'ressource':
          if (this.hasResourceRole(userRole)) { foundRole = true; }
          break;

        default:
          if (this.hasRealmRole(userRole) || this.hasResourceRole(userRole)) { foundRole = true; }
          break;
      }

      return foundRole;
    } else {
      return false;
    }
  }

  // Check if user has specific attribute
  hasAttribute(userAttribute: string) {
    if (this.currentUser.keycloakUser.authenticated) {
      if (this.currentUser.keycloakUser.tokenParsed?.hasOwnProperty(userAttribute)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  hasGroup(userGroup: string) {
    if (this.currentUser.keycloakUser.authenticated) {
      let userGroups: any;

      if (this.currentUser.keycloakUser.tokenParsed !== undefined && this.currentUser.keycloakUser.tokenParsed.hasOwnProperty('userGroups')) {
        userGroups = this.currentUser.keycloakUser.tokenParsed.userGroups;
      }

      if (userGroups.includes('/' + userGroup)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  hasRealmRole(role: string) {
    if (this.currentUser.keycloakUser.hasRealmRole(role)) {
      return true;
    } else {
      return false;
    }
  }

  hasResourceRole(role: string) {
    if (this.currentUser.keycloakUser.hasResourceRole(role)) {
      return true;
    } else {
      return false;
    }
  }

  getAttribute(userAttribute: string) {
    if (this.currentUser.keycloakUser.authenticated) {
      if (this.hasAttribute(userAttribute)) {
        let current_user: any = this.currentUser.keycloakUser.tokenParsed;
        return current_user[userAttribute];
      }/* else {
        throwError("No existing attribute");
      }*/
    } else {
      return false;
    }
  }
}
