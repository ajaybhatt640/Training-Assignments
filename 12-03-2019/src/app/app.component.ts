import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   onClickSubmit(data){
     alert(data.firstName);
     alert(data.email);
   
   var dataArray = [];
   dataArray.push({ 'Name': data.firstName,'Email': data.email}); 
 }}
