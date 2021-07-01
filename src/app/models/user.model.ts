// Concerned classes import
import { Role } from "./role.model";
import { Group } from "./group.model";

export class User {

  public id: string = '';
  public mail: string = '';
  public fname: string = '';
  public lname: string = '';
  public roles: Array<Role> = [];
  public groups: Array<Group> = [];

  constructor() { }
}
