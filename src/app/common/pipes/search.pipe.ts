import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../models/interfaces';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(users: IUser[], searchValue: string) {
    return users.filter(user => user.name.toLowerCase().includes(searchValue)
      || user.username.toLowerCase().includes(searchValue)
      || user.email.toLowerCase().includes(searchValue)
      || user.phone.toLowerCase().includes(searchValue)
    );
  }

}
