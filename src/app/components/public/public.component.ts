import { Component, OnInit } from '@angular/core';

// Import des services
import { UserService } from '../../services/user.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  public pageTitle = 'Public Page';
  public pageSubject = 'Public Page';
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
