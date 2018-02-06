import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf2',
  templateUrl: './tdf2.component.html',
  styleUrls: ['./tdf2.component.css'],
  styles:["input.ng-invalid{border-left:5px solid red;}input.ng-valid{border-left:5px solid green;}"]
})
export class Tdf2Component implements OnInit {
  onSubmit(value:any)
  {
   console.log(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
