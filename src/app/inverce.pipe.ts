import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inverce'
})
export class InvercePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
