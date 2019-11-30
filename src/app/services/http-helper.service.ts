import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {
  baseURL: string = 'http://localhost:8000/api';
  constructor() { }
}
