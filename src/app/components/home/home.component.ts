import { Component, OnInit } from '@angular/core';

// Import des services
import { UserService } from '../../services/user.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public pageTitle = 'Keycloak Angular Testing Application';
  public pageSubject = 'Application testing for Keycloak environment';
  public pageMenuColor = '#424242';
  public userFirstName: any;

  constructor(public userService: UserService,
    public menuService: MenuService) {

    this.menuService.menuColor = this.pageMenuColor;

    if (this.userService.isAuthenticated()) {
      this.userFirstName = this.userService.currentUser.fname;
    }
  }

  ngOnInit(): void {
  }

}
