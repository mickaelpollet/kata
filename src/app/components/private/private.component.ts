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

  public pageTitle = 'Private Page';
  public pageSubject = 'Private Page';
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
