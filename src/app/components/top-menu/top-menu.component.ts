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
  menuColor: string;

  constructor(public userService: UserService, public menuService: MenuService) {
    this.menuColor = this.menuService.menuColor;
  }

  ngOnInit(): void { }

  // Login method
  login(): void {
    this.userService.login();
  }

  // Logout method
  logout(): void {
    this.userService.logout();
  }

  // Account managment method
  accountManagement(): void {
    this.userService.accountManagement();
  }

  // Check User Role
  hasRole(userRole: string | string[]): boolean {

    const userRoleTesting: any = userRole;

    if (typeof userRoleTesting === 'string') {
      if (this.userService.hasRole(userRoleTesting)) {
        return true;
      } else {
        return false;
      }
    } else {

      let userAccess = false;

      for (const currentUserRole of userRoleTesting) {
        if (this.userService.hasRole(currentUserRole)) {
          userAccess = true;
        }
      }

      return userAccess;
    }
  }

  hasAttribute(attribute: string): boolean {
    return this.userService.hasAttribute(attribute);
  }

  getAttribute(attribute: string): boolean {
    return this.userService.getAttribute(attribute);
  }

}
