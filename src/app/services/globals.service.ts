import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  constructor() { }

  private params = [];

  public set(key:string, value:any) {
    this.params[key] = value;
  }

  public get(key:string) {
    return this.params[key];
  }
}
