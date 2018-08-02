import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: true
})
export class FilterPipe implements PipeTransform {

  transform(collection: any[], field: any, value:any): any[] {
    if (! collection) {
      return [];
    }
    if (!field || !value) {
      return collection;
    }
    if (typeof value === 'string') {
      console.log(field + value);
      return collection.filter(list => list[field].toLowerCase().includes(value.toLowerCase()));
    } else {
      return collection.filter(item => item[field] === value);
    }   
  }  
}
