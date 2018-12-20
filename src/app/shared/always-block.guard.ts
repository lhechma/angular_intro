import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AlwaysBlockGuard implements CanActivate {

  canActivate() {
    return false;
  }
}
