import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  //Properties
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }
  users: User[];
  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;
  data: any;

  //Methods
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getData().subscribe(data => {
      console.log(data)
    })
    
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });


    this.showExtended = true;

  }
  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();
  //   this.users.unshift(this.user);
  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: ''
  //   }
  // }

  // toggleHide(user: User) {
  //   user.hide = !user.hide;
  // }

  onSubmit({value, valid} : {value: User, valid: boolean}) {
    if(!valid){
      console.log('Form is not valid')
    } else{
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.userService.addUser(value);
      
      this.form.reset();
    }
  }
  
}
