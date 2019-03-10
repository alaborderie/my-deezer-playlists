import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    console.log(value);
    const hours: number = parseInt((value / 3600).toString(), 10);
    const minutes: number = parseInt(((value - (hours * 3600)) / 60).toString(), 10);
    const seconds: number = value - ((hours * 3600) + (minutes * 60));
    console.log(`${hours}:${minutes}:${seconds}`);
    return `${hours}:${minutes}:${seconds}`;
  }

}
