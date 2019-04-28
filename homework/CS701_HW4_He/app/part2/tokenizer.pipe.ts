import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tokenizer'
})
export class TokenizerPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if ( typeof value === 'string') {
      let result: string;
      result = '';
      if (args) {
        result = this.pad(value, args, '0');
      } else {
        for (let i = 0; i < value.length - 1; i++) {
          result += value[i];
          result += ',';
        }
        result += value[value.length - 1];
      }
      return result;
    }
  }

  private pad (value: any, size: any, fill: string): string {
    let result: string;
    result = '';
    for (let i = 0; i < value.length - 1; i++) {
      result += value[i];
      result += size;
    }
    result += value[value.length - 1];
    return result;
  }

}
