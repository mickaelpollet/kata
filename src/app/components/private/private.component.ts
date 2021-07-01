import { Component, OnInit } from '@angular/core';

// Import des services
import { UserService } from '../../services/user.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  page_title: string = "Private Page";
  page_subject: string = "Private Page";
  page_menu_color: string = "#424242";
  userFirstName: any;

  constructor(public userService: UserService,
    public menuService: MenuService) {

    this.menuService.menu_color = this.page_menu_color;

    if (this.userService.isAuthenticated()) {
      this.userFirstName = this.userService.currentUser.fname;
    }
  }

  ngOnInit(): void {
  }

}
