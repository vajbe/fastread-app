import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newscontentShorten'
})
export class NewscontentShortenPipe implements PipeTransform {

  transform(value: String): String {
    if (typeof (value) != 'undefined' && value != null) {
      console.log(value);
      const value1 = value.slice(0, value.indexOf('[+'));
      value = value1;
    }
    return value;
  }

}
