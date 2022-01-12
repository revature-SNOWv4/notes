import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'piglatin'
})
export class PiglatinPipe implements PipeTransform {

  transform(value: string): string {
    return value.slice(1) + value.slice(0,1)+"ay";
  }

}
