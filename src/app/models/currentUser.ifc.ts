// Concerned classes import
import { User } from "./user.model";

export interface currentUser extends User {

  // Technical Data
  keycloakUser: any;
  token: string;

  // Optional Data

}
