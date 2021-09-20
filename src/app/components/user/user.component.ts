import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component(
  {
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
  }
)
export class UserComponent implements OnInit 
{
  users:User[]=[];
  constructor (private userService:UserService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void 
  {
    this.findUsers();
  }

  findUsers() {
    this.userService.findUsers().subscribe((response) => {
      this.users = response.data
      console.log(response.data);
    });
  }
}
