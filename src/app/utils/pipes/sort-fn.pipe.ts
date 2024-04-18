import { Pipe, PipeTransform } from '@angular/core';
import { NzTableSortFn } from 'ng-zorro-antd/table';

@Pipe({
  name: 'sortFn',
  standalone: true
})
export class SortFnPipe implements PipeTransform {

  transform(col: string): NzTableSortFn {
    let sortedFn:NzTableSortFn =(a: any, b: any) => {
      console.log('Sorted called!');
      const val1 = a[col];
      const val2 = b[col];

      if(Number.isInteger(val1)){
        return val1-val2;
      }

      return val1.localeCompare(val2)
    }
    return sortedFn;
  }



}
