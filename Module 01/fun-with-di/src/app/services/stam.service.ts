import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StamService {

  constructor() { }
}


interface Person {
    name: string;
    age?: number;
}

class Dog {
    name: string = '';
    age: number = 0;
    print(): void {
        console.log('My dog is printing');
    }
}



function rollDye() : 1 | 2| 3 | 4 | 5 | 6{
    return 4;
}

interface Printable {
    print(): void;
}

function doSomethingAndPrint(p: Person) {
    let b: number = p.age!;

    if ((b === 5) || (b === 3)) {
        const g = b;
    }
}