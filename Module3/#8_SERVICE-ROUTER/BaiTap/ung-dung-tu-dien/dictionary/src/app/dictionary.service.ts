import { Injectable } from '@angular/core';

export interface IWord {
  key: string;
  meaning: string;
}
@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private words: IWord[] = [
    {key: 'snow', meaning: 'Tuyết'},
    {key: 'dark', meaning: 'Bóng tối'},
    {key: 'ghost', meaning: 'Ma'}
  ];

  search(word: string): string {
    if (!word) {
      return '';
    }
    const w = this.words.find(item => item.key === word.toLocaleLowerCase());
    if (w) {
      return w.meaning;
    }
    return 'Not Found';
  }
  constructor() { }
}
