import { Component, OnInit } from '@angular/core';

// Import des services
import { SecurityService } from '../../services/security.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  page_title: string      = "Keycloak Angular Testing Application";
  page_subject: string    = "Application testing for Keycloak environment";
  page_menu_color: string = "#424242";
  userFirstName: any;

  constructor(public securityService: SecurityService,
              public menuService: MenuService) {

    this.menuService.menu_color = this.page_menu_color;

    if (this.securityService.userIdentity.authenticated) {
      this.userFirstName = this.securityService.userIdentity.tokenParsed['given_name'];
    }
  }

  ngOnInit(): void {
  }

}