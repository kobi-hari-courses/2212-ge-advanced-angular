import { Injectable } from '@angular/core';
import { ALLCOLORS } from '../models/all-colors';
import { Color } from '../models/color.model';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

    private allColors: Color[] = Object.entries(ALLCOLORS)
                              .map((pair) => ({code: pair[0], displayName: pair[1]}));

  constructor() { }

    delay(millis: number): Promise<void> {
        return new Promise(res => setTimeout(res, millis));
    }

  async search(keyword: string): Promise<Color[]> {
    console.log('searching for', keyword);
    if (!keyword) return [];

    await this.delay(3000);

    keyword = keyword.toLowerCase();
    const res = this.allColors.filter(clr => clr.displayName.toLowerCase().includes(keyword));

    console.log('completed search for ', keyword);
    return res;
  }
}
