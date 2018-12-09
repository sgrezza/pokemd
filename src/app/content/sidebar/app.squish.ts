import {Pipe, PipeTransform} from '@angular/core/'

@Pipe({
  name: 'squish'
})
/**Turns "Title Case" into "titlecase" */
export class SquishPipe implements PipeTransform {
  transform(val: string) : string {
    val = val.replace(/\s/g, '');
    return val.toLowerCase();
  }
}