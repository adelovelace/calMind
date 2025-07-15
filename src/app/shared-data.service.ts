import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private beforeFeeling: string = '';
  private afterFeeling: string = '';
  

  constructor() { }

  getBeforeFeeling(): string {
    return this.beforeFeeling;
  }
  setBeforeFeeling(value: string): void {
    this.beforeFeeling = value;
  }


  getAfterFeeling(): string {
    return this.afterFeeling;
  }
  setAfterFeeling(value: string): void {
    this.afterFeeling = value;
  }
  
}
