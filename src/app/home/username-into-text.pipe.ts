import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usernameIntoText',
})
export class UsernameIntoTextPipe implements PipeTransform {
  transform(text: string, sliceTo = 1) {
    const credentials = localStorage?.getItem('credentials');
    const username = credentials ? JSON.parse(credentials)['username'] : '';
    return `${text.split(' ').slice(0, sliceTo)} ${username} !`;
  }
}
