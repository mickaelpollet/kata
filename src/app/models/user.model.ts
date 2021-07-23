// Concerned classes import
import { Role } from './role.model';
import { Group } from './group.model';

export class User {

  public id = '';
  public mail = '';
  public fname = '';
  public lname = '';
  public roles: Array<Role> = [];
  public groups: Array<Group> = [];

  constructor() { }
}
