import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit() {
  }

  addUser()
    {
      this.api.addData( { "name":"User1" } );

    }
}
