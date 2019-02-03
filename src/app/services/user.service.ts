import { Injectable } from '@angular/core'
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //Properties
  users: User[];
  data: Observable<any>

  constructor() {
    this.users = [
      {
        firstName: 'Neo',
        lastName: 'Anderson',
        email: 'neo@gmail.com',
        isActive: true,
        registered: new Date('2/3/2018 16:20:50'),
        hide: true
      },
      {
        firstName: 'Brad',
        lastName: 'Traversy',
        email: 'brad@yahoo.com',
        isActive: false,
        registered: new Date('2/4/2017 20:45:20'),
        hide: true
      },
      {
        firstName: 'John',
        lastName: 'Smith',
        email: 'john@outlook.com',
        isActive: true,
        registered: new Date('5/5/2018 16:30:30'),
        hide: true
      }
    ];
  }

  getData(){
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1)
      }, 1000);

      setTimeout(() => {
        observer.next(2)
      }, 2000);

      setTimeout(() => {
        observer.next(3)
      }, 3000);

      setTimeout(() => {
        observer.next(4)
      }, 4000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]> {
    console.log('Fetching users from service..')
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
