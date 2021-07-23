// Concerned classes import
import { User } from './user.model';

export interface CurrentUser extends User {

  // Technical Data
  keycloakUser: any;
  token: string;

  // Optional Data

}
