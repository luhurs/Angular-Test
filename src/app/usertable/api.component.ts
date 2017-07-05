import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../services/api.service'

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class UsertableComponent implements OnInit {

  data : object[];

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.getData()
    .subscribe(result => this.data = result);
  }

  // deleteUser(i){
  //   this.data.splice(i,1);
  // }

  // addUser()
  // {
  //   this.api.addData( { "name":"User1" } );
  //   this.data.push(this.api);

  // }

}
