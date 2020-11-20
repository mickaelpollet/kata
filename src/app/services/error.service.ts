import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ErrorService {

  public errorMessage: string = 'An error has occured';

  constructor() { }
}
