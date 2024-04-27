import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {
  transform(isCanFly: boolean): 'Vuela' | 'No vuela' {
    return (isCanFly) ? 'Vuela' : 'No vuela'
  }
}
