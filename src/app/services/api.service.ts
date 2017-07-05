import { Injectable, OnInit, Input } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {

  data : object[];

  constructor(private http:Http) { }

  // ngOnInit() {
  // this.getData()
  // .subscribe(result => this.data = result);
  // }

  getData(){

    return this.http
    .get('https://jsonplaceholder.typicode.com/users')
    .map(result => result.json()) /* buat mapping json */
    .catch(error => Observable.throw(error.json().error || "Server Error")); /* buat handle error */
  }

  addData(obj:Object){
    let body = JSON.stringify(obj);
    let headers = new Headers ({ "Content-Type":"application/json" });
    let options = new RequestOptions ({ headers:headers });

    this.http.post('https://jsonplaceholder.typicode.com/users',body,options)
    .subscribe(result => console.log(result.json()));

  }  

  deleteUser(i){
    this.data.splice(i,1);
  }

  addUser()
  {
    this.addData( { "name":"User1" } );
  }


}
