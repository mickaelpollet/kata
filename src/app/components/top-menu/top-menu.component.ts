import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

// Import des services
import { UserService } from '../../services/user.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})

export class TopMenuComponent implements OnInit {

  title: string = environment.appNameAcronym;
  menu_color: string;

  constructor(public userService: UserService, public menuService: MenuService) {
    this.menu_color = this.menuService.menu_color;
  }

  ngOnInit(): void { }

  // Login method
  login() {
    this.userService.login();
  }

  // Logout method
  logout() {
    this.userService.logout();
  }

  // Account managment method
  accountManagement() {
    this.userService.accountManagement();
  }

  // Check User Role
  hasRole(userRole: string | string[]) {

    let userRoleTesting: any = userRole;

    if (typeof userRoleTesting === 'string') {
      if (this.userService.hasRole(userRoleTesting)) {
        return true;
      } else {
        return false;
      }
    } else {

      let userAccess: boolean = false;

      for (let currentUserRole of userRoleTesting) {
        if (this.userService.hasRole(currentUserRole)) {
          userAccess = true;
        }
      }

      return userAccess;
    }
  }

  hasAttribute(attribute: string) {
    return this.userService.hasAttribute(attribute);
  }

  getAttribute(attribute: string) {
    return this.userService.getAttribute(attribute);
  }

}
