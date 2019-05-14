import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { DataService } from '../data.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users$: User[];
  
  constructor(private dataService: DataService) {}

  ngOnInit() {
    return this.dataService.getUsers()
     .subscribe(data =>  this.users$ = data); 
  }

}
