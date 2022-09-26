import { Injectable } from '@angular/core';

const key = 'authToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public hasToken(): boolean {
      return !!this.getToken();
    }

  public setToken(token: string) {
    window.localStorage.setItem(key, token);
  }

  public getToken() {
    return window.localStorage.getItem(key);
  }

  public removeToken() {
    window.localStorage.removeItem(key);
  }

}