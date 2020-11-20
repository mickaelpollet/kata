import { Component, OnInit } from '@angular/core';

// Import des services
import { SecurityService } from '../../services/security.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  page_title: string      = "Public Page";
  page_subject: string    = "Public Page";
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