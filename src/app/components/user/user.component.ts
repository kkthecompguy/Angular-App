import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';


@Component({
    selector: 'app-user',
    //template: '<h2>John Doe</h2>'
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
    //Properties
    user: User;

    //Method
    constructor(){

    }

    ngOnInit() {
        this.user = {
            firstName: 'Kosam',
            lastName: 'Omollo',
            email: 'kk@gmail.com'
        }
    }
}

