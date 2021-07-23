import { Component, OnInit } from '@angular/core';

// Services Import
import { ErrorService } from '../../services/error.service';
import { UserService } from '../../services/user.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})

export class ErrorComponent implements OnInit {

  public pageTitle = 'Oh no...!!!';
  public pageSubject = 'Something wrong...';
  public pageMenuColor = '#424242'
  public errorMessage = 'I think there is a problem...';

  constructor(public errorService: ErrorService,
    public userService: UserService,
    public menuService: MenuService) {
    this.menuService.menuColor = this.pageMenuColor;
  }

  ngOnInit(): void { }
}
