import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { isString } from 'util';

// Import des services
import { SecurityService } from '../../services/security.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})

export class TopMenuComponent implements OnInit {

  title: string = environment.appName;
  currentUser: any;
  menu_color: string;

  constructor(public securityService: SecurityService, public menuService: MenuService) {
    this.currentUser = this.securityService.userIdentity.tokenParsed;
    this.menu_color = this.menuService.menu_color;
  }

  ngOnInit(): void {}

  // Login method
  login() {
    this.securityService.login();
  }

  // Logout method
  logout() {
    this.securityService.logout();
  }

  // Account managment method
  accountManagement() {
    this.securityService.accountManagement();
  }

  // Check User Role
  hasRole(userRole: string | string[]) {

    let userRoleTesting: any = userRole;

    if (isString(userRoleTesting)) {
      if (this.securityService.hasRole(userRoleTesting)) {
        return true;
      } else {
        return false;
      }
    } else {

      let userAccess: boolean = false;

      for (let currentUserRole of userRoleTesting) {
        if (this.securityService.hasRole(currentUserRole)) {
          userAccess = true;
        }
      }

      return userAccess;
    }
  }

  hasAttribute(attribute: string) {
    return this.securityService.hasAttribute(attribute);
  }

  getAttribute(attribute: string) {
    return this.securityService.getAttribute(attribute);
  }

}