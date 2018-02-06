import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdfvali',
  templateUrl: './tdfvali.component.html',
  styleUrls: ['./tdfvali.component.css'],
  styles:["input.ng-invalid{border-left:5px solid red;}input.ng-valid{border-left:5px solid green;}"]
})
export class TdfvaliComponent implements OnInit {
  myName="Brandon";
  onSubmit(value:any)
  {
   console.log(value);
  }

  constructor() {
  
   }

  ngOnInit() {
  }

}
