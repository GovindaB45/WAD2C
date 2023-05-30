import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'registration form';
  displayname='';
  displayaddress='';
  displaycontact='';
  displayemail='';
  
  Value(name:string,address:string,contact:string,email:string){
    this.displayname=name;
    this.displayaddress=address;
    this.displaycontact=contact;
    this.displayemail=email;
  }
}
