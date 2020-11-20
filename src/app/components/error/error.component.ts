import { Component, OnInit } from '@angular/core';

// Services Import
import { ErrorService } from '../../services/error.service';
import { SecurityService } from '../../services/security.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})

export class ErrorComponent implements OnInit {

  page_title: string      = "Oh no...!!!";
  page_subject: string    = "Something wrong...";
  page_blazon: string     = "gringotts_logo";
  page_menu_color: string = "#722704"
  error_message: string   = 'I think there is a problem...';

  constructor(public errorService: ErrorService,
              public securityService: SecurityService,
              public menuService: MenuService) {
    this.menuService.menu_color = this.page_menu_color;
  }

  ngOnInit(): void {
    this.error_message = this.errorService.errorMessage;
  }
}
