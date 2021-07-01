import { Injectable } from '@angular/core';
import { Router } from "@angular/router"

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
    this.currentUser.keycloakUser.login();
  }

  // Logout method
  logout() {
    this.currentUser.keycloakUser.logout();
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
