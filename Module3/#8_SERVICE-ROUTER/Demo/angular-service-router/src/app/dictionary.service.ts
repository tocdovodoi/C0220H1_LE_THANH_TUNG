import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export interface IWord {
  key: String;
  meaning: String;
}

export class DictionaryService {
  private words: IWord[] = [
      {key: 'rock', meaning: 'đá'},
      {key: 'snow', meaning: 'tuyết'},
      {key: 'fighting', meaning: 'võ sĩ'},
      {key: 'steel', meaning: 'thép'},
      {key: 'dark', meaning: 'bóng tối'},
      {key: 'water', meaning: 'nước'},
      {key: 'dragon', meaning: 'rồng'},
      {key: 'grass', meaning: 'cỏ'},
      {key: 'electric', meaning: 'điện'},
      {key: 'flying', meaning: 'bay'},
      {key: 'normal', meaning: 'thường'}
    ];

  search(word: String): String {
    if (!word) {
      return ''
    }
    const w = this.words.find(item => item.key === word.toLocaleLowerCase());
    if (w) {
      return w.meaning;
    }
    return 'not found';
  }
  constructor() {
  }
}
