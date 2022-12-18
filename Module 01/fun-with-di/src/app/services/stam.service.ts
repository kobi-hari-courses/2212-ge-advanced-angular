import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StamService {

    private counter = 0;

  constructor() { }

  getSomeString() {
    return 'Hello World ' + this.counter++;
  }

  async init(): Promise<void> {
    console.log('Starting init of Stam Service');
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Completed init of Stam Service');
  }
}



