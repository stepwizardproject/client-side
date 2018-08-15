import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public minutes: number;
  public question: string;
  public ideas: string[] = [];
  constructor() { }
}
